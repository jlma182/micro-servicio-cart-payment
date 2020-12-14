const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3011;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let wallet = 1000;

app.get("/payment/:total", (req, res) => {
    const total = req.params.total;
    console.log(total);
    if (total <= wallet) {
        wallet -= total;
        res.json(true);
    } else res.json(false);
});

app.post("/payment/:addMoney", (req, res) => {
    const addMoney = req.params.addMoney;
    console.log(total);
    wallet += addMoney;
});

app.listen(port, () => console.log(`Payment app listening on port ${port}!`));
