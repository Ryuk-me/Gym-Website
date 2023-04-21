const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

const Registration = mongoose.model("Registration", RegistrationSchema);
module.exports = Registration;
