const buscador = document.querySelector("#buscador")
const cuerpoGraficas = document.querySelector("#tableResultados>tbody")
const tableSeleccionados = document.querySelector("#tableSeleccionados>tbody")
let recu_productos
const inputBorrarTodos = document.querySelector("#inputBorrarTodos")

listarRecords("")//ponemos las "" para que si no pone ninguna letra en el buscador las muestre todas


//let cart = [] //si haces lo de comprobar si hay localstorage tienes que quitar los []

// if(esta el carrito en LS) cart = JSON.parse(localStorage.getItem("cart"))
// else cart = [] // esto es para preguntar si hay algo en el local storage y lo muestre

// showcart//y esto es para que si hay que te lo muestre


buscador.addEventListener("keyup",function(){
    listarRecords(buscador.value.trim())
})

inputBorrarTodos.addEventListener("click",function(){
    BorrarCarrito()
})




function listarRecords(patron) {
    cuerpoGraficas.innerHTML = ""
    //recuperar el array de records de la BD
    fetch("server/gpushop.php?pattern=" + patron)
    .then( resp => resp.json() )
    .then( records => {
        recu_productos = records
        records.forEach( (r) => {
     
            let newRow = cuerpoGraficas.insertRow()
            let newCell1 = newRow.insertCell()
            let newCell2 = newRow.insertCell()
            let newCell3 = newRow.insertCell()
            newCell1.textContent = r.titulo 
            newCell2.textContent = r.precio
            
            let newAddButton = document.createElement("button")
            newAddButton.textContent= "añadir"
            newAddButton.addEventListener("click",function(){
                añadirSeleccionado(r.id)
            })
            newCell3.append(newAddButton)
        })
    })
}

    
function añadirSeleccionado(id){
    let tarjeta = recu_productos.find(p => p.id == id)
    
    console.table(tarjeta)//te lo muestre en el F12

    let newRow = tableSeleccionados.insertRow()
    let newCell1 = newRow.insertCell()
    let newCell2 = newRow.insertCell()
    
    newCell1.textContent = tarjeta.titulo
    newCell2.textContent = tarjeta.precio
}

function BorrarCarrito(){
    tableSeleccionados.innerHTML = ""
}

//dos formas de recuperarlo del html
//Acceder a th precio para subrayarlo o lo que quieras
const celdaPrecio = document.querySelector("#tableResultados>thead>tr>th:nth-child(1)")
// const celdaPrecio = document.querySelector("#tableResultados>thead>tr>th")[1]
celdaPrecio.addEventListener("click",function(){
    this.classList.toggle("amarillo")//lo metemos en la clase amarillo que es un style del css
    //Funcion del toggle: si el objeto tiene la clase amarillo, se la quita y si el objeto no tiene la clase amarillo, se la pone
}) //toggle y replace