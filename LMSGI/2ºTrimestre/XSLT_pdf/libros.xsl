<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Lista de Libros</title>
                <style>
                    body { margin: 20px; }
                    h2 { text-align: center; }
                    ul { list-style-type: none; }
                    strong { color: blue; }
                </style>
            </head>
            <body>
                <h2>Lista de Libros Ordenados por Título</h2>
                <ul>
                    <xsl:for-each select="biblioteca/libro">
                        <xsl:sort select="titulo"/>
                        <li>
                            <strong><xsl:value-of select="titulo"/></strong> - 
                            <xsl:value-of select="autor"/>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
