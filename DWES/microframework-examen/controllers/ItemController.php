<?php
class ItemController
{
    function __construct()
    {
        //Creamos una instancia de nuestro mini motor de plantillas
        $this->view = new View();
    }
 
 
    public function index()
    {
        require 'models/ItemModel.php';
        
        $items = new ItemModel();
 
        $listado = $items->getAll();
 
        $data['items'] = $listado;
        

        $this->view->show("listarView.php", array(  'items' => $listado)  );
    }
 
    public function listar()
    {
       require 'models/ItemModel.php';

        $items = new ItemModel();
        $listado = $items->getAll();
        $data['items'] = $listado;
 
        $this->view->show("listarView.php", $data);
    }
    
    public function editar()
    {
        require 'models/ItemModel.php';
 
        $items = new ItemModel();
        $listado = $items->getById( $_GET[ 'codigo' ] );
        $data['item'] = $listado;
        
        if( $listado != false )
                $this->view->show("listarView2.php", $data);
        else 
                $this->view->show("errorView.php", array( "error" =>"No existe codigo", "enlace" => "index.php?controlador=item&action=listar"));
    }
 
    public function agregar()
    {
        echo 'Aquí incluiremos nuestro formulario para insertar items';
    }
}
?>