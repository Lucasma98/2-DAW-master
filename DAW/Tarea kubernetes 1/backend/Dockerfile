# Usamos una imagen oficial de Node.js
FROM node:16
# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copiamos el package.json y package-lock.json
COPY package*.json ./
# Instalamos las dependencias
RUN npm install
# Copiamos el resto del código fuente
COPY . .
# Exponemos el puerto 5000
EXPOSE 5000
# Comando para iniciar el servidor
CMD ["node", "server.js"]