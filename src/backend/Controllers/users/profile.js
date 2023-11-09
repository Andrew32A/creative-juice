import User from "../../models/user.js";

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select(
      "username posts"
    );

    return res.status(200).json({
      success: true,
      user,
    });
  }
  catch (err) {
    console.log(err);
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select(
      "username posts"
    );
    return res.status(200).json({
      user,
    });
  }
  catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res
      .status(200)
      .json(
        users
      );
  }
  catch (err) {
    next(err);
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const {
      email,
      username,
    } = req.body;

    const fields = {
      email,
      username,
    }

    // check if email is taken
    const foundUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (foundUser) {
      const message = foundUser.Email === email ?
        "Email is already in use." 
        : "Username is already in use.";
      return res.status(400).json({message});
    }

    const selectFields = Object.keys(fields).join(" ");

    const user = await User.findByIdAndUpdate(
      req.user.id,
      fields,
      {
        new: true,
        select: selectFields,
      }
      );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      user,
    });

  }
  catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.status(200).json({
      success: true,
      message: "User deleted",
    });
  }
  catch (err) {
    res.status(500).json({ message: err });
    next(err);
  }
};

export default getUsers