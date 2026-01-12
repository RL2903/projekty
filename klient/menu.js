
const pages = 
    [
        {href: "logowanie.html", title: "logowanie"},
        {href: "pracownik.html", title: "pracownik"},
        {href: "user.html", title: "user"}
    ]

    


function generujMenu(){
    const st = JSON.parse(localStorage.getItem("logowanie"))
    console.log(st)

    const p = document.createElement("p")
    p.innerHTML = 'Witaj ${st?.login}'
    document.querySelector("body").appendChild(p)

    const ul = document.createElement("ul")
    
    for(let i = 0; i <= pages.length - 1; i++){
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.setAttribute("href", pages[i].href)
        a.innerHTML = pages[i].title

        li.appendChild(a)
        ul.appendChild(li)
    }

    document.querySelector("body").appendChild(ul)

        if(st?.status == "ok"){
    const button = document.createElement("button")
    button.innerHTML = "wyloguj"

    button.addEventListener("click", ()=>{
        localStorage.removeItem("logowanie")
        window.location.reload()
    })

    document.querySelector("body").appendChild.button
    }

}


generujMenu()