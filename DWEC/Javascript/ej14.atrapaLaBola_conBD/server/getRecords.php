<?php

use LDAP\Result;

if(isset($_GET['topn'])) {
 
    class record{ 
        var $nombre;
        var $puntos;
    }
    
    function queryRecords($limite,$conexion) {//cogerlos de mysql
        $consulta = "SELECT nombre, puntos 
                    FROM records 
                    ORDER BY puntos DESC 
                    LIMIT $limite";
        $sen = $conexion->prepare($consulta);//linea de preparacion
        $sen->execute();//linea de ejecucion
        $result = [];
        while($row = $sen->fetch(PDO::FETCH_NAMED)){ //te traes los datos
            $rec = new record();
            $rec->nombre = $row['nombre'];
            $rec->puntos = $row['puntos'];
            $result[] = $rec;
        }
        return $result;
    }

    $server = "mysql:dbname=atrapaLaBola";
	$user = "root";
	$pw = "";
	$con = new PDO($server,$user,$pw,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
    
    echo json_encode( queryRecords($_GET['topn'],$con) );
        /*"[
        
        
        ] "*/
} else {
	echo "No has pasado los parámetros correctos. Debes pasar 'topn'";
}
?>