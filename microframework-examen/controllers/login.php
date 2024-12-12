<?php
session_start();

// Array en el que se guardaran los errores
$errores = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $password = $_POST["password"];

    // Conexion a base de datos
    $pdo = new PDO('mysql:host=localhost;dbname=examen', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepara y realiza la consulta para comprobar usuario y contraseña
    $stmt = $pdo->prepare("SELECT * FROM elecciones_usuarios WHERE usuario = :usuario AND password = :password");
    $stmt->bindParam(':usuario', $usuario);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        // Login exitoso
        header("Location: /microframework-examen/views/mesasView.php");
        exit();
    } else {
        // Mensaje de error si el login falla
        $_SESSION['errores'] = ["usuario" => "Usuario o contraseña incorrectos"];
        header("Location: /microframework-examen");
        exit();
    }
}
?>
