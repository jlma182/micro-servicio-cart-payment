// const cartController = require("./cart/controller/cart-controller.js");

// const axios = require("axios");

// let obj = { name: "John", age: 30, city: "New York" };

// let myJSON = JSON.stringify(obj);

// console.log(obj);
// console.log(myJSON);

// let arr = [];
// Object.entries(obj).forEach((entry) => {
//     const [key, value] = entry;
//     console.log(key, value);

//     arr.push({ id: key, count: value });
// });

// console.log(arr);

// // async function cart() {
// //     const resp = await axios.get(`http://localhost:3000/cart`);

// //     let arr = Object.entries(resp.data);
// //     let total = 0;
// //     console.log(arr);

// //     arr.forEach((item, index) => {
// //         total += Number(item[1]) * Number(item[0]);
// //     });

// //     console.log(arr.length);
// //     console.log(total);
// // }

// // cart();
// {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// {
//     "1": "29",
//     "2": "6",
//     "25": "2",
//     "366": "4",
//     "2275": "2",
//     "3965": "4",
//     "25555": "10",
//     "39696": "4",
//     "56002": "1"
// }

const axios = require("axios");

axios.post("http://localhost:3010/cart", { id: "5", count: "444" });
