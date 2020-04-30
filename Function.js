function add(a, b) {
    return a + b;
}

const sum = function (a, b) {
    return a + b;
}

console.log(add(5, 5));
console.log(sum(10, 10));

//ES6

const mult = (a, b) => {
    return a * b;
}
//implicit return
const mult2 = (a, b) => a * b;

console.log(mult(4, 5));
