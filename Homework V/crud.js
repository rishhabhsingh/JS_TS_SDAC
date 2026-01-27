const db = require('./db')
db.connectToDatabase()

function insertData(id, name) {
    const user = {id, name }
    db.db.query('INSERT INTO emp set ?', user, (err) => {
        if (err) {
            console.error('Error executing query:', err)
            return
        }
        else {
            console.log('Data inserted successfully')
        }
    }); 
}

function updateData(id, name) {
    const user = {id, name }
    db.db.query('UPDATE emp set name = ? where id = ?', user, (err) => {
        if (err) {
            console.error('Error executing query:', err)
            return
        }
        else {
            console.log('Data updated successfully')
        }
    }); 
}

function showData() {
    db.db.query('SELECT * FROM emp', (err) => {
        if (err) {
            console.error('Error executing query:', err)
            return
        }
        else {
            console.log('Data inserted successfully')
        }
    }); 
}

function deleteData(id) {
    db.db.query('DELETE FROM emp where id = ?', id, (err) => {
        if (err) {
            console.error('Error executing query:', err)
            return
        } 
        else {
            console.log('Data deleted successfully')
        }
    }); 
}

insertData(1, 'Amul Gehlot')
updateData(1, 'Amul G')
showData()
deleteData(1)