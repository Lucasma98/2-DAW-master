// 8. Ejercicio sobre arrays y objetos (opcionalmente clases). 
// • Inserta en un array 5 objetos diferentes siguiendo la estructura dada: 
// o fabricante: “Toyota”, 
// o modelo: “Auris”, 
// o precio: “22900” 

const coches = [
    {fab: "Toyota", modelo: "Auris" , precio: 25900},
    {fab: "Ford", modelo: "Auris" , precio: 27900},
    {fab: "Audi", modelo: "Auris" , precio: 34900},
    {fab: "Skoda", modelo: "Auris" , precio: 21900},
    {fab: "BW", modelo: "Auris" , precio: 28900}
]
// • Ordena y muestra en pantalla por precio descendente. 
coches.sort((a,b) => {
    if (a.precio >= b.precio)return -1 //if a sigue delante de b return -1
    else return 1 //el valor 1 lo que hace es mandarlo hacia abajo  
})
// • Ordena y muestra en pantalla por fabricante. 
coches.sort((a,b) =>{
    if (a.fab.toLowerCase() < b.fab.toLowerCase()) return -1 //tolowercase() por si insertaran alguna marca en minuscula, primero las ponga todas en minuscula
    else return 1
})
// • Filtra y muestra en pantalla aquellos que sean de 1 fabricante dado. 
coches.filter(c => {
    return (c.fab.toLowerCase() == "Ford" || c.fab.toLowerCase() == "Skoda")
})

// • Filtra y muestra en pantalla aquellos que superen los 25000 euros.
let caros = coches.filter(c => c.precio > 25000)  //parseInt(c.precio) si el precio estuviera entre comillas "25900"
