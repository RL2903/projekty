function check_login(){
    const status = JSON.parse(localStorage.getItem("logowanie"))
    console.log(status)
    const location = window.location.hef

    if(status?.status != "ok"){
        window.location.href = "logowanie.html"
    } else {
    const button = document.createElement("button")
    button.innerHTML = "wyloguj"
    document.querySelector("body").appendChild(button)
    }
    if(status?.status != "ok" || (location.includes("pracownik.html") && status?.uprawnienia != "pracownik") ) {
        window.location.href = "logowanie.html"
    }
}




check_login()