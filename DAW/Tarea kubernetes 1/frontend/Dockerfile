# Usamos una imagen oficial de Node.js para construir la app
FROM node:16 AS build
# Establecemos el directorio de trabajo
WORKDIR /app
# Copiamos el package.json y package-lock.json
COPY package*.json ./
# Instalamos las dependencias
RUN npm install
# Copiamos el resto del código fuente
COPY . .
# Construimos la aplicación para producción
RUN npm run build
# Usamos una imagen de Nginx para servir la aplicación
FROM nginx:alpine
# Copiamos los archivos construidos a la carpeta de Nginx
COPY --from=build /app/build /usr/share/nginx/html
# Exponemos el puerto 80
EXPOSE 80
# Iniciamos Nginx
CMD ["nginx", "-g", "daemon off;"]