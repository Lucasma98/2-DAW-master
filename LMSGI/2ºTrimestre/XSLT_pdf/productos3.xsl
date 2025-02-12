<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Lista de Productos</title>
                <style>
                      table { border-collapse: collapse; width: 50%; margin: 20px auto; }
                    th, td { border: 1px solid black; padding: 10px; }
                    th { background-color: green; color: white; }
                    .high-price { background-color: red; color: white; }
                </style>
            </head>
            <body>
                <h2 style="text-align: center;">Lista de Productos</h2>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                    <xsl:for-each select="productos/producto">
                        <tr>
                            <xsl:attribute name="class">
                                <xsl:if test="precio &gt; 100">high-price</xsl:if>
                            </xsl:attribute>
                            <td><xsl:value-of select="nombre"/></td>
                            <td><xsl:value-of select="precio"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
