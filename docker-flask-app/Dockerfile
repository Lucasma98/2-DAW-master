# Usar una imagen base de Python
FROM python:3.9
# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copiar los archivos necesarios
COPY requirements.txt requirements.txt
COPY app.py app.py
# Instalar las dependencias
RUN pip install -r requirements.txt
# Exponer el puerto en el que correrá la aplicación
EXPOSE 5000
# Comando para ejecutar la aplicación
CMD ["python", "app.py"]