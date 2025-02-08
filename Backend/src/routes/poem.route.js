const express = require("express");
const router = express.Router();
const poemController = require("../controllers/poem.controller");

router.get("/", poemController.getPoems);

module.exports = router;
