const fees = [5000, 6000, 7000, 8000]

function calculateTotalFees(...fees){
    let total = 0
    for (let fee of fees){
        total += fee
    }
    return total
}

console.log(calculateTotalFees(fees))