// funzione random 
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// dadi
const wrapperDadi = document.getElementById("dadi");
const gioco = document.createElement("div");
gioco.className= `container pt-3`;
gioco.innerHTML = `
    <div class="card text-center">
        <h2 class="card-header">Gioco dei dadi</h2>
        <div class="card-body">
            <h5 class="card-title">Come funziona?</h5>
            <p class="card-text"> Il programma genera un numero causale per l'utente e un numero casuale per il computer, chi ha il numero più alto vince!</p>
            <button class="btn btn-primary">Genera numeri</button>
        </div>
        <div class="card-footer text-body-secondary data-bs-toggle="collapse" data-bs-target="#collapseExample">
            Ricarica pagina per ottenere una nuova combinazione
        </div>
    </div>
`;
wrapperDadi.append(gioco);
const buttonNumber = document.querySelector("button");
buttonNumber.addEventListener("click", function(){
    let numberUser = Math.floor(Math.random() * 6) + 1;
    console.log(numberUser);
    let numberComputer = Math.floor(Math.random() * 6) + 1;
    console.log(numberComputer);
    gioco.innerHTML += `
        <div class = "bg-primary my-3 text-light">
            <div class = "d-flex justify-content-center">
                <p class = "m-3">User numero: ${numberUser}</p>
                <p class = "m-3"> Computer numero: ${numberComputer} </p>
            </div>
        </div>
        <div class = "text-center">
            <i class="fs-2 fa-solid fa-circle-chevron-down text-primary"></i>
        </div>
    `;
    let winText, computer;
    if (numberUser > numberComputer){
        winText = "User vince";
    } else if (numberUser < numberComputer){
        winText = "Computer vince";
    } else {
        winText = "Pareggio";
    }
    gioco.innerHTML += `
        <div class = "text-center text-primary"> 
            <p class = "">${winText}</p>
        </div>
    `
})