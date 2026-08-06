class Batch {
  batchname: string;
  batchId: number;
  startdate: number;
  trainerName: string;

  constructor(name: string, batchId: number, startdate: number, trainerName: string) {
    this.batchname = name;
    this.batchId = batchId;
    this.startdate = startdate;
    this.trainerName = trainerName;
  }
}

let b1 = new Batch("Batch 1", 101, 2023, "John Doe");
console.log(b1);