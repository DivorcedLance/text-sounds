# Text Sounds

Text Sounds es una aplicación web construida con Django que permite a los usuarios convertir texto en audio. La aplicación utiliza la API de Voicerss para generar archivos de audio basados en la entrada del usuario. Los usuarios pueden seleccionar entre varias voces e idiomas para personalizar la salida de audio.

## Características

- Convertir texto a audio.
- Elegir entre varias voces e idiomas.
- Reproducir el archivo de audio generado.

## Instalación

1. Clonar el repositorio:

   ```shell
   git clone https://github.com/DivorcedLance/text-sounds.git
   cd text-sounds
   ```

2. Crear y activar un entorno virtual:

   ```shell
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Instalar las dependencias:

   ```shell
   pip install -r requirements.txt
   ```

4. Configurar las variables de entorno:

   - Crea un archivo `.env` en el directorio raíz del proyecto.
   - Agrega las siguientes variables al archivo `.env`:
     ```
     API_KEY=<Tu_API_Key_de_Voicerss>
     ```

5. Ejecutar las migraciones de la base de datos:

   ```shell
   python manage.py migrate
   ```

6. Iniciar el servidor de desarrollo:

   ```shell
   python manage.py runserver
   ```

7. Abre tu navegador web y visita `http://localhost:8000` para acceder a la aplicación.

## Configuración

Para utilizar la API de Voicerss, debes registrarte y obtener una API key en [Voicerss](https://www.voicerss.org/). Una vez que hayas obtenido la API key, establece su valor como el valor de la variable de entorno `API_KEY` en el archivo `.env`.

## Implementación

La aplicación se puede implementar en diferentes plataformas de alojamiento, como PythonAnywhere, Heroku o cualquier otra plataforma que admita aplicaciones Django. Asegúrate de configurar correctamente las variables de entorno en el entorno de producción.

## Licencia

Este proyecto se distribuye bajo la licencia [MIT](LICENSE).

## Agradecimientos

- [Django](https://www.djangoproject.com/) - El framework web utilizado.
- [Voicerss](https://www.voicerss.org/) - Proveedor de la API de texto a voz.

## Contacto

Si tienes alguna pregunta, no dudes en ponerte en contacto con el mantenedor del proyecto en divorcedlance@gmail.com.

Visita la página: [https://divorcedlance.pythonanywhere.com/](https://divorcedlance.pythonanywhere.com/)