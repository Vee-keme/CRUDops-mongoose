const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/productModels.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello node api yo");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
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
