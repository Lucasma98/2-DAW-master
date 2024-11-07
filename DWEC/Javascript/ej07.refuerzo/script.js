//7. Ejercicio sobre arrays
// Celia adelanta a Raúl. 
// Antonio es descalificado y se elimina del concurso. 
// Detrás  de  Ana  y  antes  de  Oswaldo  se  clasifican  dos  nuevos  concursantes: 
// Roberto y Amaya, en ese orden. 
// Hay una nueva participante que pasa a encabezar la clasificación: Marta. 
// Imprime la clasificación actualizada y comprueba que se ha hecho correctamente.
const clasificaciones = [
    {name :"Ana"} , 
    {name: "Oswaldo"} , 
    {name: "Raul"} , 
    {name: "Celia"} , 
    {name: "Maria"} , 
    {name: "Antonio"}
    ]
// SOLUCION CLASICA
// let temp = clasificaciones[2]
//clasificaciones[2] = clasificaciones[3]
//clasificaciones[3] = temp
clasificaciones.splice(2,0,clasificaciones[3])
clasificaciones.splice(4,1)//el numero 4 del array que elimine 1 elemento(elimine a celia ya que al cambiarla de posicion se duplico)

//encontrar el indice donde el name = "Antonio"
let indice = clasificaciones.findIndex( p => p.name == "Antonio")//el findIndex te busca el elemento y te dice donde esta
clasificaciones.splice(indice,1) 

clasificaciones.splice(1,0, {name: "Roberto"}, {name: "Amaya"})//coges el puesto 1 y elimina 0 elementos, y a partir de hay ingresa valores

//solucion 1: splice
clasificaciones.splice(0,0,{name:"Marta"})
//solucion 2: unshift
// let marta = {name: "Marta"} esto seria si quisieras declarar como objeto a marta en clasificaciones
// clasificaciones.unshift({name:"Marta"})
