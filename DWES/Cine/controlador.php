<?php
include("modelo.php");
include("vista.php");

$resultados = getCartelera();

printCartelera($resultados);


