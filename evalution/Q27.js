function checkLoan(amount) {
    return new Promise((resolve, reject) => {
        if (amount <= 50000) {
            resolve("Loan Approved");
        } else {
            reject("Loan Rejected");
        }
    });
}

checkLoan(30000)
    .then(result => console.log(result))
    .catch(error => console.log(error));