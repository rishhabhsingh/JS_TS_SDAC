function checkInventory(inventory) {
    if (inventory.length < 5) {
        throw new Error("Inventory is less than minimum threshold.")
    }
    console.log("Inventory check passed.")
}
try {
    checkInventory(["item1", "item2", "item3"])
} catch (error) {
    console.error("Error caught: " + error.message)
}
