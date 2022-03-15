const express = require("express");
const app = express();
const port = 3000;
const bodyparse = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyparse.json());
app.use(express.urlencoded());

//connect to moongoose
mongoose
  .connect("mongodb://localhost/practiceCRUD")
  .then(() => console.log("successfull"))
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.send("hello from home");
});

//admin router
app.use("/admin", require("./router/adminRouter.js"));

//user router
app.use("/user", require("./router/userRouter"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
