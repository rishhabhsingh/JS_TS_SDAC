"use strict";
class Batch {
    batchname;
    batchId;
    startdate;
    trainerName;
    constructor(name, batchId, startdate, trainerName) {
        this.batchname = name;
        this.batchId = batchId;
        this.startdate = startdate;
        this.trainerName = trainerName;
    }
}
let b1 = new Batch("Batch 1", 101, 2023, "John Doe");
console.log(b1);
