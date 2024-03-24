const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello node api yo");
});

const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://veliaprecious:7WLBSMNvbnXwXC5m@crud-cluster.prwqzva.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-CLUSTER"
  )
  .then(() => {
    console.log("connected to mongodb");
    app.listen(PORT, () =>
      console.log(`node api is listening on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });

// if (connection)
//   console.log("Pinged your deployment. You successfully connected to MongoDB!");
