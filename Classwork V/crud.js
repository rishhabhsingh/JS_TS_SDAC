const db = require('./db')
db.connect()

function insertData(name, email) {
    const user = { name, email }
    db.query('INSERT INTO users set ?', user, (err, results) => {
        if (err) {
            console.error('Error executing query:', err)
            return
        }
        else {
            console.log('Data inserted successfully:', results)
        }
    }); 
}

insertData('John Doe', 'john.doe@example.com')