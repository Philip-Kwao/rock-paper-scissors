const buttons = document.querySelectorAll("button")
const resultEl = document.getElementById("result")
// const resultDescEl = document.getElementById("result__description")
const yourScoreEl = document.getElementById("you")
const compEl = document.getElementById("comp")

let playScore = 0
let computerScore = 0

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        // console.log("You clicked ", button.id)
        const result = playRound(button.id, computerPlay())
        resultEl.textContent = result
        // console.log(result)
    })
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"]

    const randomChoice = Math.floor(Math.random()*choices.length)
    // console.log(randomChoice)
    return choices[randomChoice]
}

// computerPlay()

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It is a tie"
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")
        ){
            playScore++
            yourScoreEl.innerHTML = `Your Score: <span class="win">${playScore}</span> -`
            
            return "You Won! " + playerSelection + " beats " + computerSelection
        }

    else{
            computerScore++
            compEl.innerHTML = ` Computer Score: <span class="win">${computerScore}</span>`
        return "You Lose " + computerSelection + " beats " + playerSelection
    }
}