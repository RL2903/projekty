 async function dodajUser(){
           const login = document.getElementById("login").value;
           const password = document.getElementById("password").value;
           const rola = document.getElementById("rola").value;
           const res = await fetch(`http://localhost:3000/dodaj_uzytkownika/${login}/${password}/${rola}`);
           const json = await res.json();
           document.getElementById("statusUser").innerText = json.status=="ok" ? "Dodano użytkownika" : "Błąd!";
       }
       async function dodajSale(){
           const nazwa = document.getElementById("nazwa").value;
           const typ = document.getElementById("typ").value;
           const res = await fetch(`http://localhost:3000/dodaj_sale/${nazwa}/${typ}`);
           const json = await res.json();
           document.getElementById("statusSale").innerText = json.status=="ok" ? "Dodano salę" : "Błąd!";
       }