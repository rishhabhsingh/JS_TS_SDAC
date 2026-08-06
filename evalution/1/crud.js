const db = require('./db.js');
db.connectToDatabase();

function insertData(id, name, details) {
    const user = { id, name, details };

    db.db.query('INSERT INTO coursedetails SET ?', user, (err) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        } else {
            console.log('Data inserted successfully');
        }
    });
}

function updateData(id, name, details) {
    db.db.query(
        'UPDATE coursedetails SET name = ?, details = ? WHERE id = ?',
        [name, details, id],
        (err) => {
            if (err) {
                console.error('Error executing query:', err);
                return;
            } else {
                console.log('Data updated successfully');
            }
        }
    );
}

function showData() {
    db.db.query('SELECT * FROM coursedetails', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        } else {
            console.log(results);
        }
    });
}

function deleteData(id) {
    db.db.query('DELETE FROM coursedetails WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        } else {
            console.log('Data deleted successfully');
        }
    });
}

insertData(1, 'CS', 'details');
insertData(2, 'DS', 'details');
updateData(1, 'CS2', 'details');
showData();
deleteData(1);

//output
// D:\RISHABH JS-TS\1>node crud.js
//Connected to the database.
//Data inserted successfully
//Data inserted successfully
//Data updated successfully
//[
  //RowDataPacket { id: 1, name: 'CS2', details: 'details' },
  //RowDataPacket { id: 2, name: 'DS', details: 'details' }
//]
//Data deleted successfully