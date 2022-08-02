const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: [true, "Email is already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
  },
  address: {
    type: String,
    minlength: 5,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
