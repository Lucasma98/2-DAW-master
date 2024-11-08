const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30
const DURACION = 10 //empieza una cuenta regresiva de 10 segundos, esto lo hemos creado nosotros

let records 
if(localStorage.getItem("records")){ //Comprobar si tiene datos guardados de records en el localstorage y los use 
    records = JSON.parse(localStorage.getItem("records")) //JSON.parse recuperas el dato //JSON.stringify guarda los datos
} else{
    records = [
        {name: "Andrew", points: 5},
        {name: "Pamela", points: 4},
        {name: "Elisabeth", points: 3},
        {name: "George", points: 2},
        {name: "Caroline", points: 1}
    ]
}

const btnEmpezar = document.querySelector("#btnEmpezar")
const tablero = document.querySelector("#tablero")
const bola = document.querySelector("#bola")
const labelPuntos = document.querySelector("#puntos")
const labelVelocidad = document.querySelector("#velocidad")
const labelTiempo = document.querySelector("#tiempo")

const cuerpoRecords = document.querySelector("#records>tbody")//donde insertar los records y es en el tbody del html

let tiempo
partida = false //de normal empieza parada
let puntos = 0
labelPuntos.textContent = puntos

tablero.style.width = ANCHURA_TABLERO + "px" //Darle la anchura al tablero, aparezca en pantalla
tablero.style.height = ALTURA_TABLERO + "px"
bola.style.width = DIAMETRO_BOLA + "px" //Darle el diametro a la bola, aparezca en pantalla
bola.style.height = DIAMETRO_BOLA + "px"

listarRecords()//para que cuando empieze la partida empieze mostrando los records

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
                terminarPartida()
            }
            // moverBola() llamada
            // moberBola referencia
        },1000)
})

tablero.addEventListener("click", function(ev){
    
    if(ev.target.id != "bola"){//esto se hace porque si no lo pones y haces click en la bola, clicka la bola y el tablero, ya que es como si la atravesara y como debajo de la bola esta el tablero, si no fallaria
       terminarPartida()
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

function listarRecords(){

}

function moverBola(){
    bola.style.top = Math.random() * (ALTURA_TABLERO - DIAMETRO_BOLA) + "px" //genere la posicion de la bola aleatoriamente y los restas para que si te da el balor maximo el random, la bola no se salga fuera del tablero
    bola.style.left = Math.random() * (ANCHURA_TABLERO - DIAMETRO_BOLA) + "px"

}

function terminarPartida(){
    clearInterval(crono)
    clearInterval(movimiento)//si haces click en el tablero en vez de la bola, el juego pare
    partida = false //si fallas para
    let nombre
    if(puntos > records[records.length - 1].points){//accede al ultimo de la tabla y le pides sus puntos
        nombre = prompt("Escribe tu nombre")
        //Consejo: comprobar que el nombre sea correcto o limitar lo que pueda escribir
                //comprobar si la puntuacion merece entrar en tabla de records
    records.push({ // mete los datos en la tabla
        name : nombre,
        points : puntos
    })
    //ordene numericamente la puntuacion
    records.sort((a,b) => b.points - a.points)// b - a para que ordene de mayor a menor
    //borramos el ultimo de la tabla//splice tienes que decir el elemento y la cantidad que quieres borrar //pop elimina directamente la ultima
    records.pop()
    //listar de nuevo la tabla de records con los cambio recientes
    listarRecords()
    //actualizo el LocalStorage
    localStorage.setItem("records",JSON.stringify(records))//guardar los datos en el localstorage
    //JSON.stringify guarda los datos
    }
}

function listarRecords(){
    cuerpoRecords.innerHTML = "" //vaciar la tabla cada vez que terminas
    records.forEach( (r,index) => { 
        //crear una fila de la tabla por cada record del array records
        let newRow = cuerpoRecords.insertRow()
        let newCell1 = newRow.insertCell()
        let newCell2 = newRow.insertCell()
        let newCell3 = newRow.insertCell()
        newCell1.textContent = index + 1
        newCell2.textContent = r.name
        newCell3.textContent = r.points
    })
}