<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                img{
                    width: 300px;
                    height: 150px;
                }
                h1 { text-align: center; color: red; }
                </style>
            </head>
            <body>
               <header>
                   <h1>Restaurante</h1>
                   <img src="https://imgs.search.brave.com/J7hPMjkz3rQpszPFe92HeTe9MUUqtYjeoERzWsHyzhk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQyOTk3N2E2NTE1/YjFlMGFkNzVhZGUu/cG5n"></img>
               </header>
                <ul>
                      <xsl:for-each select="menu/categoria">
                        <li class="categoria">
                            <xsl:value-of select="@nombre"/>
                            <ul>
                                <xsl:for-each select="plato">
                                    <li class="plato">
                                        <xsl:value-of select="."/> - <xsl:value-of select="@precio"/>€
                                    </li>
                                </xsl:for-each>
                            </ul>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>