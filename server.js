const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use("/", (res, req) => {
  res.send("Server is runnig");
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
