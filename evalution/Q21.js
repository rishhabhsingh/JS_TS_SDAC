const calculatecourseFee = (amount, gst, charges) => {
    return amount + gst + charges
}

console.log(calculatecourseFee(2000, 5, 600));



