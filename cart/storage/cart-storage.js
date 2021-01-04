const redis = require("redis");
const client = redis.createClient();

const cartCollection = "cart";

function getAll() {
   const promise = new Promise((resolve, reject) => {
      client.hgetall(cartCollection, (err, value) => {
         // objectToArray
         if (value === null || value === undefined) value = {};
         resolve(value);
      });
   });
   return promise;
}

function save(id, cant) {
   client.hset(cartCollection, id, cant);
}

function remove(id) {
   client.hdel(cartCollection, id);
}

function removeAll() {
   client.del(cartCollection);
}

module.exports = { getAll, save, remove, removeAll };
