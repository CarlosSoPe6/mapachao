const mongoose = require("mongoose");
const config = require("config");
// const db = process.env.MONGO_URI || config.get("MONGO_URI");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://mongodb:27017", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.nessage);
    process.exit(1);
  }
};

module.exports = connectDB;
