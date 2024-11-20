const buscador = document.querySelector("#buscador")
const cuerpoGraficas = document.querySelector("#tableResultados>tbody")
const tableSeleccionados = document.querySelector("#tableSeleccionados>tbdoy")

listarRecords("")//ponemos las "" para que si no pone ninguna letra en el buscador las muestre todas


buscador.addEventListener("keyup",function(){
    listarRecords(buscador.value.trim())
})




function listarRecords(patron) {
    cuerpoGraficas.innerHTML = ""
    //recuperar el array de records de la BD
    fetch("server/gpushop.php?pattern=" + patron)
    .then( resp => resp.json() )
    .then( records => {
        records.forEach( (r,index) => {
     
            let newRow = cuerpoGraficas.insertRow()
            let newCell1 = newRow.insertCell()
            let newCell2 = newRow.insertCell()
            let newCell3 = newRow.insertCell()
            newCell1.textContent = r.titulo 
            newCell2.textContent = r.precio
            
            let newAddButton = document.createElement("button")
            newAddButton.textContent= "añadir"
            newAddButton.addEventListener("click",function(){
                añadirSeleccionado()
            })
            newCell3.append(newAddButton)
        })
    })
}

    
function añadirSeleccionado(){
        
}

