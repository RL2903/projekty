// to jest funkcja do logowania użytkownika
async function zaloguj() {
   // to cos pobiera wartosc z pola input o id = login
   const login = document.getElementById("login").value;
   // to pobiera wartosc z pola input o id = password
   const password = document.getElementById("password").value;
   // poprawiłem fetch, dodałem cudzysłowy i template string
   const res = await fetch(`http://localhost:3000/zaloguj/${login}/${password}`);
   // to odczytuje odpowiedz z serwera jako json
   const json = await res.json();
   console.log(json);
   // to cos sprawdza status odpowiedzi
   if(json.status == "ok") {
       // stringify() to funkcja ktora zamienia obiekt lub tablice w tekst w json formacie
       localStorage.setItem("logowanie", JSON.stringify(json));
       // to to jest przekierowanie uzytkownika na glowna strone
       window.location.href = "index.html";
   } else {
       // to sie wyswietla kiedy login lub haslo jest niepoprwane
       document.getElementById("status").innerHTML = "Błedny login/haslo";
   }
}
