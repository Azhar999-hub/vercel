const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

const arr = [
  {
    id: 1,
    course: "Mern",
  },
  {
    id: 2,
    course: "Mean",
  },
  {
    id: 3,
    course: "Dot Net",
  },
];

app.get("/", (req, res) => {
  res.send(arr);
});

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(
      process.env.PORT,
      console.log(
        `Server is Running on ${process.env.PORT} and also Database Connected Successfully`
      )
    );
  })
  .catch((error) => {
    console.log(`Database Connection Failed!" ${error}`);
  });
