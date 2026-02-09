async function dodajUser(){
    // Pobieram wartości z inputów
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const rola = document.getElementById("rola").value;

    // Fetch z backtickami (template string)
    const res = await fetch(`http://localhost:3000/dodaj_uzytkownika/${login}/${password}/${rola}`);

    // Odczyt JSON z odpowiedzi
    const json = await res.json();

    // Pokazuję komunikat statusu
    document.getElementById("statusUser").innerText = json.status == "ok" ? "Dodano użytkownika" : "Błąd!";

    // Jak OK to resetuję pola
    if(json.status == "ok"){
        document.getElementById("login").value = "";
        document.getElementById("password").value = "";
        document.getElementById("rola").value = "Administrator"; // reset wyboru roli do domyslnej
    }
}

async function dodajSale(){
    // Pobieram wartości z inputów
    const nazwa = document.getElementById("nazwa").value;
    const typ = document.getElementById("typ").value;

    // Fetch z backtickami
    const res = await fetch(`http://localhost:3000/dodaj_sale/${nazwa}/${typ}`);

    const json = await res.json();

    // Tu poprawne id do p na status (w HTML masz id="StatusSale" wielka litera, a w JS powinno byc male 'statusSale')
    document.getElementById("statusSale").innerText = json.status == "ok" ? "Dodano salę" : "Błąd!";

    // Resetowanie pól po sukcesie
    if(json.status == "ok"){
        document.getElementById("nazwa").value = "";
        document.getElementById("typ").value = "";
    }
}
