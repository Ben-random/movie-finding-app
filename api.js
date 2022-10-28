//const fetch = require("isomorphic-fetch")
const key = "12517e9852ae2916fbb7e9018fd85977"
const key2 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjUxN2U5ODUyYWUyOTE2ZmJiN2U5MDE4ZmQ4NTk3NyIsInN1YiI6IjYzNTkxODA3MTEwOGE4MDA3OWRlMGUwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VRoQUJVknPISqc2oluBVbh_ux4Cm9IeSlhqAvUhvFJY"
const url = "https://api.themoviedb.org/3/"
const imageURL = "https://image.tmdb.org/t/p/w1280"

class Movie{
    constructor(id, title, releaseDate, genreIds, poster) {
        this.id = id
        this.title = title
        this.releaseDate = releaseDate
        this.rating = 0
        this.genreIds = genreIds
        this.poster = poster
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
function getMovies(movieResults) {
    let movies = []
    for (let i = 0; i< movieResults.length; i++) {
        console.log(movieResults)
        let movie = new Movie(movieResults[i].id, movieResults[i].title, movieResults[i].release_date, movieResults[i].genre_ids, `${imageURL}${movieResults[i].poster_path}`)
        movies.push(movie)
    }
    return movies
}
async function getWatchProviders(id) {
    const newUrl = url + "movie/" + `${id}` + "/watch/providers?api_key=" + key
    const data = await fetch(newUrl)
    const results = await data.json()
    try {
        const providers = results.results.GB.flatrate
        const watchProviders = []
        for (let i = 0; i < providers.length; i++) {
            watchProviders.push(providers[i].provider_name)
        }
        return watchProviders
    } catch {
        return []
    }
}
async function getMovieData(nameToQuery) {
    let newURL = url + "search/movie?api_key=" + key + "&language=en-US&query=" + formatQuery(nameToQuery) + "&page=1/"
    const data = await fetch(newURL)
    const json = await data.json()
    results = json.results
    const movies = await getMovies(results)
    //const watchProviders = await getWatchProviders(movies[0].id)
    for (let i = 0; i < movies.length; i++) {
        movies[i].watchProviders =  await getWatchProviders(movies[i].id)
    }
    return movies
}

//getMovieData("The Avengers")

module.exports = {getMovieData}
