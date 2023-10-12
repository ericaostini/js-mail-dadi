// email
const wrapper = document.getElementById("wrapper");
const container = document.createElement("div");
container.className = `p-3`;
container.innerHTML = `
    <h1> Inserisci la tua email </h1>
    <label for="email"></label>
    <input type="email""type=" class="form-control" placeholder = "email" id="email" name="email" >
    <button class="btn btn-primary">Invia Email</button>
    <div class="d-none alert">ciao</div>
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
const button = document.querySelector("button");
const displayAlert = document.querySelector(".alert");
button.addEventListener("click", function(){
    let insertEmail = document.getElementById("email").value;
    let found = false;
    for (e = 0; e < listEmail.length; e++){
        console.log(listEmail[e]);
        let checkEmail = listEmail[e];
        if (insertEmail === checkEmail){
            found = true;
        }
    }
    let text, buttonAlert;
    if(found){
        console.log("presente");
        text = "Email presente";
        buttonAlert = "alert-info";
    } else {
        text = "Email non presente";
        buttonAlert = "alert-info";
    }
    displayAlert.innerHTML = text; 
    displayAlert.classList.remove("d-none");
    displayAlert.classList.add(buttonAlert); 
})
