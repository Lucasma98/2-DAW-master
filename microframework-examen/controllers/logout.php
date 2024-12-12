<?php
session_start();    // Iniciar la sesión
session_destroy();  // Cierra la sesión
header("Location: /microframework-examen"); // Redirige a la página de login
exit();
?>
