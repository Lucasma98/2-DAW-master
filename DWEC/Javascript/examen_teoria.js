OBLIGATORIO

//Recuperar información del árbol Doom:
    const btnShowFav = document.querySelector("#btnShowFav")

//Escucha eventos
    inputNumber.addEventListener("keyup",function(ev){
    if(ev.key == "Enter"){
        inputNumber.focus()
    addContact()
    }


let name = inputName.value.trim()   //value cuando <input> <textarea>   //trim quita espacios
let nuevoLI = document.createElement( "LI" ) //textcontent cuando <div>, <li>
nuevoLI.textContent

//Fetch básico(recuperar información de la base de datos y mostrarla)

    const cuerpoGraficas = document.querySelector("#tableResultados>tbody") //aquí es donde quieres que se muestre la informacion
    let recu_productos


    listarRecords("")//ponemos las "" para que si no pone ninguna letra en el buscador las muestre todas
    
    function listarRecords(patron) { //patron es por si fuera de esta función no tienes un let patron, se lo creas ahi
    cuerpoGraficas.innerHTML = ""   //una constante que te inventas tu para meter la informacion
    //recuperar el array de records de la BD
    fetch("server/gpushop.php?pattern=" + patron) //pattern lo miras en el php y patron es a la variable que le asignas por si quieres filtrar por ejemplo las graficas por busqueda
    .then( resp => resp.json() )
    .then( records => {
        recu_productos = records //records es la variable que creas para guardar la información que recives
        recu_productos.forEach( (r) => {
     
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

function añadirSeleccionado(id){ //busque por id los productos recuperados y los muestre en la lista de abajo
    let tarjeta = recu_productos.find(p => p.id == id)
    
    console.table(tarjeta)//te lo muestre en el F12

    let newRow = tableSeleccionados.insertRow()
    let newCell1 = newRow.insertCell()
    let newCell2 = newRow.insertCell()
    
    newCell1.textContent = tarjeta.titulo
    newCell2.textContent = tarjeta.precio
}

//NO OPCIONALES

 //Local Storage

    let phonebook
    if (localStorage.getItem("phonebookLS")){ //phonebookLS es una llave inventada
        phonebook = JSON.parse(localStorage.getItem("phonebookLS"))//getitem recupera los datos y setitem guarda esos datos.
        phonebookToTable(phonebook)//dibujar el array contactos en la tabla DOM
    }   else{
           phonebook = []
      }

    function saveToLS(){
        localStorage.setItem("phonebookLS",JSON.stringify(phonebook))//esto es para guardar los datos del array(phonebook) con el nombre de(phonebookLS) en el localstorage, y que aunque cierres la pagina, si la vuelves a abrir los  datos se hayan guardado


    function addContactToTable(name, number) {//mostrar los datos del local storage
            let newRow = phonebookTbody.insertRow(); //creas la variable newRow porque mas tarde quieres editar las filas
            let newCell1 = newRow.insertCell(); // ahora creas nuevas celdas en la fila
            let newCell2 = newRow.insertCell();
            let newCell3 = newRow.insertCell();
            newCell1.textContent = name; //en la primera celda añades el nombre
            newCell2.textContent = number; //en la segunda celda añades el numero
            let btnDelete = document.createElement("button"); //creas un boton
            btnDelete.textContent = "Delete";
            btnDelete.classList.add("btn","btn-danger") //btn","btn-danger hace que ponga el mismo formato que esos nombres que ya estan predefinidos siempre(son css), no hay que memorizarlos.
            newCell3.append(btnDelete); //añades el boton a la tercera celda
            btnDelete.addEventListener("click",function(){
                newRow.remove()
                deleteContactFromPhonebook(name,number)
            })  

//POST Enviar información a la base de datos y que la guarde

    teclado.addEventListener("keyup",function(ev){
            if (ev.key == "Enter") {
                //comprobar si hay algo escrito en los 2 campos
                if (nick.value.trim() && teclado.value.trim()) {//Nick y teclado es el id de la caja de texto donde rellenas la información //trim no deja espacios en blanco
                //si ok, llamar al php para insertar mensaje en BD 
                    let opciones = { //se hace de esta forma con el POST
                        method: "POST",
                        body: new URLSearchParams("nick=" + nick.value.trim() + "&mensaje=" + teclado.value.trim())
                    }
                    fetch("server/chat_insert_post.php",opciones)
                    .then( () => {
                        teclado.value = "" // el texto que mandas es diferente y necesitas que lo vacie para enviar el siguiente mensaje, pero el nombre no porque siempre es el mismo.
                        })
                }
            }
    })

// Filter/sort avanzado
    
//  Filter es para crear un nuevo array con todos los elementos que cumplan una condición especificada. Debe devolver true para mantener el elemento en el nuevo array, o false para excluirlo.
//  sort se utiliza para ordenar los elementos de un array. Recibe dos argumentos (a, b) y debe compararlos

    const clasificaciones = [
    {name :"Ana"} , 
    {name: "Oswaldo"} , 
    {name: "Raul"} , 
    {name: "Celia"} , 
    {name: "Maria"} , 
    {name: "Antonio"}
    ]
    clasificaciones.splice(4,1)//el numero 4 del array que elimine 1 elemento(elimine a celia ya que al cambiarla de posicion se duplico)
    
    //encontrar el indice donde el name = "Antonio"
    let indice = clasificaciones.findIndex( p => p.name == "Antonio")//el findIndex te busca el elemento y te dice donde esta
    clasificaciones.splice(indice,1) 

    clasificaciones.splice(1,0, {name: "Roberto"}, {name: "Amaya"})//coges el puesto 1 y elimina 0 elementos, y a partir de hay ingresa valores

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

    // • Filtra y muestra en pantalla aquellos que sean de 1 fabricante dado. 
    coches.filter(c => {
        return (c.fab.toLowerCase() == "Ford" || c.fab.toLowerCase() == "Skoda")
    })
    
    
    // • Filtra y muestra en pantalla aquellos que superen los 25000 euros.
    let caros = coches.filter(c => c.precio > 25000)  //parseInt(c.precio) si el precio estuviera entre comillas "25900"

//Interval/Timeout

    let actualizaMensajes = setInterval( consultaNuevosMensajes , 1000) //ejecute la funcion cada 1000milisegundos
    //Intervalo para que cada x segundos se pare el añadebola //puedes hacerlo sin poner el let añadebola
    let añadebola = setTimeout( () => {clearInterval(añadebola)} , 10000 )

//Expresiones regulares media/avanzada
    //Es una funciona auxiliar, a parte de otra que añadiria con new cell por ejemplo

//FUNCIONES AUXILIARES
function addContact(){
    let name = inputName.value.trim()//la variable name coje el valor del campo nombre
    let number = inputNumber.value.trim()//la variable apellidos coje el valor del campo apellidos
    const expRegNumber = /^(\+[0-9]{2,3})?[0-9]{9}$/ // el signo ^ y $ obliga a que haga eso desde el principio(^) hasta el final($). Al poner \+ hace que el signo + no haga actue en la funcion regular como una suma, hace que simplemente cree el signo +.
    //{2,3} que te obliga a que tenga 2 o 3 caracteres entre o-9.Por ejemplo +34 +346, pero al poner ? hace que no sea obligatorio poner el prefijo del numero 
    //expresion regular para que el numero ([0-9]) sea entre 0 y 9 y {9} que te obliga a que tenga 9 caracteres. ? afecta a los parentesis y hace que sea opcional
    if (name && expRegNumber.test(number)) {
        // name.trim() con esto te obliga a que minimo tenga una letra o caracter y con el trim que el espacio no cuente como caracter
        //expRegNumber.test(number.trim()) con esto te obliga a que el numero tenga 9 caracteres y que sean numeros, ademas con number.trim() si ha puesto espacios al escribir el numero los quita.
        addContactToPhonebook(name,number)//la funcion addContactToPhonebook coga los valores de nombre y numero
        addContactToTable(name,number)//la funcion refreshTable actualiza la tabla cada vez que añades un contacto a la tabla
        resetForm()     
    }
}

function addContactToPhonebook(name, number) {
     phonebook.push(//añadir los datos al array
            {//el push es para que las filas se vayan añadiendo una encima de la otra
            name: name, 
            number: number
            })     
            saveToLS()//guarda los datos en el local storage     

}}})
