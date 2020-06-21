# LUDOTECA (Biblioteca de juegos de tablero)

El objetivo de este sitio es generar una biblioteca de los juegos que posee cada usuario registrado.
Los usuarios pueden agregar juegos a su biblioteca, la que extrae información de una API remota con detalles de cada juego. 

## Administración de tareas

[Flujo del proyecto](https://github.com/users/Ellamir/projects/1) 
:woman_technologist:[@Anasu](https://github.com/Anasu) :heavy_plus_sign: :woman_technologist:[@Ellamir](https://github.com/Ellamir) 

## Requerimientos

- Objetivos (stakeholder y usuarios)
  - Generar una biblioteca de juegos donde el usuario pueda registrar los juegos que tiene y pueda acceder a información técnica del mismo. 
  - Ser capaz de contactarse con otras personas que tengan los mismos juegos
  - Sugerir juegos similares a los que la persona inscriba en su lista
  
- Requerimientos identificados
   - [x]  1. La aplicación debe ser responsiva.
  - [x]   2. Se debe utilizar VueJS, Vuex y Vue router para el desarrollo
  - [x]   3. Utilizar una librería de componentes (Bootstrap-Vue)
  - [x]   4. Utilizar GIT para el control de versiones
   - [ ]  5. La aplicación deberá obtener los datos de los juegos desde la api 
        https://www.boardgameatlas.com/api/docs utilizando Axios.
   - [x]  6. La aplicación debe contar con un sistema de login basado en el servicio de 
    autenticación de Firebase
   - [ ]  7. El usuario deberá poder guardar la lista de juegos que marque para guardar
        en una base de datos de Firebase y recuperarlos
  - [ ]   8. La aplicación debe contar obligatoriamente, con las siguientes vistas:
       - [x]  8.a Pantalla de inicio sin login (Presentación y resumen, incluyendo cuántos 
        juegos hay en la biblioteca y cuántos usuarios registrados)
       - [x]  8.b. Pantalla de Login
      - [ ]   8.c Pantalla Principal que muestre los datos obtenidos de la API
      - [ ]   8.d Pantalla que muestre la lista personal de juegos. (Firebase)
  - [ ]   9. Se debe poder filtrar por nombre/editorial o palabras clave
  - [ ]   10. Mostrar las imágenes como libros en una repisa y al hacer click traer la info.
     
     
## Borrador

![Borrador](http://dragon.cl/portafolio/ludoteca/borrador.png)

## Diseño Preliminar

![Home](http://dragon.cl/portafolio/ludoteca/index.png)

![Artboard](http://dragon.cl/portafolio/ludoteca/artboard.png)

## Utilidad

La idea del sitio es una coleccion tipo ludoteca que tiene diferentes vistas para usuarios logueados y no logueados, 
además de algunas funciones solo disponibles a un administrador. Si no fuera necesario para el trabajo, 
puedo prescindir de las funciones de admin, eventos y grupos por ahora - dejar solo una coleccion tipo biblioteca para los usuarios.

El sitio se nutriría de bases de datos. 
En funcionalidad, el sitio deberia tener una vista home con acceso al login, eventos, biblioteca. 
Si alguien está logueado, en vez de login es logout. 

USUARIOS
- Indice 
- nombre
- Nick
- Imagen (avatar)
- ~~Edad (Fecha de nacimiento)~~
- ~~Grupo~~ 
- Contacto (email)

Funcionalidad de LOGIN
- crear usuario (comprobar correcto email; revisar si mail existe y enviar solicitud x email)
- La idea es que un admin pudiera ver solicitudes pendientes pero inicialmente puede quedar todo a mano. 

LUDOTECA
- Indice
- Título (juego) 
- Imagen
- Editorial
- palabras clave
- ~~Link a materiales~~ (tal vez - y solo para usuarios) 

Funcionalidad de LUDOTECA
- desplegar ludoteca completa
- filtrar por nombre/editorial o palabras clave
- Mostrar las imagenes como libros en una repisa y al hacer click traer la info.
- Despliegue podria depender de la cantidad de resultados, o tener un mouseover que vaya mostrando la imagen del libro dinamicamente. 



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Desarrollo futuro :soon:
##### (Fuera del alcance del proyecto original)
>Elementos descartados de la entrega original han sido ~~tachados~~
> 
>EVENTOS
>- Indice
>- Fecha
>- Titulo
>- Imagen
>- Organizador (grupo)
>
>La funcionalidad para EVENTOS es: 
>- buscar ubicación (ciudad probablemente)
>- filtrar por fecha (año probablemente)
>- Paginar 
>
>----
>
>GRUPOS
>- Indice
>- Nombre grupo
>- Usuarios
>- Eventos 
>- Juegos
>
>Funcionalidad para GRUPOS:
>- Registrar grupo
>- Buscar grupo existente
>- Agregarse a un grupo
