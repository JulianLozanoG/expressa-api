# numbersTest
Api REST creada en nodeJS usando Express y Typescript, para aplicar al cargo de Desarrollador Full Stack, esta API responde a peticiones realizadas por método GET de HTTP.


# Publicar el proyecto en un respositorio gitLab.
GitLab es un repositorio pago el cual crea los poryectos de forma privada, solo podrán acceder al código los usuarios con permiso al repositorio.

Para publicar nuestro proyecto debemos tener instalado git en nuestro equipo personal, al tener el reposiorio GitLab solicitamos la llave ssh, copiamos la llave ssh en la consola git, luego GitLab nos proveera otra clave para gitbash, al ejecuta la llave gitbash copiamos el resultado que se muestra en consola y lo pegamos en GitLab así se generará una nueva llave ssh.

GitLab nos permitirá crear un nuevo proyecto, le damos el nombre al proyecto y asignamos las variables globales de nuestra cuenta git como el nombre de usuario y el email, si ya tenemos creado nuestro proyecto localmente, nos dirijimos por consola git hasta el proyecto, asignamos el incio de git con git iti, le indicamos que queremos realizar un git remote sobre la ruta que nos proveen en GitLab, agregamos nuestros direcotorios con git add ., realizamos el git commit -m "", ahora hacemos un git push al origin master lo que subira los cambios al repositorio GitLab.


# Despliegue.

Se deben tener dos ambientes, en los cuales se maneje el desarrollo y el ambiente productivo, para mantener las configuraciones de las aplicaciones separadas en los ambientes se debe crear una carpeta config, dentro de la carpeta se crea el archivo config declarando las constantes de forma global. Se puede hacer uso del objeto que siempre se encuentra corriendo el cual es process, podemos configurar la variable de puerto así app.set("port", process.env.PORT || 3000);. Este archivo se puede usar para la cadena de conexión, la semilla y deifinición de tokens.

Se realiza el depsliegue de la API en Heroku

# EJecución de scripts de pruebas unitarias

Se realizan pruebas unitarias por medio de Jasmine, 

# URL del sitio donde se publico la API 
