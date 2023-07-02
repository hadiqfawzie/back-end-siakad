const mysql = require("mysql2");

// Create a connection to the database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'espe'
// });

const connection = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_hadiq',
    port : 3306,
    password: '&UrhBpb5Dyu6xjV',
    database: 'freedb_stikom-siakad'
});

// const connection = mysql.createConnection({
//     host: 'sql12.freemysqlhosting.net',
//     user: 'sql12628783',
//     port : 3306,
//     password: '&5W3geBhSiY',
//     database: 'sql12628783'
// });

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database. " + connection.database) ;
});

// const checkConnections =() => {
//     // if (!connection || connection.state === 'disconnected') {
//         connection.connect(error => {
//             if (error) throw error;
//             console.log("Successfully connected to the database.") ;
//         });
//     // }
//     return connection;
// }

module.exports = connection;