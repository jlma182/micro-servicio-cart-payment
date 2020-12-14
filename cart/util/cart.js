// obj to array
function objectToArray(obj) {
    //code here
    let arr = [];
    Object.entries(obj).forEach((entry) => {
        const [key, value] = entry;
        const { name, price, count } = stringToObj(value);
        arr.push({ id: key, name, price, count });
    });

    return arr;
}
// obj to string
function objectToString() {
    //code here
}

function stringToObj(msg) {
    const arr = msg.split("&");

    return { name: arr[0], price: arr[1], count: arr[2] };
}

module.exports = { objectToArray, objectToString };

// value = "id-name-cost-count"
