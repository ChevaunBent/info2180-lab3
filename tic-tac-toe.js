"use strict";
const restartButton = document.getElementsByClassName('btn');
var circleTurn= true;
let state=[];



window.onload = function(){
    document.querySelectorAll("#board div").forEach(function(divs){
        divs.setAttribute("class", "square");
    });

    function swapTurns() {
        circleTurn = !circleTurn
      }    

    document.querySelectorAll("#board div").forEach(item => {
        item.addEventListener('click', event => {
          if(circleTurn){
            item.innerHTML = "O";
            item.setAttribute("class", "square O")
          }else{
            item.innerHTML = "X";
            item.setAttribute("class", "square X")
          }
        swapTurns();  

        })
      })



}


