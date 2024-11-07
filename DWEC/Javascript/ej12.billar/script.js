//recuperar elementos del DOM
const tablero = document.querySelector("#tablero")
const bolas = []

const ANCHURA_TABLERO = 900
const ALTURA_TABLERO = 450
const ANCHURA_BOLA = 30 //estas dos constantes es para que cuando haga el math.random, si da el maximo valor, la bola aparece fuera del tablero.
const ALTURA_BOLA = 30


//código automático
tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
addBola(10)
//Intervalo para que las bolas actualicen su posicion cada x milisegundos
let mueveBolas = setInterval(moverBolas,0)
//Intervalo para que cada segundo aparezca una nueva bola en el tablero
let añadebola = setInterval(addBola ,1000)
//Intervalo para que cada x segundos se pare el añadebola //puedes hacerlo sin poner el let añadebola
setTimeout( () => {clearInterval(añadebola)} , 10000 )

//funciones auxiliares
function addBola(num = 1) { 
    for (let i=1; i<= num; i++) {
        let nuevaBola = document.createElement("DIV") 
        nuevaBola.classList.add("bola")
        tablero.append(nuevaBola) //aparezca la bola en el tablero

        let top0 = Math.random()*(ALTURA_TABLERO - ALTURA_BOLA) //para que la bola no se salga del tablero debido al valor maximo del math.random
        let left0 = Math.random()*(ANCHURA_TABLERO - ANCHURA_BOLA)

        let vely0 = Math.random()*10 - 5 //genera valores entre 0 y 10 y luego entre -5 y 5
        let velx0 = Math.random()*10 - 5

        //para generar valores aleatorios RGB para que te de un color aleatorio
        let r0 = Math.floor(Math.random()*255)
        let g0 = Math.floor(Math.random()*255)
        let b0 = Math.floor(Math.random()*255)
        let color0 = `rgb(${r0},${g0},${b0})`
        nuevaBola.style.backgroundColor = color0

        let nuevaInstanciaBola = new Bola(nuevaBola,top0,left0,velx0,vely0,color0)//ahora le das los parametros que habias puesto en la funcion de bola
        bolas.push(nuevaInstanciaBola)
        
        
    }
}
function moverBolas() {
    bolas.forEach(b => { //recorres todas las bolas del array y todas las mueves un poco
        // esto es para que la bola se mueva
        b.top = b.top + b.vely
        b.left = b.left + b.velx
        b.punteroDiv.style.top = b.top + b.vely + "px" // el incremento de top viene de la posiciona actual + el incremento que quieres hacerle. Tambien le añades que son px
        b.punteroDiv.style.left = b.left + b.velx + "px"

        //para que la bola no se salga del tablero
        if(b.top < 0 || b.top > ALTURA_TABLERO - ALTURA_BOLA) //si la bola se pasa del 0 o de la altura del table, la velocidad debe de cambiar. Salirse la de vertical
            b.vely = -b.vely
        if(b.left < 0 || b.left > ANCHURA_TABLERO - ANCHURA_BOLA) //Salirse de la horizontal
            b.velx = -b.velx
    })
} 




    // bolas[0].style.top = parseInt(bolas[0].style.top) + 1 + "px"
    // bolas[0].style.left = parseInt(bolas[0].style.left) + 1 + "px"
