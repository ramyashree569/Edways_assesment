const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "SWInventory"
  });


module.exports = con;
