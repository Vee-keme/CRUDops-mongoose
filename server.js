const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/productModels.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello node api yo");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product)
      res.status(404).json({ message: `Cannot find product with id ${id}` });
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product)
      res.status(404).json({ message: `Cannot find product with id ${id}` });

    //success
    res.status(200).json(product);
  } catch (error) {
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
