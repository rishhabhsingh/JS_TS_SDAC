function getOrderHistory() {
  return new Promise(resolve => {
      resolve(["Order 101", "Order 102", "Order 103"]);
  });
}

async function displayOrderHistory() {
  const orders = await getOrderHistory();
  console.log("Customer Order History:", orders);
}

displayOrderHistory();