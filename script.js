//selecting popub box popub overlay button

var popuboverlay = document.querySelector(".popub-overlay")
var popubpox = document.querySelector(".popub-box")
var addpopubbutton = document.getElementById("add-popub-button")

addpopubbutton.addEventListener("click", function () {
    popuboverlay.style.display = "block"
    popubpox.style.display = "block"
})

//select cancel button

var cancelpopub = document.getElementById("cancel-popub")

cancelpopub.addEventListener("click", function (event) {
    event.preventDefault()
    popuboverlay.style.display = "none"
    popubpox.style.display = "none"
})

//select container,add-book,book-title-input,book-author-input,book-description-input

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = ` <h2>${booktitleinput.value}</h2> 
    <h5>${bookauthorinput.value}</h5> 
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    container.append(div)
})

function deletebook(event) {
    event.target.parentElement.remove()
}

