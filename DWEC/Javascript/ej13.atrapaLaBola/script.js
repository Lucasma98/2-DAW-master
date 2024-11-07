const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30
const DURACION = 10 //empieza una cuenta regresiva de 10 segundos, esto lo hemos creado nosotros

const btnEmpezar = document.querySelector("#btnEmpezar")
const tablero = document.querySelector("#tablero")
const bola = document.querySelector("#bola")
const labelPuntos = document.querySelector("#puntos")
const labelVelocidad = document.querySelector("#velocidad")
const labelTiempo = document.querySelector("#tiempo")

let tiempo
partida = false //de normal empieza parada
let puntos = 0
labelPuntos.textContent = puntos

tablero.style.width = ANCHURA_TABLERO + "px" //Darle la anchura al tablero, aparezca en pantalla
tablero.style.height = ALTURA_TABLERO + "px"
bola.style.width = DIAMETRO_BOLA + "px" //Darle el diametro a la bola, aparezca en pantalla
bola.style.height = DIAMETRO_BOLA + "px"

let movimiento //tenemos que declarar la variable fuera, porque si lo haces dentro de btnEmpezar, luego no la puedes recuperar, para usarla en el addevenlistenner que hace que pare el juego
let crono //tenemos que declarar la variable fuera, porque si lo haces dentro de btnEmpezar, luego no la puedes recuperar, para usarla en el addevenlistenner que hace que pare el juego

btnEmpezar.addEventListener("click", function(){
    partida = true //empieza
    clearInterval(movimiento)//cuando presionas varias veces empezar, reinicia todo el rato(antes se bugeaba y aceleraba la bola porque se iban acumulando cada vez que le dabas)
    movimiento = setInterval(moverBola,1000) //recarga la funcion bola cada tiempo que le hayas dado(1000mili segundos)
    puntos = 0
    labelPuntos.textContent = puntos //los puntos cuando pulses otra vez el boton de empezar vuelvan a cero
    labelVelocidad.textContent = 1000
    tiempo = DURACION //darle el timpo a la variable tiempo
        labelTiempo.textContent = tiempo
        clearInterval(crono)//resetee el crono(si le da varias veces al boton, se elimine cada una de ellas y vuelva a iniciar)
        crono = setInterval(function(){ //creas la funcion ahora, en los otros ya tenias la funcion a parte y simplemente la llamabas
            tiempo--
            labelTiempo.textContent = tiempo
            if(tiempo == 0){ //acabar la partida
                clearInterval(crono)
                clearInterval(movimiento)
                partida = false
            }
            // moverBola() llamada
            // moberBola referencia
        },1000)
})

tablero.addEventListener("click", function(ev){
    
    if(ev.target.id != "bola"){//esto se hace porque si no lo pones y haces click en la bola, clicka la bola y el tablero, ya que es como si la atravesara y como debajo de la bola esta el tablero, si no fallaria
        clearInterval(movimiento)//si haces click en el tablero en vez de la bola, el juego pare
        partida = false //si fallas para
        clearInterval(crono)
    }
})

bola.addEventListener("click", function(){
    if(partida){
        puntos++//vaya incrementando los puntos
        moverBola()
        clearInterval(movimiento)//esto hace que cuando le des click en la bola, automaticamente vuelva ha hacer el movimiento de la bola(no te permite sumar dos puntos cuando la bola esta en la misma posicion)
        movimiento = setInterval(moverBola,1000 - puntos*50)
        labelVelocidad.textContent = 1000 - puntos*50
        labelPuntos.textContent = puntos
    }
})

function moverBola(){
    bola.style.top = Math.random() * (ALTURA_TABLERO - DIAMETRO_BOLA) + "px" //genere la posicion de la bola aleatoriamente y los restas para que si te da el balor maximo el random, la bola no se salga fuera del tablero
    bola.style.left = Math.random() * (ANCHURA_TABLERO - DIAMETRO_BOLA) + "px"

}

/*
records = [
    {name: "Andrew", points: 10},
    {name: "Pamela", points: 8},
    {name: "Elisabeth", points: 6},
    {name: "George", points: 4},
    {name: "Caroline", points: 2}
]
*/