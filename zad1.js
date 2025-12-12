const express = require('express')
const cors = require('cors') 
const mysql = require('mysql')
const app = express()
const port = 3001
app.use(cors())
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 
});
app.get("/wyswietl", (req, res)=>{
    const sql = "select kolory fron settings"
    con.query(sql, function(err,reasult){
        if(err){console.log("nie dziala")} 
        else{
            console.log("dziala")
            res.json({
                wynik:reasult
            })
        }
    })
})
app.listen(port,()=>{
    console.log("serwer działa")
})
