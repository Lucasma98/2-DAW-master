<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<table>
    </th></tr>
    <?php
	
    foreach( $mesas as $mesa )
    {
    ?>
    <tr>
        <td><?php echo $mesa->getMesa_id()?></td>
        <td><?php echo $mesa->getMesa()?> <a href="index.php?controlador=elecciones&accion=editarResultados&mesa=<?php echo $mesa->getMesa_id()?>">>></a></td>
        
    </tr>
    <?php
    }
    ?>
</table>
    <a href="index.php?controlador=elecciones&accion=salir">Salir</a>
</body>
</html>
