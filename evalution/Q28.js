function getBalance() {
    return new Promise((resolve) => {
        resolve("Bank Balance: ₹25,000");
    });
}

async function showBalance() {
    let balance = await getBalance();
    console.log(balance);
}

showBalance();