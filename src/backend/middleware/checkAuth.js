import jsonwebtoken from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    // Verify the token using your secret key
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);

    // Attach the decoded token to the request object
    req.user = decoded;

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error.bind(console, `Error in authorization middleware: ${error}`);
    return res.status(403).json({ message: "Authorization failed.", error });
  }
};