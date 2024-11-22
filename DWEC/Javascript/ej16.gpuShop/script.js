const buscador = document.querySelector("#buscador")
const cuerpoGraficas = document.querySelector("#tableResultados>tbody")
const tableSeleccionados = document.querySelector("#tableSeleccionados>tbody")
let recu_productos
const inputBorrarTodos = document.querySelector("#inputBorrarTodos")

listarRecords("")//ponemos las "" para que si no pone ninguna letra en el buscador las muestre todas


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
