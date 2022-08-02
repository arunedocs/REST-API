const express = require("express");
const app = express();
require("./db/conn");
const PORT = process.env.PORT || 8000;
const studentRouter = require("./routers/students");

app.use(express.json());
app.use(studentRouter);

app.listen(PORT, () => {
  console.log(`Connected Sucessfully ...`);
});
