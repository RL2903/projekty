// to cos to pobieranie sal ale tylko do podgladu
async function ladujSale() {
    const res = await fetch("http://localhost:3000/sale")
    const sale = await res.json()
    const ul = document.getElementById("listaSal")
    sale.forEach(s => {
        const li = document.createElement("li")
        li.innerText = s.nazwa
        ul.appendChild(li)
    })
}
ladujSale()
