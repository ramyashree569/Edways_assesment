const con = require("../dbConfig")
const express = require('express')

const getProducts = async (req,res) =>{
    await con.query("SELECT * FROM product", function (err, result) {
        if (err) throw err;
        console.log(result)
        res.status(200).send({products:result})
    });
}


const addProduct = async(req,res) =>{
    let data = req.body
    let Name = data.Name
    let	ID	= data.ID
    let WQty = data.WQty
    let SRate = data.SRate
    let Category = data.Category

    await con.query(`INSERT INTO product (Name,ID,WQty,SRate,Category) values ('${Name}','${ID}',${WQty},${SRate},'${Category}')`, function (err, result) {
        if (err) {
            res.status(403).send(err)
            return
        };
        res.status(201).send({message:"Product added"})
    });
}

module.exports = {
    getProducts : getProducts,
    addProduct : addProduct
}

