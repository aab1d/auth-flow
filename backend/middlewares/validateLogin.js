const validateLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username or password cannot be empty!" });
  }
  next();
};

export default validateLogin;
