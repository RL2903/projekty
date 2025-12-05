const mysql = require('mysql')
const express = require("express")
const app = express()
const port = 3000

const baza = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    databse: 'auta'
})

baza.connect((err) => {
    if(err) {
        console.error('błąd połączenia:', err.message);
        return;
    }
    console.log('Połączono')
})