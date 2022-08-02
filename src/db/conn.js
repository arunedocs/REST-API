const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/student-api")
  .then(() => {
    console.log("Connection Established with mongodb..");
  })
  .catch((e) => {
    console.log("NO CONNECTION");
  });
