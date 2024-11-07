//alert("Primera instruccion javascript")

//Funcionalidad del boton
const resgisterBtn = document.getElementById("registerBtn") //localizar el boton
resgisterBtn.addEventListener("click",registrar)


function registrar() {
    //mostrar en la consola
    console.log("boton funciona y usuario ya pillado")
    // mostrar en el label de info para el usuario
    const userMessagesLb1 = document.getElementById("userMessagesLb1")
    userMessagesLb1.textContent = "Usuario ya pillado"
}