***
# <h1 align="center"> 💥Progressive Web Application y Prototipo juego web tipo shooter💥 </h1>
***

![img](/assets/maquetacionFigma.png)
![img](/assets/juego1.png)
![img](/assets/juego2.png)
![img](/assets/juego3.png)
![img](/assets/juego4.png)
![img](/assets/juego5.png)
![img](/assets/juego6.png)
![img](/assets/juego7.png)
<p align="center">
<br><img src="/assets/juego8.png">
</p>

## 📄Descripción del proyecto

```sh

Realizar el ​mapa de sitio, los wireframes​ y el ​prototipo​ de un juego tipo shooter.

MAPA DE SITIO Y PROTOTIPADO

El mapa de sitio y el proceso completo de prototipado se realizará con figma. su apariencia deberá
contener lo siguiente:

1) Deben generarse cuatro páginas con figma: sitemap, wireframes, design system y prototipe.
2) El sitemap debe incluir las páginas que se generen y la relación entre ellas.
3) Los  wireframes  deben  incluir  los  planos  de  pantalla  y  la  estructura  de  cada  uno  de
   ellos, tratando  de  acercarnos  lo  máximo  posible  al  tipo  de  componentes  que  tendrán  y
   su distribución. Es importante tener en cuenta el dispositivo para el que se esté diseñando.
4) Se debe generar así mismo la navegación entre pantallas, para lo que se recomienda empezar  a
   generarla en la página de los wireframes.
5) La página de design system incluirá como mínimo el diseño de:
   ○ Niveles de texto
   ○ Colores
   ○ Layout
   ○ Botones primarios y secundarios
   ○ Personajes del juego y disparos
6) El  prototipo  acabado  se  creará  aplicando  el sistema de diseño a los wireframes navegables en
   una página  aparte.  En  este  prototipo  es  importante  diseñar  y  dejar  definidas  las
   transiciones entre pantallas y el resto de animaciones clave de la intefaz gráfica.
    
Sobre el juego que hemos diseñado anteriormente, vamos a abordar la implementación del juego, teniendo
en cuenta, como en otros ejercicios, que algunas partes ya están realizadas, incluso nos pueden ayudar
a proseguir con nuestro ejercicio. Tenemos varias fases. En el siguiente ejercicio vamos a tener que
realizar varias fases para demostrar lo que hemos aprendido en el proyecto. 

FASE 0 - NOS FAMILIARIZAMOS CON EL PROYECTO
 
Para ello, es importante que antes de nada, te descargues la carpeta del enunciado, navegues por el
ejercicio, y leas los comentarios internos que hay en el código, que te van a ayudar.  
Es importante que te familiarices con cómo está maquetado el layout general para poder llevar a cabo
las animaciones. Como ves es parecido al ejemplo final es un caso de un proyecto SPA (Single Page
Application), donde tenemos todos los elementos necesarios para el funcionamiento de la aplicación
cargados de antemano en el HTML.  

FASE 1 - PROGRAMAR LA NAVEGACIÓN 

Para familiarizarnos con cómo está programada la Navegación, te recomiendo que vayas a
./app/Navigation.js donde a partir de la línea 49 te explico cómo funcionar con ella bien.  
Pero haciendo un resumen, la navegación está basada en etiquetas <a> que están conectadas con
<section>, como queremos que la etiqueta <a> funcione de una manera especial, reprogramamos cómo va a
ser su comportamiento en la función initNavigationEvents. Esta parte te la damos programada, porque
aún no siendo complicado, queríamos centrarnos en la parte de animaciones y maquetación. 

Básicamente para programar la navegación, tenemos que estar atentos a tres cosas: 
  •  El atributo id de las secciones 
  •  Los atributos href, navigation-type y animation-type en los links
  •  En función de los atributos, dispararemos diferentes funciones.
  
Entonces los pasos a dar para la navegación serían:  
  •  Hacer que swiper funcione para navegar entre las secciones de menú, settings y leaderboard de
     manera gestual y pulsando los links con el atributo navigation- type=”swipe” 
  •  Hacer animaciones para navegar entre el juego, y el menú, así como el lanzamiendo de ventanas
     modales. 

FASE 2 - MAQUETACIÓN 
   
Cuando la navegación funcione perfecta, entonces que comience la parte de estilos. El objetivo en la
fase 2 es en HTML y CSS, identificar las pantallas, y hacer una maquetación correcta usando SASS.  
   
FASE 3 - USAR EL JUEGO CON DRAG AND DROP 
   
Ya te has familiarizado en proyectos anteriores con la dinámica del juego y has visto cómo mover el
player para poder lanzar círculos. El movimiento del player, estaba realizado capturando eventos de
teclado. Crees que podríamos hacer algo similar con Drag and Drop? 

FASE 4 - METER ALGUNA ANIMACIÓN EXTRA 
    
Al menos tienes que meter una animación extra como por ejemplo en los SVG de los caracteres en la
página de inicio, o alguna microinteracción que quieras, aquí puedes usar Transiciones CSS,
animaciones CSS o animeJS, como prefieras tú. 

```

## 📃Objetivos general

```sh

- Objetivo  Practicar el desarrollo de una arquitectura web básica para un juego tipo shooter usando
  figma para el prototipado y HTML/SASS para la implementación.   
- Es habitual como futuro fullstack developer que vas a ser que te familiarices con proyectos que
  están iniciados por un compañero o compañera, o por otro profesional, donde te van a dar un código,
  con el que te tienes que familiarizar.
  Esto, siempre lleva un rato hacerlo, es normal, hay quien dice que es bueno hasta rehacerse el
  código entero para entenderlo bien si no es un código muy largo.
  En este proyecto vamos a tomar un proyecto que ya tiene algunos componentes iniciados, y vamos a
  tener que cumplir una serie de objetivos que nos marca el cliente, para ello vamos a utilizar
  algunas técnicas con las que nos hemos familiarizado ya durante el visionado de los videos y el
  estudio de los ejemplos. Usando librerías como Swiper o AnimeJS, así como Interact vamos a dar vida
  a nuestro proyecto.   

```

## 🛠️Recursos y herramientas utilizados

```sh

- Editor de Código: Visual Studio Code.
- Navegador Web Chrome, Firefox.
- git y github.
- Figma.
- Documentación de CSS.
- Recursos de Aprendizaje, Recursos en línea.
- Proyectos prácticos

```

## 🌀Tecnologías Utilizadas

✔️HTML5

✔️CSS3

✔️JavaScript

✔️SCSS

## 💻Instalación

```sh
Para probar la funcionalidad del "Portafolio", simplemente visita el siguiente enlace: 

```
### ***[Link a la página para probar el PWA Prototipo juego web tipo shooter (https://airy-valiant-cabin.glitch.me/)](https://airy-valiant-cabin.glitch.me/ "Realizado por: Ing. Julio César Ortiz Pabón")***

## 👩👨Autores del Proyecto

>> ![img](/assets/Foto-Pequeña-julio.png)    Programación HTML y CSS
>                               
>>> ![img](/assets/Miriadax.jpg)  Curso Desarrollo Frontend con HTML, CSS y Javascript (10.ª edición).

## 📜Certificados

>> ![img](/assets/Certificado.png)


    

















  
