const sales = [1000, 2000, 3000, 4000, 5000];

const totalSales = sales.reduce((total, sale) => {
    return total + sale
},0)

console.log(totalSales)