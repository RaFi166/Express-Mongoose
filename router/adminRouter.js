const express = require("express");
const { getAdmin, sendAdmin, singleData } = require("../controller/adminController");
const router = express.Router();

//admin router
router.get("/home", getAdmin);
router.post("/senddata", sendAdmin);
router.get("/data/:id", singleData)

module.exports = router;
