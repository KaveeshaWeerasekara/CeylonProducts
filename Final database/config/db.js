const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Mongodb connected...");
  } catch (error) {
    console.error(error.message);
    // exist process with failur
    process.exit(1);
  }
};

module.exports = connectDb;

