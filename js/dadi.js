// funzione random 
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// dadi
const wrapperDadi = document.getElementById("dadi");
