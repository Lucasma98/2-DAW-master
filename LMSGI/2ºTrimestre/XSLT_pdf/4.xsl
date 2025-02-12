<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text" encoding="UTF-8" />
    <xsl:template match="/">
        {
        "empleados": [
        <xsl:for-each select="empleados/empleado">
            {
                "nombre": "<xsl:value-of select="nombre"/>",
                "puesto": "<xsl:value-of select="puesto"/>"
            }<xsl:if test="position() != last()">,</xsl:if>
        </xsl:for-each>
        ]
        }
    </xsl:template>
</xsl:stylesheet>
