<?php
class EleccionesController
{
    private $view;
    function __construct()
    {
        $this->view = new View();
    }
 
    public function entrada()
	{
		require 'models/UsuarioModel.php';


		if (isset($_SESSION['logueado']))
			session_unset();

		$errores = array();
		if (isset($_REQUEST["submit"]) && $_REQUEST["submit"] == "Aceptar") {



			if (empty($_REQUEST["usuario"])) {
				$errores['usuario'] = "* Usuario: Error";
			}
			if (empty($_REQUEST["password"])) {
				$errores['password'] = "* Password: Error";
			}

			if (empty($errores)) {
				$item = new UsuarioModel();
				$usuario = $item->getByCredenciales($_REQUEST["usuario"], $_REQUEST["password"]);
				if ($usuario) {
					$_SESSION["logueado"] = true;
					$_SESSION["usuario_id"] = $usuario->getUsuario_id();

					header("Location: index.php?controlador=elecciones&accion=elecciones_mesas");
				} else {
					$errores["Credenciales"] = "* Error Credenciales";
				}
			}
		}

		$this->view->show("entradaView.php", array("errores" => $errores));
	}

    public function salir()
    {
        // Iniciar la sesión
        session_start();

        // Destruir todas las variables de sesión
        session_unset();

        // Destruir la sesión
        session_destroy();

        header("Location: index.php?controlador=elecciones&accion=entrada");
        exit;
    }

 
    public function elecciones_mesas()
    {

        require 'models/MesasModel.php';
        $mesas = new MesasModel();

        $listado = $mesas->getAll();

        $this->view->show("elecciones_mesas.php", ['mesas'=>$listado]);
    }
    
    public function editarResultados()
    {
        require 'models/ResultadosModel.php';
 
        $votos = new ResultadosModel();
        $listado = $votos->editarResultados($_GET['mesa']);

        if( $listado != false )
                $this->view->show("editarResultadosView.php", ['resultados'=>$listado]);
        else 
                $this->view->show("errorView.php", array( "error" =>"No existe codigo", "enlace" => "index.php?controlador=item&action=listar"));
    }
 
    public function agregar()
    {
        echo 'Aquí incluiremos nuestro formulario para insertar items';
    }
}
?>