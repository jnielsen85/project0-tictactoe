
$(document).ready(function(){

const player1 = "X";
const player2 = "O";
let currentTurn = 1;
let movesMade = 0;
const gameOverContainer = $('.gameOver');
const winnerContainer = $('.winner');
const resetContainer = $('.resetDiv');
const reset = $('.reset');
const sqr = $('.block');


sqr.on('click', function(e){
  movesMade++;

  if(currentTurn === 1){
    event.target.innerHTML = player1;
    event.target.style.color = "red";
    currentTurn++;
  } else {
    event.target.innerHTML = player2;
    event.target.style.color = "green";
    currentTurn--;
  }
  if(checkWinner()){
    let theWinner = currentTurn === 1 ? player2 : player1;
    declareWinner(theWinner);
  }
});

  checkWinner = function(){
    if(movesMade > 4){
      let moves = Array.prototype.slice.call($(".block"));
      let results = moves.map(function(square){

        return square.innerHTML;

      });
console.log([results]);
      const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      return winningCombos.find(function(combo){
        if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                return true;
            } else { //else if statement for draw condition//
                return false;
            }
      });

    }

  }
    declareWinner = function (winner){
      gameOverContainer.css('display', "block");
      winnerContainer.css('display', "block");
      resetContainer.css('display', "block")
      reset.css('display', "block");
      winner = winner === player1? 'James':'Dom';
      winnerContainer.text(winner + " wins!")

  }

  reset.on('click',function(e){
    let moves = Array.prototype.slice.call($(".block"));
    moves.map((p) => {
      p.innerHTML ="";
    });
    winnerContainer.html('');
    gameOverContainer.css('display', "none");
    winnerContainer.css('display', "none");
    resetContainer.css('display', "none")
    reset.css('display', "none");
    currentTurn=1;
    movesMade=0;
  });

});
