let homeEl = document.getElementById("home-score")
let guessEl = document.getElementById("guess-score")
let homeFirstel = document.getElementById("homeFirst")
let homeSecondel = document.getElementById("homeSecond")
let homeThirdel = document.getElementById("homeThird")
let homeFourthel = document.getElementById("homeFourth")
let guessFirstel = document.getElementById("guessFirst")

let Homepoints = 0
let Guesspoints = 0

function HomeaddOne() {
    Homepoints = Homepoints + 1
    homeEl.innerText = Homepoints
}

function HomeaddTwo() {
    Homepoints = Homepoints + 2
    homeEl.innerText = Homepoints
}

function HomeaddThree() {
    Homepoints = Homepoints + 3
    homeEl.innerText = Homepoints
}

function GuessaddOne() {
    Guesspoints = Guesspoints + 1
    guessEl.innerText = Guesspoints
}
function GuessaddTwo() {
    Guesspoints = Guesspoints + 2
    guessEl.innerText = Guesspoints
}
function GuessaddThree() {
    Guesspoints = Guesspoints + 3
    guessEl.innerText = Guesspoints
}

function homeSave() {
    homeFirstel.textContent = homeEl.textContent
}

function guessSave() {
    guessFirstel.textContent = guessEl.textContent
}

function resetGame() {
    homeEl.textContent = 0
    Homepoints = 0

    guessEl.textContent = 0
    Guesspoints = 0
}