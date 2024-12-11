<?php
class MesasModel
{
    protected $db;
 
    private $mesa_id;
    private $mesa;
    
    public function __construct()
    {
        //Traemos la única instancia de PDO
        $this->db = SPDO::singleton();
    }
 
    public function getMesa_id()
    {
        return $this->mesa_id;
    }
    public function setMesa_id( $codigo )
    {
        return $this->mesa_id = $codigo;
    }
    
    public function getMesa()
    {
        return $this->mesa;
    }
    public function setMesa( $item )
    {
        return $this->mesa = $item;
    }
    
    public function getAll()
    {      
        $gsent = $this->db->prepare('SELECT * FROM elecciones_mesas');
        $gsent->execute();

        $resultado = $gsent->fetchAll(PDO::FETCH_CLASS, "MesasModel");
        return $resultado;
    }
}
?>