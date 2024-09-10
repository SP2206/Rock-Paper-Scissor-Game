const score = {
    wins: 0,
    losses: 0,
    ties: 0
   };
  let computermove;
    function computerMove(){ 
        let randomnum = Math.random();
        if(randomnum>=0 && randomnum<= 1/3){
        computermove = 'rock';
        }else if(randomnum>=1/3 && randomnum<=2/3){
            computermove = 'paper';
        }else{
            computermove = 'scissor';
        }
        return computermove;
      }
  
    function playgame(playermove){
     let result = '';
     const computermove = computerMove();
        if(playermove === 'rock'){
           if(computermove === 'rock'){
                result = 'Tie';
            } else if(computermove === 'paper'){
                result = 'You Lost';
            } else if(computermove === 'scissor'){
                result = 'You Won';
            }
        }

        if(playermove === 'paper'){
         if(computermove === 'rock'){
            result = 'You Won';
            } else if(computermove === 'paper'){
            result = 'Tie';
            } else if(computermove === 'scissor'){
            result = 'You Lost';
            }
        }
        if(playermove === 'scissor'){
           if(computermove === 'rock'){
            result = 'You Lost';
            } else if(computermove === 'paper'){
            result = 'You Won';
            } else if(computermove === 'scissor'){
            result = 'Tie';
            }
        }
        if(result === 'You Lost'){
           score.losses = score.losses +=1;
        }else if(result === 'You Won'){
            score.wins = score.wins += 1 ;
        }else if(result === 'Tie'){
            score.ties = score.ties +=1;
        }
        updateScore();
        document.querySelector('.result').innerHTML =
        `${result}`;
        document.querySelector('.score').innerHTML = 
        (`
Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
   }
       
    function updateScore(){
        document.querySelector('.score').innerHTML = 
        `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
       }
    
function resetscore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
}
