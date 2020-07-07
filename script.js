const exerciseInput = document.querySelector(".js-exercise")
const setsInput = document.querySelector(".js-sets")
const repsInput = document.querySelector(".js-reps")
const addBtn = document.querySelector(".js-addBtn")
const setsContainer = document.querySelector(".js-sets")

addBtn.addEventListener("click", () => {
    const exercise = exerciseInput.value
    const sets = setsInput.value 
    const reps = repsInput.value
    
    const logSetString = `${exercise} ${sets} * ${reps}`

    const logSetDiv = document.createElement("div")
    const logSetNode = document.createTextNode(logSetString)

    logSetDiv.appendChild(logSetNode)

    setsContainer.appendChild(logSetDiv)
})
