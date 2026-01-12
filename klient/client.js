async function dodajuser(){
const login = document.getElementById("login").value 
const password = document.getElementById("password").value 
console.log(login)
console.log(password)
const response = await fetch(`http://localhost:3000/dodaj/${login}/${password}`)
const json = await response.json()

if(json.status == "error"){
    document.querySelector("#status").innerHTML = "nie dodano"
}else{
        document.querySelector("#status").innerHTML = "dodano"
}

}


async function Zaloguj(){
const login = document.getElementById("login").value 
const password = document.getElementById("password").value 
console.log(login)
console.log(password)
const response = await fetch(`http://localhost:3000/zalogowano/${login}/${password}`)
const json = await response.json()

if(json.status === "ok"){
    document.querySelector("#status").innerHTML = "zalogowano"
    localStorage.setItem("logowanie", "ok")
    window.location.reload()
}else{
        document.querySelector("#status").innerHTML = "nie zalogowano"
}
}