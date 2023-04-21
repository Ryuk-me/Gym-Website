const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const RegistrationModel = require("./models/Registration");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://coder_17:261101@gym.mjsevv0.mongodb.net/registration?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;

  const registration = new RegistrationModel({
    email: email,
    name: name,
    number: number,
  });
  try {
    await registration.save();
    res.send("Data saved");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
