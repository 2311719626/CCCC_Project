const express = require("express");
const router = express.Router();
const poemController = require("../controllers/poem.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.use(authMiddleware);

router.get("/", poemController.getPoems);

module.exports = router;
