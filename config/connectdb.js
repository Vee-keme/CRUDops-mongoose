const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose
      .connect(
        "mongodb+srv://veliaprecious:7WLBSMNvbnXwXC5m@crud-cluster.prwqzva.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-CLUSTER"
      )
      .then(() => {
        console.log("connected to mongodb");
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
