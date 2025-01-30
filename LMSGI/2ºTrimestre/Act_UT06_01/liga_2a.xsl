<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
    <head>
        <style>
            table{
                border-collapse: collapse;
                margin: 15px;
            }
            th,td{
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        
        <table>
            <tr>
                <th>Equipo</th>
                <th>Nombre</th>
                <th>Entrenador</th>
                <th>Fundacion</th>
                <th>Presupuesto</th>
                <th>Puntos</th>
            </tr>
            <xsl:for-each select="liga/equipo">
            <xsl:sort select="puntos" />
            <tr>
                <td>
                    <xsl:value-of select="codigo"/>
                </td>
                <td>
                    <xsl:value-of select="nombre"/>
                </td>
                <td>
                    <xsl:value-of select="entrenador"/>
                </td>
                <td>
                    <xsl:value-of select="fundacion"/>
                </td>
                <td>
                    <xsl:value-of select="presupuesto"/>
                </td>
                <td>
                    <xsl:value-of select="puntos"/>
                </td>
            </tr>
            </xsl:for-each>
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>
