//Global variables
let humanScore = 0;
let computerScore = 0;

// Random option is selected from below function using Random method
function getComputerChoice(){
    let choice = ['Rock', 'Paper', 'Scissor']

    let selectedChoice = Math.floor(Math.random()*choice.length);
    return choice[selectedChoice];

}

//Below function gets the human provided input and compares if it is a valid input.
// It is not case sensitive and only checks for valid input taken from prompt method.
function getHumanChoice(){
    let userChoice = prompt("Please a your choice Rock/Paper/Scissor",'').toLowerCase();
    let choice = userChoice.charAt(0).toUpperCase()+userChoice.slice(1);
    // if(choice==='Rock'||
    //     choice==='Paper'||
    //     choice==='Scissor'){
    //     true;
    // }
    // else{
    //     alert("Entered value is invalid, please enter a valid choice b/w 'Rock/Paper/Scissor'");
    // }
    return choice;
    }

// playRound() function evaluates humanChoice and computerChoice and declares who is winner of the round.
// Also keeps track of the score by incrementing humanScore and computerScore by 1.
let playRound = (humanChoice, computerChoice) => {

   
    if(humanChoice==='Rock' && computerChoice==='Paper'){
        console.log('You lose! Paper beats Rock!')
        computerScore ++;
    }
    else if(humanChoice==='Paper' && computerChoice==='Rock'){
        console.log('You Win! Paper beats Rock')
        humanScore++;
    }
    else if(humanChoice==='Scissor' && computerChoice==='Paper'){
        console.log('You Win! Scissor beats Paper')
        humanScore++;
    }
    else if(humanChoice==='Paper' && computerChoice==='Scissor'){
        console.log('You lose! Scissor beats Paper')
        computerScore++;
    }
    else if(humanChoice==='Scissor' && computerChoice==='Rock'){
        console.log('You lose! Rock beats Scissor')
        computerScore++;
    }
    else if(humanChoice==='Rock' && computerChoice==='Scissor') {
        console.log('You Win! Rock beats Scissor')
        humanScore++;
    }
    else{
        return;
    }
    
     return console.log("Your Score is: "+humanScore + " and Computer Score is: "+ computerScore);
}


 //playGame function calls the playRound function for 5 times only if valid scenario exists otherwise return error message.
  let playGame = () => 
{
            
        for( let i=0; i<5; i++)
            {
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();
                if(humanSelection==='Rock' || humanSelection=== 'Paper' || humanSelection==='Scissor') //Verifies if human entered input is valid
                    {   if(humanSelection===computerSelection)  //Validates if both human and computer selection are same and nullifies the round if same.
                        {
                            console.log("Your entered input and computer value are same, please try again");
                            i--;
                        }
                        else //calls playRound function if all valid scenarios are passed.
                        {   
                            console.log("Round "+(i+1)+" score is:");
                            playRound(humanSelection, computerSelection);
                        }
                    }
                    //Return error message for invalid input from human selection and nullifies the round
                else 
                    {
                        console.log("Invalid value please try again");
                        i--;
                    }
                
            }
            //Below condition validates the score and declared the winner in console
            if(computerScore>humanScore)
                {
                    console.log("Computer wins the game with score: "+computerScore);
                }
            else if(humanScore===computerScore)
                {
                    console.log("Match is a draw with scores Human "+humanScore+" and Computer "+computerScore);
                }
            else
                {
                    console.log("Congratulations you won the game with score: "+humanScore);
                }
}

//Calling the Rock Paper Scissor game.
playGame();