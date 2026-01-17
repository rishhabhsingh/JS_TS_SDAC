class InvalidCouponCode extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidCouponCode";
    }
}

function checkCode(code) {
    if (code == "QWERTY") {
        throw new InvalidCouponCode("Coupon code is Invalid");
    }
    console.log("Coupon code is valid");
}

try {
    checkCode("AQW123");
} catch (error) {
    console.log(error.name + ": " + error.message);
}
