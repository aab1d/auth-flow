const validateUser = (req, res, next) => {
  const { username, role, password } = req.body;
  if (!username || !role || !password) {
    return res
      .status(400)
      .json({ message: "Fill complete details to register." });
  }
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long." });
  }
  next();
};

export default validateUser;
