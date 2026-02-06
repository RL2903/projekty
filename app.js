const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const md5 = require("md5")
const app = express()
const port = 3000

app.use(cors())

//to jest polaczenie z baza
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "system_rezerwacji"
})

con.connect((err => {
    if(err) console.log ("Błąd połączenia z bazą")
    else console.log ("Połączono z bazą")
}))

//dzieki temu mozesz sie zalogowac
app.get("/zaloguj/:login/:password", (req, res) => {
    const login = req.params.login
    const password = md5(req.params.password)
    
    const sql = `Select * FROM uzytkownicy WHERE login = '${login}'AND password ='${password}'`
    con.query(sql, (err, result)=> {
       if(err) {
   res.json({status:"error"});
} else if(result.length == 0) {
   res.json({status:"not_ok"});
} else {
   res.json({
       status:"ok",
       login: result[0].login,
       rola: result[0].rola,
       id: result[0].id
   });
}
    })
})

//dzieki temu dodaje uzhytkownika do bazy danych
app.get("/dodaj_uzytkownika/:login/:password/:rola", (req, res)=> {
    const {login, password, rola} = req.params
    const sql = `INSERT INTO uzytkownicy (login, password, rola) VALUES ('${login}', '${md5(password)}', '${rola}')`
    con.query(sql, (err, result)=> {
        if(err) res.json ({status:"error"})
        else res.json({status:"ok"})
    })
})

//dzieki temu dodaje sie sala do bazy
app.get("/dodaj_sale/:nazwa/:typ", (req, res)=> {
    const{nazwa, typ} = req.params
    const sql = `INSERT INTO sale (nazwa, typ) VALUES ('${nazwa}','${typ}')`
    con.query(sql,(err,result)=> {
        if(err) res.json ({status:"error"})
        else res.json({status:"ok"})
    })
})

//dzieki temu pobiera sale z bazy i wyswietla na strronie
app.get("/sale", (req,res)=> {
    const sql = `SELECT * FROM sale`
    con.query(sql,(err,result)=>{
        if(err) res.json([])
        else res.json(result)
    })
})

//dodakje rezerwacje ddo bazy dancygh
app.get("/rezerwuj/:uzytkownik_id/:sala_id/:data", (req, res)=> {
    const{uzytkownik_id, sala_id, data} = req.params
    const sql = `INSERT INTO rezerwacje (uzytkownik_id, sala_id, data_godzina) VALUES(${uzytkownik_id}, ${sala_id}, '${data}')`
    con.query(sql,(err,result)=> {
        if(err) res.json ({status:"error"})
        else res.json({status:"ok"})
    })
}) 

//pobierta rezerwacje z bazy danych na aplikacje
app.get("/rezerwacje", (req, res)=> {
    const sql = `SELECT rezerwacje.id, rezerwacje.data_godzina,uzytkownicy.login, sale.nazwa FROM rezerwacje JOIN uzytkownicy ON rezerwacje.uzytkownik_id = uzytkownik.id JOIN sale ON rezerwacje.sala_id = sale.id`
    con.query(sql, (err, result) => {
        if(err) res.json([])
        else res.json(result)
    })
})

app.listen(port, ()=> {
    console.log("serwer dziala")
})