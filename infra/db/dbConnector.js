
let mysql = require("mysql2");
let DB = mysql.createConnection({
    host: "127.0.0.1",
    user: "admin@localhost",
    password: "asdfqwer",
    database: "taskpulse",
})
DB.connect((err) => {
    if (err) throw err;
    console.log("Connected!")
})

