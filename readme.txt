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
GOOGLE CLOUD 
========================================================================================================================================
TUTORIALES DESPLEGAR REACTJS APP:
https://cloud.google.com/nodejs/getting-started/hello-world
https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml
Comandos:
 - gcloud init --> con este comando configuro el proyecto.
 - gcloud app deploy --> con este comendo despliego la aplicación

PASOS PARA DESPLEGAR UN MICROSERVICIO:
1. Desde la consola web: cree una instancia, dentro de un compute engine. No olvide seleccionar el sistema operativo.
2. Para actualizar el sistema operativo, ejecute el siguiente comando: sudo apt-get update
3. Para instalar java use el siguiente comando: sudo apt-get install git maven openjdk-8-jdk -y
4. Para subir el archivo jar, desde el local hasta la nube use el siguiente comando desde gcloud:
	- gcloud compute scp C:\localpath\demo-restservice-0.0.1-SNAPSHOT.jar user@ejemplorest:/home/user
2. Cree las reglas de firewall tanto de entrada como de salida habilitando el puerto 8080.

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
- Para instalar la app de restaurantes: descargar takepos

========================================================================================================================================
POSTGRESQL versión 9.6 
========================================================================================================================================
-usuario: posgres
-clave: vale1998
-nombre de la instancia: dblaura
-Herramienta de administración: pgpadmin --> https://www.pgadmin.org/download/
-Para instalar poossgresql en la nube de google toaca seguir este manual: https://cloud.google.com/community/tutorials/setting-up-postgres. Toca seguir uno a uno los pasos y funciona perfectamente.
- Para conectarme desde la consola unix a la bd: sudo -u postgres psql postgres
- Para reiniciar el servicio: sudo service postgresql restart
- Para habilitar una ip externa ir al archivo: sudo nano ../../etc/postgresql/9.3/main/pg_hba.conf
- Para cambiar el puerto ir al archivo:  sudo nano ../../etc/postgresql/9.3/main/postgresql.conf
 - Para detalles de conexión en linux ver: http://suite.opengeo.org/docs/latest/dataadmin/pgGettingStarted/firstconnect.html
 - Configurar postgresQl desde Google: https://cloud.google.com/community/tutorials/setting-up-postgres

========================================================================================================================================
SPRING.IO 
========================================================================================================================================
- Comando para ejecutar servidor en ambiente de desarrollo: mvnw spring-boot:run
- Comando para crear el jar: mvnw clean package
- Comando para ejecutar el jar, creado localmente: java -jar target/nombredeljarfile.jar

Para seleccionar el archivo properties adecuado:
- Existen 3 archivos de propiedades segun el ambiente:
	- application-dev.properties
	- application-prod.properties and 
	- application.properties
- Para saber con cual de los tres trabajar usar la variable: spring.profiles.active=dev
- Ejemplo del comendo: java -jar -Dspring.profiles.active=dev myproject.jar

Paquete seguridad por defecto:
 - Por defecto cuando incluyo el modulo de seguridad en spring, este es configurado en BASIC
 - Usuario --> user y password: el que muestre en la consola

Pendientes por estudiar
 - Security:https://docs.spring.io/spring-boot/docs/1.4.0.RELEASE/reference/htmlsingle/#boot-features-security
 - Example security: https://github.com/spring-projects/spring-boot/tree/master/spring-boot-samples/spring-boot-sample-secure
====================================================================================================================================
CUENTA GOOGLE: awscjimenezv@gmail.com
====================================================================================================================================
PASOS PARA EL DESPLIEGUE EN LA NUBE.
REACT:
- Cambiar el URL de retorno del Callback

SPRING:
- Genere el JAR ejecutable con el comando: mvnw clean package. Este crea el jar respectivo.
- Cargue el archivo. Para ello desde la ventana de comandos del "Compute Engine", encontrara arriba a la derecha de la ventana las diferentes opciones, una de ellas la de "Subir archivo". De clic alli, busque el JAR generado y dale cargar. Este queda en la ruta: "/home/awscjimenezv"
- Suba el servicio con el comando: sudo java -jar -Dspring.profiles.active=pro erplaura-1.0.0.jar; Note que como opcion se envia el archivo que contiene la configuración para producción.
- Abra el puerto 8080 por linea de comandos.
COMANDOS IMPORTANTES UNIX
=================================================================================================================
RAR:
- Instalar:
	sudo apt-get update
	sudo apt-get install rar unrar
- Para descomprimir con winrar: Unrar x (nombre_archivo).rar
=================================================================================================================
DESPLIEGUE DE COMPONENTES BACK SPRING.IO
=================================================================================================================
- Localmente se encuentra en: 
	C:\Carlos\WS-Example-Spring\erplaura
- Para ejecutar localmente ejecute comando: 
	- 'mvnw spring-boot:run'
	- tenga en cuenta pararse sobre la ruta del proyecto
	- El servicio se levanta sobre puerto '8080'
- Para probarlo localmente utilice: 'Postman'
	- Ejemplo para invocar servicio: http://localhost:8080/getEstadisticasTercero
- Para generar el ejecutable usa el comando: 'mvnw clean package'
- Este genera un jar el cual puedes buscar en una carpeta llamada 'target'
	- ejemplo: C:\Carlos\WS-Example-Spring\erplaura\target\erplaura-1.0.0.jar
	- Este ejecutable es el que debes subir a la nube.
	- Comando para ejecutar el jar, creado localmente: java -jar C:\Carlos\WS-Example-Spring\erplaura\target\erplaura-1.0.0.jar
- Para feninir que ip, pueden alcanzar el servicio, esto se define en el código así:
	- Clase: RestControladorPrincipal.java
	- Variable static final String origen = "*";
		- origen = "*" => Permite que todas las ip queden habilitadas.
		- origen = "localhost:3000" => Solo responde a esta IP, para producción pensar en esta opción.
	
- Para la nube:
	1. Recuerde que se debe crear en google cloud una instancia por la opcion 'Compute Engine'
	2. La instancia creada te da una ip publica y una ip privada.
	3. Instala la instancia con Sistema Operativo Ubuntu.
	4. Debes actualizar el sistema operativo, ejecute el siguiente comando: 'sudo apt-get update'
	5. Abre la instancia con SSH, cuya opcion aparece al frente del nombre de la instancia en la pantalla de la consola.
	7. Una vez se abra, puedes iniciar sesion con super usuario usa comando: 'sudo su -'; esto facilita el trabajo
	8. Debes instalar java, usa el comando: 'sudo apt-get install git maven openjdk-8-jdk -y'
	9. Para subir el archivo jar, desde el local hasta la nube tienes dos opciones: 
		- use el siguiente comando: 'gcloud compute scp C:\localpath\erplaura-1.0.0.jar awscjimenezv@ipostgreslau:/home/awscjimenezv'
				- Tenga en cuenta q 'awscjimenezv' corresponde al nombre del usuario y 'ipostgreslau' corresponde al nombre de la instancia.
		- Ó utilice desde la consola del SSH, la opcion de subir el archivo, la cual te ho ubica en /home/$nomobreusuario
	10. Para ejecutar el jar, use la opción: 'java -jar -Dspring.profiles.active=pro erplaura-1.0.0.jar'
		- Tenga en cuenta q la opcion: '-Dspring.profiles.active=pro', indica que los parametros a usar son los que estan en el archivo de propiedades asi:
				- Por defecto, si no se usa parametros, toma el archivo: 'application.properties'
				- Si uso 'dev', toma el archivo: application-dev.properties => Parametros para ambiente de desarrollo
				- Si uso 'pro', toma el archivo: application-pro.properties => Parametros para ambiente de produccion
	11. Desde la consola de Google Cloud, defina las reglas de firewall tanto de entrada como de salida habilitando el puerto 8080.
	
	
=================================================================================================================
DESPLIEGUE DE COMPONENTES FRONT REACTJS
=================================================================================================================
- Localmente se encuentra en: 
	C:\Carlos\react\lauraerp
- Para ejecutar localmente ejecute comando: 
	- 'npm start'
	- tenga en cuenta pararse sobre la ruta del proyecto
	- El servicio se levanta sobre puerto '3000'
- Para probarlo localmente utilice cualquier browser
	- Ejemplo para invocar servicio: http://localhost:3000

Para la nube usando 'Compute Engine'
- Abra la instancia usando SSH.
- Instale npm, aunque creo q por defecto ya viene instalado en la instancia.
- Sobre la carpeta del proyecto 'C:\Carlos\react\lauraerp' localmente genere un rar: 'lauraerp.rar' 
- Tenga en cuenta de mover temporalmente la carpeta 'node_modules' ya que alli se encuentran todas las librerias.
- Suba el rar generado.
- Muevalo de: '/home/awscjimenezv' a /home/awscjimenezv/react
- Descomprimalo usando el comando: 'Unrar x lauraerp.rar'
- Parese en la carpeta descomprimida e instale el aplicativo usando el comando: 'npm install'
- Ejecutelo usando el comando: 'npm start'
- En las reglas del firewall abra el puerto '8080'
- Recuerde actualizar los siguientes archivos:
	- C:\Carlos\react\lauraerp\src\Auth\auth0-variables.js
			- Actualice el callback
	- C:\Carlos\react\lauraerp\src\variables\lauraSistema.jsx
			- Actulice los url para alcanzar los servicios de spring.io de la nube.
			
Para la nube usanso 'App Engine'
- Este seria para productivo.
- Cree sobre el proyecto de Google Cloud, la instancia de 'App Engine', seleccionando 'node.js'
- Configure sobre su maquina la instancia de despliegue con el comando: 'gcloud init'
- Despliegue la aplicacion con el comando: 'gcloud app deploy'
	- Tenga en cuenta estar parado sobre el proyecto a desplegar: 'C:\Carlos\react\lauraerp'
						
