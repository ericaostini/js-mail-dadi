// funzione random 
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// dadi
const wrapperDadi = document.getElementById("dadi");
const gioco = document.createElement("div");
gioco.className= `container pt-3`;
gioco.innerHTML = `
    <h1 class = "text-primary">Gioco dei dadi</h1>
    <p> Il programma genera un numero causale per l'utente e un numero casuale per il computer, chi ha il numero più alto vince! </p>
`;
wrapperDadi.append(gioco);
let numberUser = getRndInteger(1,6);

console.log(numberUser);
let numberComputer = getRndInteger(1,6);
console.log(numberComputer);