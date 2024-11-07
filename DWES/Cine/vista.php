<?php

function printCartelera($resultados)
{
    $i = 0;
    $cine = $resultados[0]["CINE_ID"];
    $first = "true";
    while( $i <count ($resultados)) 
    {
        if($first)
        {
            printf("<h1>%s</h1>",$resultados[$i]["CINE"]);
            $first = false;
        }
        else
        {
            if($cine <> $resultados[$i]["CINE_ID"])
            {
            printf("<h1>%s</h1>",$resultados[$i]["CINE"]);
            $cine = $resultados[$i]["CINE_ID"];
            }
        }
        $cadena = $resultados[$i]["SALA"] . " " . $resultados[$i]["TITULO"]; //. " " . deje mas espacio entre la sala y el titulo
        $sala = $resultados[$i]["SALA_ID"];
        $pelicula = $resultados[$i]["PELICULA_ID"];
        while($i <count($resultados) && $sala == $resultados[$i]["SALA_ID"] && $pelicula == $resultados[$i]["PELICULA_ID"])
        {
            $cadena = $cadena . " " . $resultados[$i]["HORA"];
            $i++;
        }
        echo $cadena . "<BR>";
    }

}

?>