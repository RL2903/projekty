const express = require("express")
const cors = require("cors")
const mysql = require("mysql") //kod do dodania admina na php my admin localhost: INSERT INTO uzytkownicy (login, password, uprawnienia) VALUES ('admin', MD5('admin'), 'admin');
const md5 = require("md5")
const port = 3000

const app = express()
app.use(cors())

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
})

con.connect((error) => {
    if (error) {
        console.log("nie udalo sie polaczyc z baza")
    } else {
        console.log("udalo polaczyc sie z baza")
    }


})
app.get("/zalogowano/:login/:password", (req, res) => {
    const login = req.params.login
    const password = md5(req.params.password)
console.log(login)
    const sql = `SELECT * FROM uzytkownicy WHERE login = '${login}' AND password = '${password}'`

    con.query(sql, (err, result) => {
        if (err) {
            console.log(`nie udalo sie zapisac danych: ${err}`)
            res.json({
                status: "error",
                err_info: err
            })
        } else {
            console.log(`zapisano dane do bazy danych:${result}`)
            if(result.length == 0){
                res.json({status: " not_ok"})
            } else{
                res.json({status: "ok",
                    login: result[0].login,
                    uprawnienia: result[0].uprawnienia})
            }
        }
    })

})

app.listen(port, () => {
    console.log("serwer dziala")
})



