"use strict";
const restartButton = document.getElementsByClassName('btn');
var circleTurn= false;
let state=[];



window.onload = function(){
    document.querySelectorAll("#board div").forEach(function(divs){
        divs.setAttribute("class", "square");
        divs.onmouseover = function(event) {
            event.target.classList.add("hover");
        divs.onmouseout = function(event) {
            event.target.classList.remove("hover");
            event.target.classList.add("hover O");
        }
            /* event.target: parent element */
          };
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


