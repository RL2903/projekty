const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const md5 = require("md5")
const app = express()
const port = 3000
app.use(cors())


let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
})

con.connect((error) => {
    if (error) {
        console.log("Baza nie działa")
    } else {
        console.log("Baza działa")
    }
})


app.get('/dodaj/:login/:password', (req, res) => {

    const login = req.params.login
    const password = md5(req.params.password)
    const sql1 = `insert into users (login, password, uprawnienia) values ("${login}", "${password}", "użytkownicy")`
    con.query(sql1, (err, result) => {
        if (err) {
            console.log("Nie dodano")
            res.json(
                {
                    status: "Error"
                }
            )
        } else {
            res.json(
                {
                    status: "Dodano"
                })
            console.log(`dane zapisane: ${result}`)
        }
    })






})
app.get('/zaloguj/:login/:password', (req, res) => {

    const login = req.params.login
    const password = md5(req.params.password)

    const sql = `select * from users where login='${login}' and password='${password}'`

    con.query(sql, (err, result) => {
        if (err) {
            console.log("nie udało się zalogować")
            res.json(
                {
                    status: `ERROR`
                }
            )
        } else {
            if (result.length == 0) {
                res.json(
                    {
                        status: "ERROR"
                    }
                )
            } else {
                res.json(
                    {
                        status: "ok", login: `${result[0].login}`, uprawninia: `${result[0].uprawnienia}`
                    })
            }
            console.log(`Zalogowano`)
        }
    })
})


app.listen(port, () => {
    console.log("serwer działa")
})