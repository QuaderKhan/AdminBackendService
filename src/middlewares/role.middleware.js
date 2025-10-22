export const restrictTo = (...roles) => (req, res, next) => {
  if (!req.user?.role?.name || !roles.includes(req.user.role.name)) {
    return res.status(403).json({ success: false, message: "Forbidden" });
  }
  next();
};
