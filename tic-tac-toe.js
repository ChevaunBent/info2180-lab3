"use strict";
window.onload = function(){
    document.querySelectorAll("#board div").forEach(function(divs){
        divs.setAttribute("class", "square");
    });
}


