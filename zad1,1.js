async function getData(){
    const response = await fetch("http://localhost:3001/kolory")
    const json = await response.json()
    document.innerHTML = json.wynik
    console.log(json)
}