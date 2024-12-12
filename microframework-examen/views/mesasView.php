<?php
session_start();

// Conexion a base de datos
$pdo = new PDO('mysql:host=localhost;dbname=examen', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Consulta las mesas electorales
$stmt = $pdo->prepare("SELECT * FROM elecciones_mesas");
$stmt->execute();
$mesas = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!-- HTML para mostrar la lista de mesas -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Mesas Electorales</title>
</head>
<body>

<h1>Mesas</h1>

<p>Numero de mesa</p>
<ul>
    <?php foreach ($mesas as $mesa): ?>
        <li>
            <?php echo $mesa['mesa']; ?> 
            <a href="formularioView.php?mesa_id=<?php echo $mesa['mesa_id']; ?>"> >> </a>
        </li>
    <?php endforeach; ?>
</ul>

<a href="/microframework-examen/controllers/logout.php">Salir</a>

</body>
</html>
