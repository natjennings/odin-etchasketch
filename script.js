let generateBtn = document.querySelector("button")
let userInput = document.querySelector("input")
let grid = document.querySelector(".container")

const heightWidth = 1000

generateBtn.addEventListener("click", () => {
    //alert(userInput.value)
    let intUserInput = Number(userInput.value)
    console.log(intUserInput)
    if (intUserInput > 0 && intUserInput <= 100) {
        generateGrid(userInput.value);
    }
    else {
        alert("Please enter a number between 1 and 100")
    }
});



function generateGrid(userInput) {
    console.log("user input is " + userInput)
    let gridItem = document.createElement("div")
    gridItem.classList.add("default")
    let gridItemHW = heightWidth / Number(userInput)
    for (i = 0; i < userInput; i++) {
        for (j = 0; j < userInput; j++) {
            grid.appendChild(gridItem)
        }
    }
}