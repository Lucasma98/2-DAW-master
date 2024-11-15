<?php

use LDAP\Result;

if(isset($_POST['nombre'],$_POST['puntos'])) {
    
    function queryRecords($nombre,$puntos,$conexion) {
        $consulta = "INSERT INTO records (nombre, puntos)
                    VALUES ('$nombre' , '$puntos')";
        $sen = $conexion->prepare($consulta);//linea de preparacion
        $sen->execute();//linea de ejecucion
    }

    $server = "mysql:dbname=atrapaLaBola";
	$user = "root";
	$pw = "";
	$con = new PDO($server,$user,$pw,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
    
    queryRecords($_POST['nombre'],$_POST['puntos'],$con);
    echo "se ha insertado en el sql correctamente";
} else {
	echo "No has pasado los parámetros correctos. Debes pasar 'nombre' y 'puntos'";
}
?>