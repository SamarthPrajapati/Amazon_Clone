const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://Samarth:Test123@cluster0.wmna2rr.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);

// Connection
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connection successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connecting to ${PORT}`);
});
