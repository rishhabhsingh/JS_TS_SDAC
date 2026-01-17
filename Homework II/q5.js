//default parameter
const cart = (discount=2, ...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0) - discount;
}
console.log(cart(12, 13))

//rest parameter
const cart1 = (...numbers) => {
    return numbers
}
console.log(cart1(1, 2, 3, 4, 5))