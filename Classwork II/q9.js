class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {
    if (age < 18) {
        ////q10.js
        throw new InvalidAgeError("Age must be 18 or above");
    }
    console.log("Age is valid");
}

try {
    checkAge(16);
} catch (error) {
    console.log(error.name + ": " + error.message);
}
