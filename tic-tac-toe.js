"use strict";
const divEl= document.querySelectorAll("#board div");
const restartButton = document.getElementsByClassName('btn');
const X_Class = 'X'
const O_Class = 'O'
var circleTurn= false;
const WIN_COMB = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]




window.onload = function(){
    document.querySelectorAll("#board div").forEach(function(divs){
        divs.setAttribute("class", "square");
        divs.onmouseover = function(event) {
            event.target.classList.add("hover");
        divs.onmouseout = function(event) {
            event.target.classList.remove("hover");
            event.target.classList.add("hover O");
        }
          };
    });

    function swapTurns() {
        circleTurn = !circleTurn
      }    

    function checkWin(){

    }

    document.querySelectorAll("#board div").forEach(item => {
        item.addEventListener('click', event => {
          if(circleTurn){
            item.innerHTML = O_Class;
            item.setAttribute("class", "square O")
          }else{
            item.innerHTML = X_Class;
            item.setAttribute("class", "square X")
          }
        swapTurns();  

        })
      })



}


