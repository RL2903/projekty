const st = JSON.parse(localStorage.getItem("logowanie"));

async function ladujSale() {
    const res = await fetch("http://localhost:3000/sale");
    const sale = await res.json();
    const select = document.getElementById("sala");
    sale.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s.id;
        opt.innerText = s.nazwa;
        select.appendChild(opt);
    });
}

async function rezerwuj() {
    const sala_id = document.getElementById("sala").value;
    const data = document.getElementById("data").value;

    const res = await fetch(`http://localhost:3000/rezerwuj/${st.id}/${sala_id}/${data}`);
    const json = await res.json();

    document.getElementById("statusRez").innerText = json.status == "ok" ? "Zarezerwowano" : "Błąd";

    if(json.status == "ok"){
        // reset pola data po udanej rezerwacji
        document.getElementById("data").value = "";
    }
}

ladujSale();
