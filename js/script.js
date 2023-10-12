const wrapper = document.getElementById("wrapper");
const container = document.createElement("div");
container.className = `p-3`;
container.innerHTML = `
    <h1> Inserisci la tua email </h1>
    <form class="row">
        <div class="col-6">
            <label for = "email" class="visually-hidden"></label>
            <input type="email" class="form-control" id="email" placeholder="Email">
        </div>
        <div class="col-2">
            <button type="submit" class="btn btn-primary">Invia Email</button>
        </div>
    </form> 
`;
console.log(container);
wrapper.append(container);

const listEmail = [
    "paolorossi@gmail.com",
    "marioverdi@gmail.com",
    "lucabianchi@hotmail.it",
    "elisaneri@hotmail.it"
]
console.log(listEmail);
for (e = 0; e < listEmail.length; e++){
    console.log(listEmail[e]);
    let insertEmail = document.getElementById("email").value;
    let checkEmail = listEmail[e];
    let text, colorText;
    if (insertEmail === checkEmail){
        text = "Email corretta";
        colorText = "text-success";
    } else{
        text = "Email non trovata"
        colorText = "text-danger";
    }

}   