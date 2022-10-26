const fetch = require("Isomorphic-fetch")
const key = "12517e9852ae2916fbb7e9018fd85977"
const url = "https://api.themoviedb.org/3/"

function formatQuery(query) {
    let arr = query.split(" ")
    let res = arr[0]
    for (let i = 1; i < arr.length -1; i++) {
        res =  res + "%20" + arr[i]
    }
    return res
}

async function getMovieData(nameToQuery) {
    let newURL = url + "search/movie?api_key=" + key + "&language=en-US&query=" + formatQuery(nameToQuery)

}
