const cartStorage = require("../storage/cart-storage.js");

//servicio a consumir
const axios = require("axios");

function getAllProducts(req, res) {
   cartStorage.getAll().then(async (cart) => {
      // variable que recibe la funcion
      console.log("cart: ");
      console.log(cart);
      if (cart === {}) {
         res.json([]);
         return;
      }

      console.log("Productos en carrito");
      let products = [];

      let { data } = await axios.get("http://localhost:3014/bakery/cakes/");

      let cakes = data.filter((p) => {
         if (p.id in cart) {
            p.count = cart[p.id];
            return p;
         }
      });

      products = products.concat(cakes);

      console.log(products);
      res.json(products);
   });
}

function addProduct(req, res) {
   const product = req.body;

   cartStorage.save(product.id, product.count);

   res.send({
      alert: "successSave",
   });
}

function updateProduct(req, res) {
   const newProduct = req.body;

   cartStorage.save(newProduct.id, newProduct.count);

   res.send({
      alert: "successupdate",
   });
}

function deleteProduct(req, res) {
   const id = req.params.id;

   cartStorage.remove(id);

   res.send({
      alert: "successDel",
   });
}

async function checkPayment(req, res) {
   const total = req.params.total;

   const resp = await axios.get(`http://localhost:3001/payment/${total}`);

   let isApproved = resp.data;

   if (isApproved == true) {
      console.log("delete---xx");
      cartStorage.removeAll();
   }

   console.log(isApproved);
   res.send(isApproved);
}

module.exports = {
   getAllProducts,
   addProduct,
   updateProduct,
   deleteProduct,
   checkPayment,
};
