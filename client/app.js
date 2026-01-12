async function rejestracja() {
    const login = document.querySelector("#login").value
    const password = document.querySelector("#password").value

    const response = await fetch(`http://localhost:3000/dodaj/${login}/${password}`)
    const json = await response.json()
    if (json.status == "err") {
        document.querySelector("#status").innerHTML = "Dane nie zostały przesłane (ERROR)"
    } else {
        document.querySelector("#status").innerHTML = "Dane zostały przesłane"
    }
}


async function zaloguj() {
    const login = document.querySelector("#login1").value
    const password = document.querySelector("#password1").value


    const response = await fetch(`http://localhost:3000/zaloguj/${login}/${password}`)
    const json = await response.json()
    console.log(json)
    if (json.status == "ERROR") {
        document.querySelector("#status1").innerHTML = "Nie udało się zalogować"
        
    } else {
        document.querySelector("#status1").innerHTML = "Zalogowano"
        localStorage.setItem("logowanie", JSON.stringify(json))
        location.reload()
    }

    }

    function haslo() {
        if (document.querySelector("#password1").type === "password") {
            document.querySelector("#password1").setAttribute("type", "text")
            document.querySelector("#btn_pass").innerHTML="🔓"

        } else {
            document.querySelector("#password1").setAttribute("type", "password")
            document.querySelector("#btn_pass").innerHTML="🔒"
        }
    }

