const express = require("express");

const getAdmin = (req, res) => {
  res.send("hello from admin");
};

const sendAdmin = (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("dara sent")
};

const singleData = (req,res)=>{
    const singledata = req.params.id;
    console.log(singledata);
    res.send("singledata sent")
}

module.exports = {
  getAdmin,
  sendAdmin,
  singleData
};
