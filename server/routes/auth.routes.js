const Router = require("express");
const { check } = require("express-validator");
const router = new Router();
const authController = require("../controller/auth.controller");

router.post(
  "/registration",
  [
    check("login", "This field can't be empty!").notEmpty(),
    check("login", "Enter your email adress").isEmail(),
    check("password", "Password must be from 4 to 10 symbols").isLength({
      min: 4,
      max: 10,
    }),
  ],
  authController.createUser
);
router.post("/login", authController.loginUser);
router.get("/users", authController.getUsers);

module.exports = router;
