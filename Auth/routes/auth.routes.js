const { Router } = require("express");
const { login, logout, register, authorized, getUser } = require("../controllers/auth.controller");
const router = Router();

router.post("/account", register);
router.get("account", getUser);
router.post("/login", login);
router.get("/logout", logout);
router.get("/authorization", authorized);

module.exports = router;
