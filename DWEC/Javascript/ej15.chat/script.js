
const chat = document.querySelector("#chat")
const nick = document.querySelector("#nick")
const teclado = document.querySelector("#teclado")



let ultimo = 0

nick.focus()


teclado.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        //comprobar si hay algo escrito en los 2 campos
        if (nick.value.trim() && teclado.value.trim()) {
           //si ok, llamar al php para insertar mensaje en BD 
            let opciones = { //se hace de esta forma con el POST
                method: "POST",
                body: new URLSearchParams("nick=" + nick.value.trim() + "&mensaje=" + teclado.value.trim())
            }
            fetch("server/chat_insert_post.php",opciones)
            .then( () => {
                teclado.value = ""
            })
        }
    }
})




let actualizaMensajes = setInterval( consultaNuevosMensajes , 1000)


function consultaNuevosMensajes() {
    //si tienes que coger dos parametros "server/chat_select_get_json.php?ultimo=" + ultimo + "&hola" + hola 
    fetch("server/chat_select_get_json.php?ultimo=" + ultimo) // la palabra ultimo esta en el php de get y + ultimo es para guardar la informacion que haya para luego comprobarla y que no te muestre dos veces los mismos mensajes
    .then( resp => resp.json() ) //esto en el post no se hace porque en el php de get hay un echo para que muestre algo y en el de POST no
    .then( json => { 
        json.forEach( m => { //es un bucle que comprueba si hay nuevos mensajes
            let nuevoMensajeDiv = document.createElement("div")
            nuevoMensajeDiv.classList.add("mensaje")
            nuevoMensajeDiv.textContent = m.nick + ": " + m.texto
            chat.append(nuevoMensajeDiv)
            ultimo = m.id //ver el id del ultimo mensaje y apartir del ultimo mensaje coger los siguientes id
            //bajar el scroll del DIV "chat" para mostrar siempre lo nuevo
            chat.scrollTop = chat.scrollHeight //instruccion para que la barra lateral para bajar o subir para ver los mensajes, siempre este la barra de scroll en la ultima parte para mostrar los ultimos mensajes
        })
    })
}