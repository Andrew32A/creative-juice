import User from "../../models/user.js";

export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // console.log(`body ${Object.keys(req.body)}`);
    const fields = {
      username,
      email,
      password,
    };

    //check if username or email already in use
    const foundUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (foundUser) {
      const message =
        foundUser.username === username
          ? "Username is already taken"
          : "Email is already taken";
      return res.status(400).json({ message });
    }

    const user = new User(fields);
    const token = await user.schema.methods.getSignedJwtToken(user._id);
    await user.save();

    res
      .status(201)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        success: true,
        message: "User created!",
      });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    //check if user exists
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ message: `Error user:${username} not found!` });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Username or password incorrect!" });
    }

    const token = await user.schema.methods.getSignedJwtToken(user._id);

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        success: true,
        message: "User logged in successfully",
      });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const logout = async (req, res, next) => {
  try {
    res
      .status(200)
      .cookie("access_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(0),
      })
      .json({
        success: true,
        message: "user logged out",
      });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
