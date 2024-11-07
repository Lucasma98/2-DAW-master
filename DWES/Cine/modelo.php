<?php


require "db.php";


function getCartelera()
{
    $sentencia = "SELECT * FROM cartelera_cines, cartelera_salas,cartelera_peliculas,cartelera_pases WHERE cartelera_cines.CINE_ID = cartelera_salas.CINE_ID and cartelera_salas.SALA_ID = cartelera_pases.SALA_ID and cartelera_pases.SALA_ID = cartelera_peliculas.PELICULA_ID";
	$result  = $GLOBALS['DB']->prepare($sentencia);
	$result->execute();
    
    // Recupera todas las filas en un array
    $cartelera = $result->fetchAll();
	
    return $cartelera;
	
}





//print_r( getClasificacion() );



?>