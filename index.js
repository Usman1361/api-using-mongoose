const express = require("express");
const app = express();
const db = require("./config");
const user = require("./user");
app.use(express.json());
const addUser = async (req, res) => {
  const user1 = new user(req.body);
  const response = await user1.save();
  res.send({
    message: "success",
    data: req.body,
  });
  console.log(response);
};
const updateUser = async (req, res) => {
  const response = await user.updateOne(req.params, {
    $set: req.body,
  });
  res.send({
    message: "success",
    data: req.body,
  });
  console.log(response);
};
const deleteUser = async (req, res) => {
  const response = await user.deleteOne(req.params);

  res.send({
    message: "success",
    data: response,
  });
  console.log(response);
};
const getUser = async (req, res) => {
  const response = await user.find();
  res.send({
    message: "success",
    data: response,
  });
  console.log(response);
};
app.post("/adduser", addUser);
app.get("/getuser", getUser);
app.delete("/deleteuser/:_id", deleteUser);
app.put("/updateuser/:name", updateUser);
app.listen(1000);
