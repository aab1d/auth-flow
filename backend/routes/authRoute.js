import { Router } from "express";
import { loginUser, registerUser } from "../controller/userController.js";
import validateUser from "../middlewares/validateUser.js";
import validateLogin from "../middlewares/validateLogin.js";
import checkDuplicateUser from "../middlewares/checkDuplicateUser.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.post("/register", validateUser, checkDuplicateUser, registerUser);
router.post("/login", validateLogin, loginUser);
router.get("/me", auth, (req, res) => {
  res.json({ user: req.user });
});

export default router;
