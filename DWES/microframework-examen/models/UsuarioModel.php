<?php
class UsuarioModel
{
    protected $db;
 
    private $usuario_id;
    private $usuario;
	private $password;
    
    public function __construct()
    {
        //Traemos la única instancia de PDO
        $this->db = SPDO::singleton();
    }
	public function getUsuario_id()
    {
        //Traemos la única instancia de PDO
        return $this->usuario_id;
    }
    
    public function getByCredenciales( $usuario, $password )
    {
       
        $gsent = $this->db->prepare('SELECT * FROM elecciones_usuarios where usuario = ? and password = ?');
        $gsent->bindParam( 1, $usuario ); 
		$gsent->bindParam( 2, $password );
        $gsent->execute();
 
        $gsent->setFetchMode(PDO::FETCH_CLASS, "UsuarioModel");
        $resultado = $gsent->fetch();
        
        
        return $resultado;
    }
}
?>