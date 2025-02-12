<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                </style>
            </head>
            <body>
                <h1>Índice de Libros</h1>
                <ul>
                    <xsl:for-each select="biblioteca/libro">
                        <xsl:variable name="autor" select="autor"/>
                            <li>
                                <a href="#{translate($autor, ' ', '_')}"><xsl:value-of select="$autor"/></a>
                            </li>
                    </xsl:for-each>
                </ul>

                <xsl:for-each select="biblioteca/libro">
                    <xsl:variable name="autor" select="autor"/>
                        <h2 id="{translate($autor, ' ', '_')}">
                            <xsl:value-of select="$autor"/>
                        </h2>
                    <h3><xsl:value-of select="titulo"/></h3>
                    <p><xsl:value-of select="resumen"/></p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>