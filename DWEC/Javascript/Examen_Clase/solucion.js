const DB_URL = "https://my-json-server.typicode.com/luismiguel-fernandez/examen/"

const inpSearch = document.querySelector("#inpSearch")
const btnSearch  = document.querySelector("#btnSearch")

const btnSortArtist = document.querySelector("#btnSortArtist")
const btnSortTitle = document.querySelector("#btnSortTitle")
const btnSortLenInc = document.querySelector("#btnSortLenInc")
const btnSortLenDec = document.querySelector("#btnSortLenDec")

const selArt = document.querySelector("#selArt")
const inpTit = document.querySelector("#inpTit")
const inpLen = document.querySelector("#inpLen")
const btnAddSong = document.querySelector("#btnAddSong")
const feedback1 = document.querySelector("#feedback1")

const inpEdit = document.querySelector("#inpEdit")
const btnEdit = document.querySelector("#btnEdit")
const feedback2 = document.querySelector("#feedback2")

const inpDelete = document.querySelector("#inpDelete")
const btnDelete = document.querySelector("#btnDelete")
const feedback3 = document.querySelector("#feedback3")

const inpPlay = document.querySelector("#inpPlay")
const inpTimer = document.querySelector("#inpTimer")
const btnPlay = document.querySelector("#btnPlay")
const feedback4 = document.querySelector("#feedback4")

const btnLoad = document.querySelector("#btnLoad")
const btnLoadLS = document.querySelector("#btnLoadLS")
const btnSaveLS = document.querySelector("#btnSaveLS")

const divSongList = document.querySelector("#divSongList")


let lista = [];



//boton para añadir canciones
btnAddSong.addEventListener('click', function() { 
    const title = inpTit.value.trim(); 
    const duration = inpLen.value.trim(); 
    const artists = selArt.value.trim()
    añadir_cancion_lista(artists,title,duration)   
    resetear()   
}); 
//boton para borrar canciones
btnDelete.addEventListener("click",function(){
    const index = inpDelete.value.trim();
    deleteSong(index)
})


//boton para mostrar canciones
btnLoad.addEventListener("click",function(){
    pedirCanciones()
})


btnLoadLS.addEventListener("click",function(){
    if (localStorage.getItem("listaLS")){ 
        lista = JSON.parse(localStorage.getItem("listaLS"))
        phonebookToTable(lista)
    }   else{
        lista = []
      }
})

btnSaveLS.addEventListener("click",function(){
    saveToLS();
})

btnSortArtist.addEventListener("click", function() {
    lista.sort((a, b) => a.artist.localeCompare(b.artist))
    mostrarCanciones();
});
btnSortTitle.addEventListener("click", function() {
    lista.sort((a, b) => a.title.localeCompare(b.title))
    mostrarCanciones();
});
btnSortLenInc.addEventListener("click", function() {
    lista.sort((a, b) => a.length - b.length)
    mostrarCanciones();
});
btnSortLenDec.addEventListener("click", function() {
    lista.sort((a, b) => b.length - a.length)
    mostrarCanciones();
});




function saveToLS(){
        localStorage.setItem("listaLS",JSON.stringify(lista))
}


listarArtistas()
let recu_artistas
function listarArtistas() {
    fetch("https://my-json-server.typicode.com/luismiguel-fernandez/examen/artists")
        .then(resp => resp.json())
        .then(artista => {
            recu_artistas = artista
            artista.forEach(artista => {
            let newOption = document.createElement("option");
                newOption.value = artista.id; 
                newOption.textContent = artista.name
                selArt.append(newOption);
            });
    })
}

function añadir_cancion(){
    let title = inpTit.value.trim().toLowerCase();
    let duration = inpLen.value.trim().toLowerCase();
    const expRegLetras = /[a-zA-Z0-9]+.*/;
    const expRegNumber = /^[1-9]\d*/
    if (expRegLetras.test(title) && expRegNumber.test(duration)){
        añadir_cancion_lista(title,duration)
        añadir_cancion_tabla(title,duration)
        resetear()
    }
}


function añadir_cancion_lista(artist,title,duration){
    lista.push(
        {//el push es para que las filas se vayan añadiendo una encima de la otra
        artist: artist,  
        title: title, 
        duration: duration
        }) 
        mostrarCanciones()     
}

function añadir_cancion_tabla(artist,title,duration)
{
    let nuevaCancion =document.createElement("div")
    nuevaCancion.textContent= " Artista id: " + artist + " Titulo: " + title + " Duracion: " + duration; 
   
}

function resetear(){
    inpTit.value = ""
    inpLen.value = ""
}


function deleteSong(index) {
    //const songIndex = lista.findIndex(song => song.id == index);
        lista.splice(index, 1);
        const songDiv = document.getElementById("song_" + index);
        if (songDiv) {
            songDiv.remove();
        }
}

function pedirCanciones() {
    divSongList.innerHTML = ""; // Clear the current list
    fetch("https://my-json-server.typicode.com/luismiguel-fernandez/examen/songs")
        .then(response => response.json())
        .then(songs => {
            lista = songs
            mostrarCanciones()
        })
}


function mostrarCanciones(){
     divSongList.innerHTML = ""
    lista.forEach( (song, index) => {
        const canciones = document.createElement("div");
        canciones.textContent = index + 1 + " Cancion: " + song.title + " Artista ID:" + song.artist + song.length;
        divSongList.appendChild(canciones);
    });
}

function formatDuration(duration) {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

btnPlay.addEventListener('click', function() {
    const index = inpPlay.value.trim()
    playSong(index)
});

function playSong(index) {
    const song = canciones.find(song => song.id == index)
    if (song) {
        let duration = song.length
        const timer = setInterval(function() {
            if (duration <= 0) {
                clearInterval(timer)
            } else {
                duration--;
                inpTimer.value = formatDuration(duration)
            }
        }, 1000);
    }
}



inpSearch.addEventListener("keyup", function() {
    divSongList.innerHTML = "";
    const searchTerm = inpSearch.value.trim().toLowerCase()
    const filteredSongs = lista.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || song.artist.toLowerCase().includes(searchTerm)
    );
    filteredSongs.forEach(song => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = + song.id + song.artist + song.title  - song.length
        divSongList.append(newDiv);
    });
});
