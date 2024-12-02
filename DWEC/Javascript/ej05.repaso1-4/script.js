/* Reto 1
Crea un documento HTML que solicite cuántos caramelos tienes
 y entre cuántas personas quieres repartirlos.
 A continuación el programa escribirá el mensaje:
 "Si tienes __ caramelos y hay __ personas,
 tienes que repartir __ caramelos a cada uno
 y te sobran __ caramelos".
*/
const numCaramelosInput = document.getElementById("numCaramelosInput")
const numPersonasInput = document.getElementById("numPersonasInput")
const resultadoTA = document.getElementById("resultadoTA")
const boton = document.getElementsByTagName("button")
const repartir = boton[0]


numCaramelosInput.addEventListener("keyup",function(ev){
    if(ev.key == "Enter"){
        numPersonasInput.focus()
    }
})
numPersonasInput.addEventListener("keyup",function(ev){
    if(ev.key == "Enter"){
        comprobar_y_calcular()
    }
})
repartir.addEventListener("click",comprobar_y_calcular)

function comprobar_y_calcular(){
    let num_caram = parseInt(numCaramelosInput.value)
    let num_pers = parseInt(numPersonasInput.value)
    if( num_caram >= 0 && num_pers > 0){
        let parteEntera = Math.floor(num_caram / num_pers)
        let restantes = num_caram % num_pers

        resultadoTA.value = "Repartes " + parteEntera + " caramelos a cada persona y te sobran " + restantes + " caramelos"
    } else {
        resultadoTA.value = "Debes escribir números enteros positivos en los 2 campos"
    }
}