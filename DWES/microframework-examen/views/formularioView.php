<?php
session_start();
$errores = [];
$votos = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mesa_id = $_POST["mesa_id"];
    
    // Obtener los votos de los sindicatos
    $votos = [
        "ugt" => $_POST["ugt"],
        "ccoo" => $_POST["ccoo"],
        "csif" => $_POST["csif"],
        "anpe" => $_POST["anpe"]
    ];

    // Comprobación de errores en los votos
    foreach ($votos as $key => $voto) {
        // Campo vacío
        if (empty($voto)) {
            $errores[$key] = "El campo " . strtoupper($key) . " es obligatorio.";
        }
        // Campo con letras
        elseif (!is_numeric($voto)) {
            $errores[$key] = "El campo " . strtoupper($key) . " debe ser un número.";
        }
        // Campo con numero negativo
        elseif ($voto < 0) {
            $errores[$key] = "El campo " . strtoupper($key) . " no puede ser negativo.";
        }
    }

    if (empty($errores)) {
        try {
            // Si no hay errores, guardar los votos en la base de datos
            $pdo = new PDO('mysql:host=localhost;dbname=examen', 'root', '');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            foreach ($votos as $sindicato => $voto) {
                // Buscar el ID del sindicato
                $stmt = $pdo->prepare("SELECT sindicato_id FROM elecciones_sindicatos WHERE sindicato = :sindicato");
                $stmt->bindParam(':sindicato', ucfirst($sindicato));
                $stmt->execute();
                $sindicato_id = $stmt->fetchColumn();

                // Actualizar los votos en la tabla elecciones_votos
                $stmt = $pdo->prepare("UPDATE elecciones_votos SET votos = :votos WHERE mesa_id = :mesa_id AND sindicato_id = :sindicato_id");
                $stmt->bindParam(':votos', $voto);
                $stmt->bindParam(':mesa_id', $mesa_id);
                $stmt->bindParam(':sindicato_id', $sindicato_id);
                $stmt->execute();
            }

            // Redirigir a la lista de mesas
            header("Location: mesasView.php");
           
            exit();
            // Mensaje de error al guardar los votos
        } catch (PDOException $e) {
            $errores['db'] = "Error al guardar los votos: " . $e->getMessage();
        }
    }
} else {
    $mesa_id = $_GET['mesa_id'];
}

// Obtener los sindicatos
try {
    $pdo = new PDO('mysql:host=localhost;dbname=examen', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->prepare("SELECT * FROM elecciones_sindicatos");
    $stmt->execute();
    $sindicatos = $stmt->fetchAll(PDO::FETCH_ASSOC);
} 
// Mensaje de error al obtener los sindicatos
catch (PDOException $e) {
    $errores['db'] = "Error al obtener los sindicatos: " . $e->getMessage();
}

?>
<!-- HTML del formulario -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Formulario de Votos</title>
</head>
<body>

<h1>Formulario de Votos - Mesa <?php echo $mesa_id; ?></h1>

<?php if (isset($errores['db'])): ?>
    <div style="color:red;"><?php echo $errores['db']; ?></div>
<?php endif; ?>

<form method="post" action="formularioView.php">
    <input type="hidden" name="mesa_id" value="<?php echo $mesa_id; ?>">

    <?php foreach ($sindicatos as $sindicato): ?>
        <label for="<?php echo strtolower($sindicato['sindicato']); ?>"><?php echo $sindicato['sindicato']; ?></label>
        <input type="text" name="<?php echo strtolower($sindicato['sindicato']); ?>" id="<?php echo strtolower($sindicato['sindicato']); ?>" 
            value="<?php echo isset($votos[strtolower($sindicato['sindicato'])]) ? $votos[strtolower($sindicato['sindicato'])] : ''; ?>">
        <?php echo isset($errores[strtolower($sindicato['sindicato'])]) ? "<span style='color:red'>" . $errores[strtolower($sindicato['sindicato'])] . "</span>" : ""; ?>
        </br>
    <?php endforeach; ?>

    <input type="submit" value="Enviar Votos">
</form>

<a href="mesasView.php">Volver a Mesas</a>

</body>
</html>
