let playerWinCount = 0;
let computerWinCount = 0

function getComputerChoice(){
    let choices = ["rock","paper","scissors"]
    return choices[(Math.floor(Math.random()*choices.length))]
}

function getWinner(){
    const overallScore = document.createElement("div")
    if (playerWinCount === 5){
        overallScore.textContent = "Player Wins"
    }else{
        overallScore.textContent = "Computer Wins"
    }
    resultDisplay.appendChild(overallScore)
        
    playerWinCount = 0;
    computerWinCount = 0;
}


function playRound(playerSelection){
    computerSelection = getComputerChoice();
    console.log('P:',playerSelection);
    console.log('C:',computerSelection);
    if (playerSelection === "rock" && computerSelection === "scissors"){
        result = "win";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        result = "win";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        result = "win";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        result = "lose";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        result = "lose";
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        result = "lose";
    }else{
        result = "draw"
    }
    const resultDisplay = document.querySelector(".resultDisplay")
    resultDisplay.textContent = result
    
    if (result === "win"){
        playerWinCount+=1
    }else if (result === "lose"){
        computerWinCount+=1
    }

    const playerScore = document.querySelector("#playerScore");
    playerScore.textContent = "Player Score: " + playerWinCount;
    const computerScore = document.querySelector('#computerScore');
    computerScore.textContent = "Computer Score: " + computerWinCount

    if (playerWinCount === 5 || computerWinCount === 5){
        resultDisplay.textContent = ""
        getWinner()
    }
}

resultDisplay = document.querySelector(".resultDisplay")
rockButton = document.querySelector(".rock");
paperButton = document.querySelector(".paper");
scissorsButton = document.querySelector(".scissors")

rockButton.addEventListener("click",()=>playRound("rock"))
paperButton.addEventListener("click",()=>playRound("paper"))
scissorsButton.addEventListener("click",()=>playRound("scissors"))





// function game(){
//     let playerWinCount = 0;
//     let computerWinCount = 0
    

//     for (let i = 0; i < 5; i++){
//         computerSelection = getComputerChoice();
//         playerSelection =   prompt("Enter rock, paper, or scissors.").toLowerCase();
//         console.log("COMPUTER CHOICE:",computerSelection);

//         if (playRound(playerSelection,computerSelection) === "win"){
//             playerWinCount += 1;
//             console.log("You won this round");
//         }else if (playRound(playerSelection,computerSelection) === "lose"){
//             computerWinCount +=1;
//             console.log("You lost this round");
//         }else{
//             console.log("Draw")
//         }

//         console.log("Player : Computer")
//         console.log(`${playerWinCount}:${computerWinCount}`)
//     }

//     if (playerWinCount > computerWinCount){
//         console.log("Yay! You Won!");
//     }else if (computerWinCount > playerWinCount){
//         console.log("hahaha you lost!")
//     }else{
//         console.log("Draw")
//     }
// }

// game()