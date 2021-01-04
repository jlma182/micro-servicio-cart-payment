const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const cartController = require("./controller/cart-controller.js");

const app = express();
const port = 3010;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/cart", cartController.addProduct);

app.get("/cart", cartController.getAllProducts);

app.delete("/cart/:id", cartController.deleteProduct);

app.put("/cart/:id", cartController.updateProduct);

app.get("/pay/:total", cartController.checkPayment);

app.listen(port, () =>
   console.log(`Cart Service is listening on port ${port}!`)
);
