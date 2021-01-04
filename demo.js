const axios = require("axios");

const cakePromise = async () => {
   const r = await axios.get("http://localhost:3014/bakery/cakes/");
   return r.data;
};

cakePromise().then((cakes) => {
   let total = 0;
   const cartPromise = async () => {
      const r = await axios.get("http://localhost:3010/cart");
      return r.data;
   };

   cartPromise().then((cart) => {
      console.log("cake Data: ", cakes);
      console.log("--------------------CARRO-----------------");

      console.log("cart Data: ", cart);

      if (cart == null) cart = {};

      cakes.map((element) => {
         if (element.id in cart) {
            element.count = cart[element.id];

            total += element.price * element.count;
            console.log(element);
         }
      });

      console.log("total: " + total);
      const payPromise = async () => {
         const r = await axios.get(`http://localhost:3010/pay/${total}`);
         return r.data;
      };
      payPromise().then((resp) => {
         console.log("payPromise", resp);
      });
   });
});
