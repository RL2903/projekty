// to pobiera dane zalogowanego uzytkownika z localStorage
const st = JSON.parse(localStorage.getItem("logowanie"));

const pages = [
   {href: "index.html", title: "Strona główna"},
   {href: "administrator.html", title: "Administrator", role:"Administrator"},
   {href: "nauczyciel.html", title: "Nauczyciel", role:"Nauczyciel"},
   {href: "uczen.html", title: "Uczeń", role:"Uczen"},
   {href: "sale.html", title: "Sale"}
];

// to jest funkcja ktora generuje menu
function generujMenu(){

   if(st?.login){
       const p = document.createElement("p");
       p.innerText = `Witaj ${st.login} (${st.rola})`;
       document.body.insertBefore(p, document.body.children[1]);
   }

   const ul = document.createElement("ul");

   for(let i=0; i<pages.length; i++){
       if(pages[i].role && st?.rola !== pages[i].role) continue;

       const li = document.createElement("li");
       const a = document.createElement("a");
       a.href = pages[i].href;
       a.innerText = pages[i].title;
       li.appendChild(a);
       ul.appendChild(li);
   }

   document.body.append(ul);

   // to cos to przycisk wyloguj gdy jestem zalogowany
   if(st?.status == "ok"){
       const button = document.createElement("button");
       button.innerText = "Wyloguj";
       button.addEventListener("click", ()=>{
           localStorage.removeItem("logowanie");
           window.location.href = "logowanie.html";
       });
       document.body.append(button);
   }
}

generujMenu();
