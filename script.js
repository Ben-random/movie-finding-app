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
    let node = document.getElementById("Results")
    node.innerHTML= ""
    for (let i = 0; i < searchResults.length; i++) {
        let div = document.createElement("div")
        div.id = "searchDiv"
        let img = document.createElement("img")
        img.id = "searchImg"
        img.src = searchResults[i].poster;
        let h = document.createElement(`h1`)
        h.id = "searchHeader"
        h.style.zIndex = 4
        h.innerText = `${searchResults[i].title} (${searchResults[i].releaseDate.slice(0, 4)})`
        // let div2 = document.createElement("div")
        console.log(searchResults[i].watchProviders.length)
        div.appendChild(img)

        let div2 = document.createElement("div")
        div2.id = "outerSearchResultTextDiv"

        div2.appendChild(h)
        let p = document.createElement(`h5`)
        p.innerText = 'Watch on:\n'
        p.id = "searchFlatrate"
        for (let x = 0; x < searchResults[i].watchProviders.length; x++) {
            p.innerHTML += `${searchResults[i].watchProviders[x]}, `
            div2.appendChild(p)
        }
        // div.appendChild(p)
        div.appendChild(div2)
        node.appendChild(div)
        // node.appendChild(div2)
    }
}
// async () => await validate()
let button = document.getElementById("button")
button.addEventListener("click", async () => await validate())
