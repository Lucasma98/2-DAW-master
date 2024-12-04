const buscador=document.querySelector("#buscador")
const tableResultados=document.querySelector("#tableResultados>tbody")
const tableSeleccionados=document.querySelector("#tableSeleccionados>tbody")
const inputBorrarTodos=document.querySelector("#inputBorrarTodos")
let recu_graficas
let vacio=""

buscador.addEventListener("keyup",function(){

    tableGraficas(buscador.value.trim())
})

inputBorrarTodos.addEventListener("click",function(){
   
    tableSeleccionados.innerHTML=""
    localStorage.clear()
})

tableGraficas(vacio)

let carrito=JSON.parse(localStorage.getItem("carrito") || "[]")
tableCarrito(carrito)




function tableGraficas(patron)
{
    tableResultados.innerHTML=""
    fetch("server/gpushop.php?pattern=" + patron)
    .then(resp => resp.json())
    .then(graficas => {
        recu_graficas=graficas
        graficas.forEach((g) => {
            let newRow=tableResultados.insertRow()
            let newCell1=newRow.insertCell()
            let newCell2=newRow.insertCell()            
            let newCell3=newRow.insertCell()            

            newCell1.textContent=g.titulo
            newCell2.textContent=g.precio

            let buttonAdd=document.createElement("BUTTON")
            buttonAdd.textContent="Añadir"
            newCell3.append(buttonAdd)

            buttonAdd.addEventListener("click",function(){
                añadirLocalStorage(g.id)
            })
        });
    })
}

function añadirLocalStorage(id)
{
    let carrito = JSON.parse(localStorage.getItem("carrito") || "[]")
    let producto = recu_graficas.find(p => p.id == id)

    carrito.push(producto)

    localStorage.setItem("carrito",JSON.stringify(carrito))

    tableCarrito(carrito)
}

function tableCarrito(carrito)
{
    tableSeleccionados.innerHTML=""
    
    carrito.forEach(g=> {

        let newRow=tableSeleccionados.insertRow()
            let newCell1=newRow.insertCell()
            let newCell2=newRow.insertCell()            
            let newCell3=newRow.insertCell()            

            newCell1.textContent=g.titulo
            newCell2.textContent=g.precio

            let buttonDel=document.createElement("BUTTON")
            buttonDel.textContent="borrar"
            newCell3.append(buttonDel)

            buttonDel.addEventListener("click",function(){
                
                let i=carrito.indexOf(g)
                if(i!== -1)
                {
                    carrito.splice(i,1)
                    localStorage.setItem("carrito",JSON.stringify(carrito))
                    newRow.textContent=""
                }
                
            })


    })
        
    
}
