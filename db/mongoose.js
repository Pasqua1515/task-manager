const mongoose = require("mongoose");
const dotenv = require("dotenv")


dotenv.config({
    path: "./config.env",
  });

const DB = process.env.DB;


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((con) => {
    console.log("Database connection successful!");
  })
  .catch((err) => console.log(err.message));