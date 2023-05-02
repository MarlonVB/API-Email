> # **:warning: Advertencia!**
> ### Se debe tener en cuenta este README antes de ejecutar el API. Considera darle un vistazo.


# API Utilizada para enviar email's en tiempo real

Esta API fue hecha Express.js un framework para Node.js utilizado para construir aplicaciones web y APIs de manera rápida y sencilla. Es uno de los frameworks más populares en la comunidad de Node.js debido a su simplicidad, flexibilidad y gran cantidad de características que ofrece.

Tambien se uso Nodemon una herramienta que ayuda a los desarrolladores a aumentar su productividad en el desarrollo de aplicaciones Node.js al monitorear los cambios en el código fuente y automáticamente reiniciar la aplicación en tiempo real.

A parte se implemento los CORS (Cross-Origin Resource Sharing) un mecanismo de seguridad utilizado por los navegadores web para controlar las solicitudes HTTP realizadas por scripts que se ejecutan en una página web en un origen diferente al del recurso solicitado. Esto es importante para prevenir ataques malintencionados que puedan comprometer la seguridad de los datos del usuario.

Ya por ultimo se implemento Body Parser esencial para analizar y acceder a los datos de la solicitud entrante en la ruta de Express.js.

## Instalcion de Express

Para la ejecucion del proyecto es importante tener instalado Express. Con el siguiete comando podremos hacerlo.

```
npm i express

```

## Instalacion de Nodemon

Asi mismo para la ejecucion del API con Nodemon, se debe instalar esta herramienta. Aqui el codigo para hacerlo.

```
npm i nodemon

````

### Instalacion global de Nodemon

Si deseas puedes instalar Nodemos de manera global, lo que significa que podrás utilizar Nodemon en cualquier proyecto de Node.js que crees en tu computadora.

```
npm i -g nodemon

```

## Instalacion Nodemon en macOS

Si usas una macbook es posible que necesites usar el siguiente comando para instalar Nodemon de una mejor forma.

```
sudo npm i -g nodemon

```

## Instalacion de los CORS

Para la seguridad es importante implementar este mecanismo de seguridad, para eso nececitamos instalar este middleware de Express.js. Aqui el comando para hacerlo.

```
npm i cors

```

## Instalacion de Body Parser

Para analizar y acceder a los datos de la solicitud entrante en la ruta de Express.js es necesario instalar este middleware. Aqui el comando para hacerlo.

```
npm i body-parser

```

#Comando para ejecutar el API

Puedes ejecutar el API puedes hacerlo con el siguiente comando.

```
nodemon index.js

```

