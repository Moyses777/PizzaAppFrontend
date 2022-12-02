# frontendpizza

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Docker Commands
```
docker images -> Te enlista todas las imagenes

docker run -it -p 8080:8080 -e "HOST=0.0.0.0" --network mired --name my-frontend miapp:1.0 
-> Te crea un nuevo contenedor y ademas te corre el contenedor, agrega red interna en el contenedor para que se pueda comunicar con otras aplicaciones. -p ["Puerto Anfitrion: Puerto Salida"] -host ["host donde proviene"] --network ["Nombre red del contenedor"] --name ["nombre del contenedor"] ["Nombre de la imagen con su respectivo tag despues de ':'"]
docker run --name monguito -p 3016:3016 -d mongo -> --name ["nombre del contenedor"] -p ["puerto anfitrion:puerto salida"] -d ["nombre de la imagen"]

docker ps -> te enlista todos los contenedores

docker stop {fdislsiaed} -> detener contenedor {["identificador de contenedor"]}

docker start {} -> este sirve para volver a correr un contenedor {["nombre de contenedor"]}

docker logs {} -> este te muestra todos los logs de un contenedor {["id de contenedor"]}

docker pull {} -> este te baja una imagen ya creada de alguna tecnlogia (node, mysql, etc) de docker hub {["nombre imagen:version tecnologia "]}

docker rm {} -> elimina contenedor {["nombre contenedor"]}

docker image rm {} -> elimina imagen {["nombre de la imagen"]}

docker network ls -> te lista todas las redes creadas que existen

docker network create {} -> te crea una nueva red {["nombre de nueva red"]}

docker network rm {} -> elimina alguna red ya creada {["nombre de la red a eliminar"]}

docker build -t miapp:1.0 . -> otra manera de construir una imagen -t ["nombre de la imagen:version de imagen"] {".", "este indica de donde va sacar la app para la imagen que se creara, en este caso . porque estamos apuntando a la misma carpeta donde estamos. en este caso apunta a este mismo proyecto para que se cree la imagen. Este proyecto sera la imagen."}

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
