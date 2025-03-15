***
# <h1 align="center"> 💥Progressive Web Application Prototipo juego web tipo shooter💥 </h1>
***

![img](/assets/Portafolio.png)

![img](/assets/Sobremi.png)

## 📄Descripción del proyecto

```sh

El curso de HTML y CSS: Se centra en enseñar a los estudiantes sobre el Modelo de Caja, 
la creación de clases en CSS, el Tamaño de Caja y la posición de elementos en la pantalla utilizando 
Flexbox, responsividad y publicación de proyectos. A lo largo del curso, los participantes trabajarán 
en un proyecto práctico, un Portafolio, donde aplicarán los conocimientos adquiridos para construir un 
diseño previamente establecido en Figma, que sean adaptables a diferentes dispositivos desde iPhones 
hasta iPads aplicando conceptos de responsividad, utilizando sus conocimientos previos sobre HTML, 
colores de fondo, diseño, encabezados y pies de página, brindando a los estudiantes las herramientas 
necesarias para mejorar sus habilidades en el desarrollo web.

```

## 📃Objetivos de aprendizaje

```sh

- Integrar conocimientos previos.
- Desarrollar habilidades prácticas.
- Comprender el Modelo de Caja.
- Crear y utilizar clases en CSS.
- Aplicar el Box Sizing.
- Dominar el posicionamiento con Flexbox.
- Comprender la importancia de la responsividad.
- Aplicar unidades de medida adecuadas.
- Publicar proyectos de manera efectiva.
- Mejorar las habilidades en desarrollo web.
- Desarrollar un Portafolio.

```

## 🛠️Recursos y herramientas utilizados

```sh

- Editor de Código: Visual Studio Code.
- Navegador Web Chrome, Firefox.
- git y github.
- Figma.
- Documentación de CSS.
- Frameworks CSS.
- Recursos de Aprendizaje, Recursos en línea.
- Ejercicios Prácticos.
- Proyectos prácticos

```




# PWA_juego

Descripción de la práctica 

Sobre el juego que hemos diseñado durante el ejercicio P2P del módulo 8, vamos a abordar la implementación del juego, 
teniendo en cuenta, como en otros ejercicios, que algunas partes ya están realizadas, incluso nos pueden ayudar a proseguir con nuestro ejercicio. 
Tenemos varias fases. En el siguiente ejercicio vamos a tener que realizar varias fases para demostrar lo que hemos aprendido en el proyecto. 

 Fase 0 – Nos familiarizamos con el proyecto
 
 Para ello, es importante que antes de nada, te descargues la carpeta del enunciado, navegues 
 por el ejercicio, y leas los comentarios internos que hay en el código, que te van a ayudar.  
 Es importante que te familiarices con cómo está maquetado el layout general para poder llevar a cabo las animaciones. Como ves es parecido al ejemplo final que pusimos en el video del bloque 9.  
 Es un caso de un proyecto SPA (Single Page Application), donde tenemos todos los elementos necesarios para el funcionamiento de la aplicación cargados de antemano en el HTML.  

  Fase 1. Programar la navegación 
  
  Para familiarizarnos con cómo está programada la Navegación, te recomiendo que vayas a
  ./app/Navigation.js donde a partir de la línea 49 te explico cómo funcionar con ella bien.  
  Pero haciendo un resumen, la navegación está basada en etiquetas <a> que están conectadas con <section>, como queremos que la etiqueta <a> funcione de una manera especial, reprogramamos cómo va a ser su comportamiento en la función initNavigationEvents. Esta parte te la damos programada, porque aún no siendo complicado, queríamos centrarnos en la parte de animaciones y maquetación. 

  Básicamente para programar la navegación, tenemos que estar atentos a tres cosas: 
  •  El atributo id de las secciones 
  •  Los atributos href, navigation-type y animation-type en los links
  •  En función de los atributos, dispararemos diferentes funciones.  
  Entonces los pasos a dar para la navegación serían:  
  •  Hacer que swiper funcione para navegar entre las secciones de menú, settings y leaderboard de manera gestual y pulsando los links con el atributo navigation- type=”swipe” 
  •  Hacer animaciones para navegar entre el juego, y el menú, así como el lanzamiendo de ventanas modales. 

   Fase 2. Maquetación 
   
   Cuando la navegación funcione perfecta, entonces que comience la parte de estilos. El objetivo en la fase 2 es en HTML y CSS, identificar las pantallas, y hacer una maquetación 
   correcta usando SASS.  
   
   Fase 3. Usar el juego con Drag and Drop 
   
   Ya te has familiarizado en proyectos anteriores con la dinámica del juego y has visto cómo 
   mover el player para poder lanzar círculos. El movimiento del player, estaba realizado capturando eventos de teclado. Crees que podríamos hacer algo similar con Drag and Drop? 

    Fase 4. Meter alguna animación extra 
    
    Al menos tienes que meter una animación extra como por ejemplo en los SVG de los 
    caracteres en la página de inicio, o alguna microinteracción que quieras, aquí puedes usar Transiciones CSS, animaciones CSS o animeJS, como prefieras tú. 

    

















  
