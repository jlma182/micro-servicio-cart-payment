const cartStorage = require("../storage/cart-storage.js");

const axios = require("axios");

function getAllProducts(req, res) {
    cartStorage.getAll().then((products) => {
        console.log(products);
        res.json(products);
    });
}

function addProduct(req, res) {
    const product = req.body;

    cartStorage.save(product.id, product.count);

    res.send({
        alert: "success",
        otro: "otros extras",
    });
}

function updateProduct(req, res) {
    const newProduct = req.body;

    cartStorage.save(newProduct.id, newProduct.count);

    res.send({
        alert: "success",
        otro: "otros extras",
    });
}

function deleteProduct(req, res) {
    const id = req.params.id;

    cartStorage.remove(id);

    res.send({
        alert: "success",
        otro: "otros extras",
    });
}

async function checkPayment(req, res) {
    const total = 300;

    const resp = await axios.get(`http://localhost:3001/payment/${total}`);

    let isApproved = resp.data;

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
