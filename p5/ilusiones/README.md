# Taller ilusiones visuales

## Propósito

Comprender algunos aspectos fundamentales de la [inferencia inconsciente](https://github.com/VisualComputing/Cognitive) de la percepción visual humana.

## Tareas

Implementar al menos 6 ilusiones de tres tipos distintos (paradójicas, geométricas, ambiguas, etc.), al menos dos con movimiento, dos con interactividad y una en 3D.

*Opcionales:*
1. Realizar una ilusión mediante el [fragment shader](https://thebookofshaders.com/).

## Discusión

1. Complete la tabla

| Ilusión | Categoria | Referencia | Tipo de interactividad (si aplica) | URL código base (si aplica) |
|---------|-----------|------------|------------------------------------|-----------------------------|
| Hering Ilusion | Geometric | https://michaelbach.de/ot/ang-hering/index.html | Haga click para activar o desactivar la ilusión | No Aplica |
| Poggendorff Ilusion | Geometric | https://michaelbach.de/ot/ang-poggendorff/index.html | Mantener presionado click para activar la ilusion | No Aplica |
| Stepping Feet Ilusion | Motion  | https://en.wikipedia.org/wiki/Stroboscopic_effect |presionar 0 para cambiar fondo, click para interactuar | No Aplica |
| Stroboscopic effect | Motion & Time | https://en.wikipedia.org/wiki/Stroboscopic_effect | Haga click para activar o desactivar la ilusión | No Aplica |
| Munker-White Illusion | Luminance & Contrast | https://michaelbach.de/ot/lum-white/index.html | Haga click para activar o desactivar la ilusión | No Aplica |
| Motion-Induced Blindness | Motion & Time | https://michaelbach.de/ot/mot-mib/index.html | Haga click para activar o desactivar la ilusión | No Aplica |
| Moiré Patterns | Luminance & Contrast | https://michaelbach.de/ot/lum-moire1/index.html | Haga click para activar o desactivar la ilusión | No Aplica |


2. Describa brevememente las referencias estudiadas y los posibles temas en los que le gustaría profundizar

### 1. Colour Asimilation: 
Se encuentran en dos esquinas del canvas dos cuadrados del mismo color (Verde), si activamos la ilusión se generará una cuadricula (Naranja y Rosa) si vuelve a fijarse en el color de los cuadrados podrá ver que uno tomara un color azul, este fenómeno es conocido como el efecto Bezold, el cual explica que el color de los cuadrados se vuelve similares a la mezcla de las líneas de la cuadricula.  
### 2. Hering Ilusion: 
Se encuentran dos líneas rojas en el canvas las cuales son paralelas, si activamos la ilusión se pintarán unas líneas oblicuas que parten del centro del canvas, las cuales le harán percibir una curvatura en las líneas rojas.
### 3. Stroboscopic effect:
Se encuentra 4 objetos que se mueven de manera periódica, los cuales son iluminados con destellos a diferente frecuencia, lo cual permite ver que el objeto gira en la otra dirección, que permanece estático y se traslada 180°.  Este fenómeno están basados los estroboscopios.
### 4. Munker-White Illusion:
Se encuentran dos discos del mismo color (Amarillo), los cuales están montados sobre una malla de colores (Blanco y Verde), el disco de la izquierda esta montado sobre las líneas verdes lo cual hace que se vea más claro que el derecho que esta montado sobre las líneas verdes.
### 5. Motion-Induced Blindness:
Se encuentra una matriz de cruces giratorias (Azul) y tres puntos dentro de ella (Amarillo), si fija la mirada en el centro podrá ver que los puntos irán desapareciendo, puede que desaparezca solo uno, los dos o todos. Esto se debe al efecto Troxler.
### 6. Moiré Patterns:
Se encuentran dos conjuntos de anillos concentricos (Verde y Amarillo), el amarillo se mueve de manera aleatoria superponiéndose al verde lo cual crea bandas oscuras curvas conocidos como “moirés”.
### Tema de Interés:
Actualmente las tecnologías como la inteligencia artificial y el machine learning no dejan de avanzar, gracias a las redes generativas antagónicas, hoy en día una máquina es capaz de generar caras nunca antes vistas y pinturas que copian estilos como los de Monet y Van Gogh. Sin embargo a pesar de estos avances las nuevas tecnologías han encontrado un desafío difícil de superar, no existe ningún agente no humano capaz de crear ilusiones ópticas. Nuestro tema de interés es poder generar un agente no humano capaz de aprender de otras ilusiones y después generar sus propias ilusiones.
## Referencias
* 135 Visual Phenomena & Optical Illusions by Michael Bach
* https://medium.com/@jonathan_hui/gan-some-cool-applications-of-gans-4c9ecca35900
* https://www.nobbot.com/mira-que-miran/ilusiones-opticas-ia/


## Entrega

* Plazo para hacer _push_ del repositorio a github: ~~25/10/20~~ 1/11/20 a las 24h.