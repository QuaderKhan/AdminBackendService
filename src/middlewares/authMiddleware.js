import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
     // Bypass when BYPASS_AUTH=true (for local dev/testing only)
  if (process.env.BYPASS_AUTH === "true") {
    return next();
  }
  try {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not authorized, no token" });
    }

    token = token.split(" ")[1]; // remove "Bearer"

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info to request

    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Token invalid or expired" });
  }
};
