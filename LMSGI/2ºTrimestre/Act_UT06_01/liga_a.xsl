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
            </tr>
            <tr>
                <td>
                    <xsl:value-of select="liga/equipo[2]/codigo"/>
                </td>
                <td>
                    <xsl:value-of select="liga/equipo[2]/nombre"/>
                </td>
                <td>
                    <xsl:value-of select="liga/equipo[2]/entrenador"/>
                </td>
                <td>
                    <xsl:value-of select="liga/equipo[2]/fundacion"/>
                </td>
                <td>
                    <xsl:value-of select="liga/equipo[2]/presupuesto"/>
                </td>
            </tr>
            <tr>
                <td>
                    <xsl:value-of select="liga/equipo[4]/codigo"/>
                </td>
                <td>
                    <xsl:value-of select="liga/equipo[4]/nombre"/>
                </td>
                <td>
                    <xsl:value-of select="liga/equipo[4]/entrenador"/>
                </td>
                <td>
                    <xsl:value-of select="liga/equipo[4]/fundacion"/>
                </td>
                <td>
                    <xsl:value-of select="liga/equipo[4]/presupuesto"/>
                </td> 
            </tr>
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>
