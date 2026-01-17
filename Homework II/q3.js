const fetchProductDetails = new Promise((resolve, reject) => {
    const success = true

    if (success) {
      resolve({
        name: "Mobile Phone",
        price: 25000,
        availability: "In Stock"
      })
    } else {
      reject("Failed to fetch product details")
    }
});

fetchProductDetails
  .then(data => console.log(data))
  .catch(error => console.log(error))