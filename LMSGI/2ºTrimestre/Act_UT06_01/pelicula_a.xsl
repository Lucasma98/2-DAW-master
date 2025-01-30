<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
    <head>
        <style>
            table{
                border-collapse: collapse;
            }
            th,td{
                border: 1px solid black;
            }
            th{
                background-color: green;
            }
        </style>
    </head>
    <body>
        <h1>Datos de la pelicula: <xsl:value-of select="pelicula/@titulo" /></h1>
        <table>
            <tr>
                <th>Fecha de estreno</th>
                <th>Duracion</th>
            </tr>
            <tr>
                <td><xsl:value-of select="pelicula/@estreno" /></td>
                <td><xsl:value-of select="pelicula/@minutos" /></td>
            </tr>
        </table> 
        <p>Realizado por: Lucas Martinez Zambudio</p>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>
