DROP TABLE IF EXISTS elecciones_votos;
DROP TABLE IF EXISTS elecciones_sindicatos;
DROP TABLE IF EXISTS elecciones_mesas;
DROP TABLE IF EXISTS elecciones_usuarios;
DROP TABLE IF EXISTS elecciones_parametros;






create table elecciones_usuarios(
usuario_id integer primary key AUTO_INCREMENT,
usuario varchar( 100 ),
password varchar( 100 )
);

create table elecciones_parametros(
parametro_id integer primary key AUTO_INCREMENT,
clave varchar(20),
parametro varchar( 100 ),
valor varchar( 100 )
);



create table elecciones_sindicatos(
sindicato_id integer primary key AUTO_INCREMENT,
sindicato varchar( 100 ),
orden integer
);


create table elecciones_mesas(
mesa_id integer primary key AUTO_INCREMENT,
mesa varchar( 100 )
);

create table elecciones_votos(
voto_id integer primary key,
mesa_id integer,
sindicato_id integer,
votos integer,
foreign key ( mesa_id) references elecciones_mesas ( mesa_id),
foreign key ( sindicato_id) references elecciones_sindicatos ( sindicato_id)
);




insert into elecciones_sindicatos VALUES ( 1, 'UGT',1 );
insert into elecciones_sindicatos VALUES ( 2, 'CCOO',2 );
insert into elecciones_sindicatos VALUES ( 3, 'CSIF',3 );
insert into elecciones_sindicatos VALUES ( 4, 'ANPE',4 );


INSERT INTO elecciones_mesas VALUES ( 1, 'IES JOSE PLANES' );
INSERT INTO elecciones_mesas VALUES ( 2, 'IES ALFONSO X' );

INSERT INTO elecciones_votos VALUES ( 1,1, 1 , 0 );
INSERT INTO elecciones_votos VALUES ( 2, 1, 2 , 0 );
INSERT INTO elecciones_votos VALUES ( 3,1, 3 , 0 );
INSERT INTO elecciones_votos VALUES ( 4,1, 4 , 0 );

INSERT INTO elecciones_votos VALUES ( 5,2, 1 , 0 );
INSERT INTO elecciones_votos VALUES ( 6, 2, 2 , 0 );
INSERT INTO elecciones_votos VALUES ( 7,2, 3 , 0 );
INSERT INTO elecciones_votos VALUES ( 8,2, 4 , 0 );




insert into elecciones_usuarios values ( 1, 'fernando', 'fernando');
insert into elecciones_usuarios values ( 2, 'antonio', 'antonio');
