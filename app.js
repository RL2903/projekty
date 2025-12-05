async function wysli() {

    const imie = document.querySelector("#inp1").value
    const nazwisko = document.querySelector("#inp2").value
    const wiek = document.querySelector("#inp3").value
    

    const response = await fetch(`http://localhost:3001/dodaj/${imie}/${nazwisko}/${wiek}`)
    const json = response.json()
}