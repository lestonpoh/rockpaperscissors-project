function getComputerChoice(){
    let choices = ["rock","paper","scissors"]

    return choices[(Math.floor(Math.random()*choices.length))]
}


function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "win";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "win";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "win";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return "lose";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "lose";
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "lose";
    }else{
        return "draw"
    }
}


function game(){
    let playerWinCount = 0;
    let computerWinCount = 0
    

    for (let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection =   prompt("Enter rock, paper, or scissors.").toLowerCase();
        console.log("COMPUTER CHOICE:",computerSelection);

        if (playRound(playerSelection,computerSelection) === "win"){
            playerWinCount += 1;
            console.log("You won this round");
        }else if (playRound(playerSelection,computerSelection) === "lose"){
            computerWinCount +=1;
            console.log("You lost this round");
        }else{
            console.log("Draw")
        }

        console.log("Player : Computer")
        console.log(`${playerWinCount}:${computerWinCount}`)
    }

    if (playerWinCount > computerWinCount){
        console.log("Yay! You Won!");
    }else if (computerWinCount > playerWinCount){
        console.log("hahaha you lost!")
    }else{
        console.log("Draw")
    }
}

game()