<?php
class ResultadosModel
{
    protected $db;
 
    private $voto_id;
    private $mesa_id;
    private $sindicato_id;
    private $votos;
    
    public function __construct()
    {
        //Traemos la única instancia de PDO
        $this->db = SPDO::singleton();
    }
 
    public function getVoto_id()
    {
        return $this->voto_id;
    }
    public function setVoto_id( $codigo )
    {
        return $this->voto_id = $codigo;
    }

    public function getMesa_id()
    {
        return $this->mesa_id;
    }
    public function setMesa_id( $codigo )
    {
        return $this->mesa_id = $codigo;
    }
    
    public function getSindicato_id()
    {
        return $this->sindicato_id;
    }
    public function setSindicato_id( $codigo )
    {
        return $this->sindicato_id = $codigo;
    }

    public function getVotos()
    {
        return $this->votos;
    }
    public function setVotos( $item )
    {
        return $this->votos = $item;
    }
    
    public function getAll()
    {      
        $gsent = $this->db->prepare('SELECT * FROM elecciones_votos');
        $gsent->execute();

        $resultado = $gsent->fetchAll(PDO::FETCH_CLASS, "ResultadosModel");
        return $resultado;
    }

    public function editarResultados($nombre_mesa,$nombre_sindicato,$votos,$codigo)
    {
        $gsent_update = $this->db->prepare('UPDATE elecciones_votos ev 
                                            JOIN elecciones_mesas em ON ev.mesa_id = em.mesa_id 
                                            JOIN elecciones_sindicatos es ON ev.sindicato_id = es.sindicato_id 
                                            SET em.mesa = ?, es.sindicato = ?, ev.votos = ? 
                                            WHERE ev.mesa_id = ?');
        
        $gsent_update->bindParam(1, $nombre_mesa);
        $gsent_update->bindParam(2, $nombre_sindicato);
        $gsent_update->bindParam(3, $votos);
        $gsent_update->bindParam(4, $codigo);

        if ($gsent_update->execute())
            return "Los resultados se han actualizado correctamente.";

    }

    public function save()
    {
		
        if( ! isset( $this->reserva_id ) )
        {
			$consulta = $this->db->prepare('INSERT INTO `gim_reservas` ( `clase_id`, `usuario_id`) VALUES ( ?,?)');
            
            $consulta->bindParam( 1,  $this->clase_id );
            $consulta->bindParam( 2,  $this->usuario_id );
            $resultado = $consulta->execute();
            $this->reserva_id = $this->db->lastInsertId();
        }
        else
        {
            $consulta = $this->db->prepare('UPDATE `gim_reservas` SET `clase_id`=?,`usuario_id`=? WHERE reserva_id =?');
            
            $consulta->bindParam( 1,  $this->clase_id );
            $consulta->bindParam( 2,  $this->usuario_id );
            $consulta->bindParam( 3,  $this->reserva_id  );
            $resultado = $consulta->execute();
        }
        
        return $resultado;
    }

}
?>