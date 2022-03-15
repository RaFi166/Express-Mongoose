const express = require("express");
const {
  getUser,
  sendUser,
  deleteone,
  updateOne,
} = require("../controller/userController");
var userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/sendUser", sendUser);
userRouter.put("/updateone/:id", updateOne);
userRouter.delete("/delete/:id", deleteone);

module.exports = userRouter;
