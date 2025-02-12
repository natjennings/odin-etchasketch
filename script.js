let generateBtn = document.querySelector("button")
let userInput = document.querySelector("input")
let grid = document.querySelector(".container")
let iterations
let colorArray = []
// let red = 255
// let green = 0
// let blue = 0

const heightWidth = 1000

generateBtn.addEventListener("click", () => {
    //alert(userInput.value)
    let intUserInput = Number(userInput.value)
    //console.log(intUserInput)
    if (intUserInput > 0 && intUserInput <= 100) {
        generateGrid(userInput.value);
    }
    else {
        alert("Please enter a number between 1 and 100")
    }
});





function generateGrid(userInput) {
    iterations = 0
    colorArray = []
    generateRainbowArray(userInput)
    grid.replaceChildren()

    //console.log("user input is " + userInput)
    
    for (i = 0; i < userInput; i++) {
        for (j = 0; j < userInput; j++) {
            let gridItem = document.createElement("div")
            gridItem.classList.add("default")
            gridItem.classList.add("square")
            
            let gridItemHW = heightWidth / Number(userInput)
            //console.log(gridItemHW)
            gridItem.style.height = (gridItemHW + "px")
            gridItem.style.width = (gridItemHW + "px")
            grid.appendChild(gridItem)
        }
    }
    let squares = document.querySelectorAll(".default")
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add("hovered")
            setRainbowColor(square)
            if (iterations < colorArray.length - 1) {
                iterations++
            }
            else {
                iterations = 0
            }
            
            square.classList.remove("default")
        })
    })
    }

function setRainbowColor(square) {
    //console.log(colorArray)
    const [r, g, b] = colorArray[iterations]
    let color = `rgb(${r}, ${g}, ${b})`
    square.style.backgroundColor = color
    //console.log(iterations + " is iterations, backgroundcolor should be " + color)
}

function generateRainbowArray(userInput) {
    let red = 255
    let green = 0
    let blue = 0
    let change = 255 / Number(userInput)
    let max = 255 - change
    let min = 0 + change
    let ind = 0
    let combo = ["","",""]
    //red -> yellow
    while (green >= 0 && green < max) {
        green = Math.round(green + change)
        combo = [red, green, blue]
        colorArray.push(combo)
        ind++
    }
    //yellow -> green
    while (red <= 255 && red > min) {
        red = Math.round(red - change)
        combo = [red, green, blue]
        colorArray.push(combo)
        ind++
    }
    //green -> cyan
    while (blue >= 0 && blue < max) {
        blue = Math.round(blue + change)
        combo = [red, green, blue]
        colorArray.push(combo)
        ind++
    }
    //cyan -> blue
    while (green <= 255 && green > min) {
        green = Math.round(green - change)
        combo = [red, green, blue]
        colorArray.push(combo)
        ind++
    }
    //blue -> pink
    while (red >= 0 && red < max) {
        red = Math.round(red + change)
        combo = [red, green, blue]
        colorArray.push(combo)
        ind++
    }
    //pink -> red
    while (blue <= 255 && blue > min) {
        blue = Math.round(blue - change)
        combo = [red, green, blue]
        colorArray.push(combo)
        ind++
    }
}