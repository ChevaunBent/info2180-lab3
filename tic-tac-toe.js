"use strict";
window.onload = function () {
  //HTML Elements
  const divEls = document.querySelectorAll("#board div")
  const rstBtn = document.querySelector('.btn')
  const statusDiv = document.querySelector("#status");

  //Variables and constants 
  let gamRun = true; //monitors if the game is running
  var xTurn = true;//initialize game as x turn first
  var sqrIndex = 0;
  const playedX = [];
  const playedO = [];
  const X_Class = 'X'
  const O_Class = 'O'

  const wonComb = [
    //only the following placements can result in a win
    "012",
    "345",
    "678",
    "036",
    "147",
    "258",
    "048",
    "246"
  ];




  //initializes board, places squares and their position location
  function initialize(){
    for (const divEl of divEls) {
      divEl.classList.add("square");
      divEl.classList.add(sqrIndex);
      sqrIndex++;
    }
  }


  //Functions
  //Used to handle if a person wins and ends the game
  function handleWin(content){
    if(content == 'X' || content == 'O'){
      statusDiv.innerHTML= content + " Won";
    }else{
      statusDiv.innerHTML = "Game Draw";
    }

  }

  //Used to generate the possible combinations based on placement on the grid
  function combinations(chars) {
    var result = [];
    var f = function (prefix, chars) {
      for (var i = 0; i < chars.length; i++) {
        result.push(prefix + chars[i]);
        f(prefix + chars[i], chars.slice(i + 1));
      }
    }
    f('', chars);
    return result;
  }

//Used to check if a player has won after making a move
  const checkWinner = (sqrLoc, content) => {
    if (content == 'X') {
      playedX.push(sqrLoc);
      const played1 = playedX.join('');
      const allcomb1 = combinations(played1);
      //filtering only combinations of size 3 if game not draw
      var filtered1 = allcomb1.filter((fil) => fil.length >= 3 && fil.length < 4);
      //check after each play to see if a wining combination obtained or game draw
      for(var items1 of filtered1){
        if(wonComb.includes(items1)){
          handleWin(content);
          gamRun = false;
        }
      }
    } else {
      content = 'O';
      playedO.push(sqrLoc);
      const played2 = playedO.join('');
      const allcomb2 = combinations(played2);
      //filtering only combinations of size 3
      var filtered2 = allcomb2.filter((fil) => fil.length >= 3 && fil.length < 4);
      //check after each play to see if a wining combination obtained or game draw
      for(var items2 of filtered2){
        if(wonComb.includes(items2)){
          handleWin(content);
          gamRun = false;
        }
      }
    }

  }



  //Event Handlers and game play

  initialize();

  const handleRstBtn = () => {
    gamRun = true;
    xTurn = true;
    sqrIndex = 0;
    for(const cellDivs of divEls){
      cellDivs.innerHTML = '';
      cellDivs.setAttribute("class", "square");
      statusDiv.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    }
    playedO.length = 0;
    playedX.length = 0;
    console.log(playedO,playedX);
    initialize();
  }

  const handlecells = (evnt) => {
    const sqrLst = evnt.target.classList;
    const sqrLoc = evnt.target.classList[1];

    if (!gamRun || sqrLst[2] == 'X' || sqrLst[2] == 'O') {
      return;
    }

    if (xTurn) {
      sqrLst.add(X_Class);
      var thing = document.getElementsByClassName(sqrLst);
      const content = thing[0].innerHTML = 'X';
      checkWinner(sqrLoc, content);
      //console.log(content);
      //console.log(sqrLst);
      xTurn = !xTurn;
    } else {
      sqrLst.add(O_Class);
      var thing2 = document.getElementsByClassName(sqrLst);
      const content2 = thing2[0].innerHTML = 'O';
      checkWinner(sqrLoc, content2);
      //console.log(content2);
      //console.log(sqrLst);
      xTurn = !xTurn;
    }

  }

  //Event listeners
  //Events will be added to the 9 game cells and the reset button
  rstBtn.addEventListener('click', handleRstBtn);

  for (const divEl of divEls) {
    divEl.addEventListener('click', handlecells)
  }




  //funcntions that runs game














}


