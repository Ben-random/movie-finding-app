//const getMovieData = require("./api.js")

async function validate() {
    let movieToQuery = document.getElementById("id").value
    console.log(movieToQuery)
    let p = document.createElement("p")
    if (movieToQuery === "") {
        let text = document.createTextNode("No movie entered")
        p.appendChild(text)
        let element = document.getElementById("d1")
        element.appendChild(p)
    }
    const searchResults = await getMovieData(movieToQuery)
    console.log(searchResults)
}
async () => await validate()
let button = document.getElementById("button")
button.addEventListener("click", async () => await validate())
