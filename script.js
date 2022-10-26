const validate = () => {
    let movieToQuery = document.getElementById("id").value
    console.log(movieToQuery)

}
validate()
let button = document.getElementById("button")
button.addEventListener("click", () => validate())
