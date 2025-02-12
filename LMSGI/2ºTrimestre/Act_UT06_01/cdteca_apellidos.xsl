<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <html>
    <head>
        <style> h1 { font-size: 22px; } h2 { font-size: 18px; } </style>
    </head>
    <body>
        <h1>MI CDTECA VERSIÓN 1.(Se muestran los títulos de las canciones y duración en segundos)</h1>
        <xsl:for-each select="cdteca/cd">
            <h2>
                Album:
                <xsl:value-of select="titulo"/>
            </h2>
            <p>
                <strong>
                    de:
                    <xsl:value-of select="artista"/>
                </strong>
            </p>
            <ul>
                <xsl:for-each select="cancion[@tiempo > 200]">
                    <xsl:sort select="@tiempo" data-type="number" order="ascending"/>
                    <li>
                        <xsl:value-of select="text()"/>
                            -
                        <xsl:value-of select="floor(@tiempo div 60)"/>
                            m
                        <xsl:value-of select="@tiempo mod 60"/>
                            s
                    </li>
                </xsl:for-each>
            </ul>
        </xsl:for-each>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>