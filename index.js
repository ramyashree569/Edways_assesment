const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const routes = require('./src/routes')
const con = require('./src/dbConfig')


const app = express();
const Router = express.Router();
Router.use(bodyParser.urlencoded({ extended: false }));
Router.use(bodyParser.json());
Router.use(cors({
    origin: 'http://localhost:3000',
    methods: [
        'GET',
        'POST',
      ],
}));
Router.use('/api',routes)





app.use(Router);

  
con.connect(function(err) {
if (err) throw err;
con.query("CREATE DATABASE IF NOT EXISTS SWInventory", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    con.query("CREATE TABLE IF NOT EXISTS Product(productId int NOT NULL AUTO_INCREMENT,Name Text,ID Text,WQty Integer,SRate Integer,Category Text, PRIMARY KEY(productId))", function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});
app.listen(3001,()=>{
    console.log("server running at 3001")
})
});

