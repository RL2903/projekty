

const pages = [
    { href: "logowanie.html", title: "logowanie" },
    { href: "pracownik.html", title: "pracownik" },
    { href: "user.html", title: "user" }
]

const st = JSON.parse(localStorage.getItem("logowanie"))


function menu() {
    const body = document.querySelector("body")
    const div = document.createElement("div")
    div.setAttribute("id", "menu")
    const ul = document.createElement("ul")
    for (let i = 0; i <= pages.length - 1; i++) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.setAttribute("href", pages[i].href)
        a.innerHTML = pages[i].title
        li.appendChild(a)
        ul.appendChild(li)
    }
    body.appendChild(div)
    div.appendChild(ul)




    if (st?.status == "ok") {
        const button = document.createElement("button")
        button.innerHTML = "Wyloguj"
        button.style.position = "absolute"
        button.style.top = "20px"
        button.style.right = "20px"
        button.style.padding="10px"
        document.querySelector("body").appendChild(button)
        button.addEventListener("click", () => {
            localStorage.removeItem("logowanie");
            location.reload()
        })
    }



}




menu()