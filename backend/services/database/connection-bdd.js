const mysql = require('mysql2');

exports.getDbConnection = () => {

    const db = mysql.createConnection({

        database: 'centralcare',

        host: "localhost",

        user: "central",

        password: "Bw7qfJiNa3",

        multipleStatements : true

    });

    db.connect((err) => {
      if (err) throw err;
      console.log("Connected to database");
    });

    return db;
}