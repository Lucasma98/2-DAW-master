<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <html>
    <head>
        <title>Clasificación de la Liga</title>
        <style> .champions { background-color: green; color: white; font-weight: bold; } .descenso { background-color: red; color: white; font-weight: bold; } table { width: 50%; border-collapse: collapse; margin-top: 20px; } th, td { border: 1px solid black; padding: 8px; text-align: left; } </style>
    </head>
    <body>
        <h1>Clasificación de la Liga</h1>
        <table border="1">
        <tr>
            <th>Posición</th>
            <th>Nombre</th>
            <th>Goles a favor</th>
            <th>Goles en contra</th>
            <th>Puntos</th>
            <th>Símbolo</th>
        </tr>
        <xsl:for-each select="equipos/equipo">
            <xsl:sort select="puntos" data-type="number" order="descending"/>
            <xsl:sort select="golesafavor" data-type="number" order="descending"/>
            <xsl:sort select="golescontra" data-type="number" order="ascending"/>
            <tr>
                <td>
                    <xsl:value-of select="position()"/>
                </td>
                <td>
                    <xsl:value-of select="nombre"/>
                </td>
                <td>
                    <xsl:value-of select="golesafavor"/>
                </td>
                <td>
                    <xsl:value-of select="golescontra"/>
                </td>
                <xsl:choose>
                    <xsl:when test="position() <= 4">
                        <td class="champions">
                            <xsl:value-of select="puntos"/>
                        </td>
                    </xsl:when>
                    <xsl:when test="position() >= last() - 2">
                        <td class="descenso">
                            <xsl:value-of select="puntos"/>
                        </td>
                    </xsl:when>
                    <xsl:otherwise>
                        <td>
                            <xsl:value-of select="puntos"/>
                        </td>
                    </xsl:otherwise>
                </xsl:choose>
                <td>
                    <xsl:choose>
                    <xsl:when test="position() <= 3">✅</xsl:when>
                    <xsl:when test="position() >= last() - 2">❌</xsl:when>
                    <xsl:otherwise>–</xsl:otherwise>
                    </xsl:choose>
                </td>
            </tr>
        </xsl:for-each>
        </table>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>