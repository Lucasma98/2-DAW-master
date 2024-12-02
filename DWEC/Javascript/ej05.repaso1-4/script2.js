/* Reto 2
 Crea un documento HTML que solicite
 al usuario cuatro números por separado
 y escriba en el documento cuál es
 la diferencia entre el mayor y el menor.
*/

const numeroInput = document.querySelector("#numeroInput")
const numerosTA = document.querySelector("#numerosTA")

let misNumeros = []

numeroInput.focus()
numeroInput.addEventListener("keyup",function(ev){
    if(ev.key == "Enter"){
        if(isNaN (numeroInput.value))
    }
})



