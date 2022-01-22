const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const router = Router();

router.post("/api/account", authController.signup_post);
router.post("/api/login", authController.login_post);
router.get("/api/logout", authController.logout_get);
router.get("/api/authorization", authController.logout_get);

module.exports = router;
