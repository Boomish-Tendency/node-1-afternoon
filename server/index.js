const express = require("express");
let products = require("../products.json");
const getProducts = require("./getProducts");
const getProduct = require('./getProduct');
const app = express();
app.use(express.json())
const port = 3001;

app.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);