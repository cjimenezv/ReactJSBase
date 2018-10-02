========================================================================================================================================
CREACION DE LA BASE DE UN PROYECTO REACTJS
========================================================================================================================================
Tomado de: https://reactjs.org/tutorial/tutorial.html

1. Para crear un proyecto react sobre cualquier estación, lo primero es sobre esta estación ejecutar el siguiente comando:
    npm install -g create-react-app
	
2. Ejecute el siguiente comando:
	create-react-app my-app
	Donde my-app corresponde al nombre de la aplicacion que ud quiera crear
3. Now if you run npm start in the project folder and open http://localhost:3000 in the browser, you should see an empty tic-tac-toe field.
========================================================================================================================================
CREACION DE LA BASE DE BOOTSTRAP
========================================================================================================================================
Tomado de: https://react-bootstrap.github.io/getting-started/introduction/

1. npm install --save react-bootstrap

2. Para poder navegar se debe instalar la libreria react-router-dom. Ejecutar comando: npm install --save react-router-dom

3. Copiar las lineas de referencia tal como lo indica el manual en la pagina index.html

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

4. El archivo /src/app.js debe ser renombrado a app.jsx y reiniciar el server

========================================================================================================================================
CREACION DE LA BASE PARA MANEJAR MVC CON REDUX QUE IMPLEMENTA EL PATRON MVC ATRAVES DE FLUX
========================================================================================================================================
1. Instalar redux: npm install --save redux

========================================================================================================================================
CODE - COMANDOS
========================================================================================================================================
1. rcc: crea un componente readjs

========================================================================================================================================
TUTORIALES CHAT
========================================================================================================================================
1. Construir un chat: https://auth0.com/blog/build-a-chat-app-with-react/

=======================================================================================================================================
PUSHER   https://pusher.com/
=======================================================================================================================================
Es una herramienta para crear servicios en la tecnologia que ud desee.
- app_id = "576053"
- key = "a17d3d27330a791d9db6"
- secret = "a8c50402fb0a909d87ff"
- cluster = "us2"- 

========================================================================================================================================
GOOGLE CLOUD - TUTORIALES DESPLEGAR REACTJS APP 
========================================================================================================================================
https://cloud.google.com/nodejs/getting-started/hello-world
https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml
Comandos:
 - gcloud init --> con este comando configuro el proyecto.
 - gcloud app deploy --> con este comendo despliego la aplicación

========================================================================================================================================
autho - TUTORIALES AUTENTICACION REACTJS APP 
========================================================================================================================================
 https://auth0.com/docs/quickstart/spa/react

========================================================================================================================================
DOLIBARR 
========================================================================================================================================
- Para ingresar como root en la consola SSH dar el comando: sudo su -

- Documentación en bitnami: 
	- https://docs.bitnami.com/google/faq/get-started/find-credentials/
	- https://bitnami.com/stack/dolibarr/cloud
	-https://docs.bitnami.com/google/apps/dolibarr/configuration/install-plugins/

- Pasos para instalar un paquede desde dolistore:
	- Paso 1: Buscar el paquete que responde a su necesidad (por ejemplo en el sitio web https://www.dolistore.com/)
	- Paso 2: Descargue el paquete (por ejemplo desde el sitio web oficial https://www.dolistore.com/).
	- Paso 3: Para instalar un módulo externo, descomprima el archivo en el directorio del servidor dedicado a los módulos: 			  /opt/bitnami/apps/dolibarr/htdocs/custom
	- Paso 4: La instalación del módulo ha concluido. Sin embargo, debe habilitar y configurar el módulo en su aplicación, vaya a la 		   página para configurar los módulos: .

- Para instalar el ambiente de desarrollo:
	- https://wiki.dolibarr.org/index.php/Environment_and_development_tools
	
- Para instalarlo localmente:
	- Descargue una versión estable, en mi caso descargue la versión del 8.0.1 que es la misma que tengo en la nube.
	- Se descomprime.
	- Desde la ventana del WAMPSERVER, se selecciona el apache y ahi da la opcion para crear un alias que debe apuntar a donde descomprimiste el dolibarr.
	- Luego seguir las instrucciones que estan en el archivo README.md
	- Navegar a http://localhost/dolibarr801/install/ para realizar la primera instalación del dolibarr.
- Para la aplicación movil:
	- descargar mydoli
	- Cambiar el parametro: $dolibarr_nocsrfcheck='1',  en el archivo conf.php en /opt/bitnami/apps/dolibarr/htdocs/conf#
	- Descargar la app del store

