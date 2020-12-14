
const redis = require("redis");
const client = redis.createClient();

const cartCollection = "cart";

function getAll() {
    const promise = new Promise((resolve, reject) => {
        client.hgetall(cartCollection, (err, value) => {
            // objectToArray
            resolve(value);
        });
    });

    return promise;
}

function save(id, product) {
    client.hset(cartCollection, id, product);
}

function remove(id) {
    client.hdel(cartCollection, id);
}

// console.log(getAll());

module.exports = { getAll, save, remove };
