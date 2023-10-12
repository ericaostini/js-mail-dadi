const wrapper = document.getElementById("wrapper");
const container = document.createElement("div");
container.className = `p-3`;
container.innerHTML = `
    <h1> Inserisci la tua email </h1>
    <form class="row">
        <div class="col-6">
            <label for="email" class="visually-hidden">Email</label>
            <input type="email" class="form-control" id="email" value = "Email">
        </div>
        <div class="col-2">
            <button type="submit" class="btn btn-primary">Invia Email</button>
        </div>
    </form> 
`;
console.log(container);

wrapper.append(container);