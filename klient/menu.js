
const pages = 
    [
        {href: "logowanie.html", title: "logowanie"},
        {href: "pracownik.html", title: "pracownik"},
        {href: "user.html", title: "user"}
    ]


function generujMenu(){
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
}

generujMenu()