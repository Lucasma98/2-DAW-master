//RECUPERAR ELEMENTOS DEL ARBOL DOM
const inputName = document.querySelector("#inputName");
const inputNumber = document.querySelector("#inputNumber")
const btnAdd = document.querySelector("#btnAdd")
const phonebookTbody = document.querySelector("#phonebooktable>Tbody")//#phonebooktable>body esto es porque queremos el body del phonebookTable pero como no tiene id lo pones como #phonebooktable>body
const btnShowFav = document.querySelector("#btnShowFav")
const thName = document.querySelector("#phonebooktable th")//otra manera es poniendo "#phonebooktable th. Sin poner > hace que busque el th dentro del phonebook table.

//esto es para recuperar los datos que habian ingresados, antes de cerrar la pagina
let phonebook
if (localStorage.getItem("phonebookLS")){
    phonebook = JSON.parse(localStorage.getItem("phonebookLS"))//getitem recupera los datos y setitem guarda esos datos.
    phonebookToTable(phonebook)//dibujar el array contactos en la tabla DOM
}   else{
        phonebook = []
    }
//otra manera de hacerlo(usa la que prefieras)
//let phonebook = JSON.parse(localStorage.getItem("phonebookLS") || "[]") //el json parse simepre tienes que darle un string para que lo transforme en objeto, por eso se pone en comillas el array"[]"

let ShowFavs = false //esto es para que de primeras no este en favorito

resetForm()

//DEJAR PROGRAMADO LOS EVENTOS DEL USUARIO
inputName.addEventListener("keyup",function(ev){ //para cuanto este en el campo nombre, al presionar enter, se pase a numero
    if(ev.key == "Enter"){
        inputNumber.focus()
        addContact()
    }
})
btnAdd.addEventListener("click",function(){//darle al boton la funcion de añadir los datos
    addContact()
})
inputNumber.addEventListener("keyup",function(ev){//darle a la tecla enter la funcion de añadir los datos. Se pone ev porque necestias acceder a la tecla que se ha pulsado
    if(ev.key == "Enter"){
        addContact()
    }
})
inputSearch.addEventListener("keyup",function(){
    filterPhonebook(phonebook)
})
btnShowFav.addEventListener("click",function(){
    ShowFavs = !ShowFavs //esto hace que si le das al boton, se ponga en true y si le vuelves a dar se ponga en false(ponga o quite favoritos)
    if(ShowFavs){//esto es para que cuando le des al boton, cambie de color y de nombre
        btnShowFav.textContent = "Show every contact"
        btnShowFav.classList.replace("btn-primary","btn-warning")
    }    else{
        btnShowFav.textContent = "Show favorites"
        btnShowFav.classList.replace("btn-warning","btn-primary")
        }
    
    filterPhonebook(phonebook)
})
thName.addEventListener("click",function(){
    //array.sort() dentro de los parentesis hay que indicar una funcion flecha
    //que reciba 2 parametros(a,b), en este caso son 2 contactos del array. El
    //codigo de la funcion debe devolver un nº negativo si consideras que el 
    //elemento a debe estar antes que el b. La funcion devolvera un nª positivo
    //si consideras que el elemento b debe ir antes que el a.
    filterPhonebook( phonebook.sort((a,b) =>{// (a,b) es para que compare dos contactos, el contacto a y el contacto b
        if( a.name.toLowerCase() < b.name.toLowerCase()) return-1 //si el contacto a es menor que el contacto b, se coloque detras del contacto b
        else return 1
    }) )
})

//FUNCIONES AUXILIARES
function addContact(){
    let name = inputName.value.trim()//la variable name coje el valor del campo nombre
    let number = inputNumber.value.trim()//la variable apellidos coje el valor del campo apellidos
    const expRegNumber = /^(\+[0-9]{2,3})?[0-9]{9}$/ // el signo ^ y $ obliga a que haga eso desde el principio(^) hasta el final($). Al poner \+ hace que el signo + no haga actue en la funcion regular como una suma, hace que simplemente cree el signo +.
    //{2,3} que te obliga a que tenga 2 o 3 caracteres entre o-9.Por ejemplo +34 +346, pero al poner ? hace que no sea obligatorio poner el prefijo del numero 
    //expresion regular para que el numero ([o-9]) sea entre 0 y 9 y {9} que te obliga a que tenga 9 caracteres. ? afecta a los parentesis y hace que sea opcional
    if (name && expRegNumber.test(number)) {
        // name.trim() con esto te obliga a que minimo tenga una letra o caracter y con el trim que el espacio no cuente como caracter
        //expRegNumber.test(number.trim()) con esto te obliga a que el numero tenga 9 caracteres y que sean numeros, ademas con number.trim() si ha puesto espacios al escribir el numero los quita.
        addContactToPhonebook(name,number)//la funcion addContactToPhonebook coga los valores de nombre y numero
        addContactToTable(name,number)//la funcion refreshTable actualiza la tabla cada vez que añades un contacto a la tabla
        resetForm()     
    }
}

function addContactToPhonebook(name, number) {
     phonebook.push(
            {//el push es para que las filas se vayan añadiendo una encima de la otra
            name: name, 
            number: number
            })     
            saveToLS()//esto hace que se ejecute la funcion(saveToLS) que guarda los datos constantemente que se van ingresando en las filas(en el array)      
}

function addContactToTable(name, number,favorite = false) {
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
    let newFavButton = document.createElement("button")
    newFavButton.classList.add("btn", "btn-link")
    newCell3.append(newFavButton)
    if(!favorite){
        newFavButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/> </svg>`
    } else
        newFavButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/> </svg>`
        newFavButton.addEventListener("click",function(){
            //colorear o vaciar la estrella(HTML)
            favorite = !favorite
            if(!favorite){
                newFavButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/> </svg>`
            } else{
                newFavButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/> </svg>`
            }        
            //cambiar la propiedad "favorite" del ese contacto en el array
            let index = phonebook.findIndex(c => c.name == name && c.number == number )
            phonebook[index].favorite = !phonebook[index].favorite//array en la propiedad index(la que hayas pulsado la estrella) y la propiedad favorite se le asigna el valor de favorite.
            saveToLS()//aqui tambien debe volver a guardar la informacion porque han habido cambios
        })
    

    
}

function deleteContactFromPhonebook(name,number){//funcion para borrar del array
    //localizar el indice del contacto por name y number
    let index = phonebook.findIndex(c => c.name == name && c.number == number )
    if(index >=0){
    phonebook.splice(index,1)//El index coge la fila que has seleccionado al clikar el boton borrar.El numero 1, dice que elimina un contacto, si hubieran dos, eliminaria dos contarctos.
    saveToLS()//aqui tambien debe volver a guardar la informacion porque han habido cambios
    }
}
function filterPhonebook(phonebook){ //cuando buscas por nombre o numero y  pulsas en "show favorites", si el nombre o numero buscado no esta en favoritos desaparece.
    let patron = inputSearch.value.trim()
    phonebookToTable( phonebook.filter(
        c => (c.name.toLowerCase().includes(patron.toLowerCase())//filtra los contactos del phonebook
        || c.number.includes(patron) )
        && ((ShowFavs && c.favorite) || (!ShowFavs))
    ) )
    //c.name.toLowerCase().includes(patron.toLowerCase) haces que los nombres y el valor del patron sean en minusculas porque a la hora de buscar sea mas flexible y no tengas que escribir la palabra literal
}

function phonebookToTable(phonebook){//(phonebook) lo nombra porque luego lo necesita para filtrar los contactos
    phonebookTbody.innerHTML=""//vaciar el tbody antes de mostrar el array
    phonebook.forEach(c => addContactToTable(c.name, c.number, c.favorite))//esto es para que cada contacto(c) se vaya añadiendo a la tabla para que le aparezca al usuario como al principio(aparece lo mismo que aparecia antes de cerrar la paguina,)y no solo en el array
}

function resetForm(){
    inputName.value = ""//vaciar el campo nombre
    inputNumber.value = ""//vaciar el campo numero
    inputName.focus()//que al abrir la paguina el cursors empieze ya en el nombre
}

function saveToLS(){
    localStorage.setItem("phonebookLS",JSON.stringify(phonebook))//esto es para guardar los datos del array(phonebook) con el nombre de(phonebookLS) en el localstorage, y que aunque cierres la paguina, si la vuelves a abrir los datos se hayan guardado
//JSON.stringify o utilizamos eso o al guardar el dato en el localstorage, se guarda como lo que es(un objeto) y no como la informacion(el contacto)
}

