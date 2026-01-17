class Product{
    constructor(name, id, price){
        this.name = name
        this.productid = id
        this.price = price
    }

    displayInfo(){
        console.log("This is Name:" + " " + this.name)
        console.log("This is ProductId:" + " " + this.productid)
        console.log("This is Price:" + " " + this.price)
    }
}

let product = new Product("Realme8", 18, 20000)
product.displayInfo()