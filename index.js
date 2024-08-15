let formulario = document.getElementById("miformulario")
// console.log(formulario)
formulario.addEventListener('submit', (event)=>{
    // el este caso event es el parametro que representa al evento, formalmente es un objeto que detecta el 
    // evento
    event.preventDefault();
    let numeroDeTarjeta = document.getElementById('numbercard')
    if (numeroDeTarjeta === "") {
        return("Falta Completar")
    }
    
})