//alert("Primera instruccion javascript")

const salidaTA = document.getElementById("salidaTA")
const secreto = Math.floor(Math.random()*100 + 1)
salidaTA.value = ""
console.log(secreto)


let intento = parseInt(prompt("Escribw un nº entero entre 1 y 100"))
if (intento >=1 && intento <=100) {
    //comprobar si es el nº a adivinar
    if(intento > secreto)
        salidaTA.value += "\n Con el numero " + intento + " te has pasado"
    else if( intento < secreto)
        salidaTA.value += "\n Con el numero " + intento + " te has quedado corto"
    else 
        salidaTA.value += "\n ¡Has acertado!"
}