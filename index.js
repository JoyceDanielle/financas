function toogleModal(){
    let modal = document.querySelector("#modal")
    
    modal.classList.remove("invisivel");

}

function closeModal(){
    let modal = document.querySelector("#modal")
    
    modal.classList.add("invisivel");
}

function toogleTipoConta(event){
    let btnEntrada = document.querySelector("#btnEntrada");
    let btnSaida = document.querySelector("#btnSaida");
    console.log(event.target);

    if(event.target.getAttribute('id') === "btnEntrada"){
        btnEntrada.classList.remove("disable");
        btnEntrada.classList.add("active");
        btnSaida.classList.remove("active");
        btnSaida.classList.add("disable");

    }else{
        btnSaida.classList.remove("disable");
        btnSaida.classList.add("active");
        btnEntrada.classList.remove("active");
        btnEntrada.classList.add("disable");
    }
    
}

