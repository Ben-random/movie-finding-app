const fetch = require("isomorphic-fetch")
const key = "12517e9852ae2916fbb7e9018fd85977"
const url = "https://api.themoviedb.org/3/"

class Movie{
    constructor(id, title, releaseDate) {
        this.id = id
        this.title = title
        this.relaeseDate = releaseDate
        this.rating = 0
        this.genres = []
    }
}

function formatQuery(query) {
    let arr = query.split(" ")
    let res = arr[0]
    for (let i = 1; i < arr.length; i++) {
        res =  res + "%20" + arr[i]
    }
    return res
}

async function getMovieData(nameToQuery) {
    let newURL = url + "search/movie?api_key=" + key + "&language=en-US&query=" + formatQuery(nameToQuery) + "&page=1/"
    const data = await fetch(newURL)
    const json = await data.json()
    console.log(json)
}

getMovieData("the walking dead")
