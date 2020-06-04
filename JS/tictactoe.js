
$(document).ready(function(){

////////////////// Game Variables ////////////////////////////

const player1 = "X";
const player2 = "O";
let currentTurn = 1;
let movesMade = 0;
const gameOverContainer = $('.gameOver');
const resultContainer = $('.result');
const resetContainer = $('.resetDiv');
const reset = $('.reset');
let whoTurn = $('.turn');
const sqr = $('.block');
let playerOnescore = 0;
let playerTwoscore = 0;

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

// const catIcon = $('#cat');
// const dogIcon = $('#dog');
// const xIcon = $('#X');
// const oIcon = $('#O');

/////////start button function //////////////////////////
$('#start').click(function() {
  window.location.href='./tictactoe.html';
});

////////////////// Games Play /////////////////////
sqr.on('click', function(e){
  if($(this).text().length === 0 ) {
    movesMade++;
    if(currentTurn === 1){
      $(this).text(player1);
      $(this).css('color', "red");
      $('.turn').text("Player 2's Turn");
      currentTurn++;
    } else {
      $(this).text(player2);
      $(this).css('color', "green");
      $('.turn').text("Player 1's Turn");
      currentTurn--;
    }
    if(checkWinner()){
      let theWinner = currentTurn === 1 ? player2 : player1;
      declareWinner(theWinner);
    } else if (checkDraw()){
       declareDraw()
    }
  }
});

////////////////////////////////Check Draw ////////////////////////////
const checkDraw = function (){
    if(movesMade > 8){
      let moves = Array.prototype.slice.call($(".block"));
      let results = moves.map(function(square){
        return square.innerHTML;
      });
      return winningCombos.find(function(combo){
        if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] !== results[combo[1]] && results[combo[1]] !== results[combo[2]]) {
                return true;
            } else { //else if statement for draw condition//
                return false;
              }
            });
          }
}
////////////////////////////////Check Winner //////////////////////////
  const checkWinner = function(){
    if(movesMade > 4){
      let moves = Array.prototype.slice.call($(".block"));
      let results = moves.map(function(square){
      return square.innerHTML;
      });
      return winningCombos.find(function(combo){
        if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                return true;
            } else {
                return false;
            }
      });
    }
  }

/////////////////////////result / rendering functions ////////////////////////

  const declareWinner = function (winner){
      gameOverContainer.css('display', "block");
      resultContainer.css('display', "block");
      resetContainer.css('display', "block")
      reset.css('display', "block");
       if(winner === player1){
          winner = 'Player 1';
          playerOnescore++ ;
          $(player1).text(winner)
          $('.oneScore').text(playerOnescore);
        }else {
          winner = 'Player 2';
          playerTwoscore++;
          $(player2).text(winner)
          $('.twoScore').text(playerTwoscore);
        }
      resultContainer.text(winner + " wins!")
    }

    const declareDraw = function (draw){
      gameOverContainer.css('display', "block");
      resultContainer.css('display', "block");
      resetContainer.css('display', "block")
      reset.css('display', "block");
      resultContainer.text("It's a draw")
    }


/////////////////////// reset board function ///////////////////////////////
  $('.reset').click(function(e){
    let moves = Array.prototype.slice.call($(".block"));
    let results = moves.map(function(square){
      square.innerHTML ="";
    });
    resultContainer.html('');
    gameOverContainer.css('display', "none");
    resultContainer.css('display', "none");
    resetContainer.css('display', "none")
    reset.css('display', "none");
    whoTurn.text("Player 1's Turn")
    currentTurn=1;
    movesMade=0;
  });
});

//Code to revisit////
///// update player names ///////
// $("#start").click(function(){
//   let playerOneName = $('#p1').val();
//   let playerTwoName = $('#p2').val();
//   $('#player1').val(playerOneName);
//   $('#player2').val(playerTwoName);
// });
