# Usamos una imagen base oficial de Node.js
FROM node:14
# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app
# Copiamos el archivo package.json al contenedor
COPY package*.json ./
# Instalamos las dependencias de la aplicación
RUN npm install
# Copiamos el código de la aplicación al contenedor
COPY . .
# Exponemos el puerto que la aplicación utilizará
EXPOSE 3000
# Definimos el comando para ejecutar la aplicación
CMD ["npm", "start"] 