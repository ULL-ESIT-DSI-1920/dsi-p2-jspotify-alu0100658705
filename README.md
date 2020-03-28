## dsi-p2-jspotify-alu0100658705

## Pablo Bethencourt Díaz

## alu0100658705@ull.edu.es

# Práctica 2: Javascript ES2015+

### El objetivo de la práctica es crear una página JavaSpotify con varios vinilos que reproduzcan una canción cuando pulses sobre ellos.

- **Crea un proyecto con Parcel para trabajar con los siguientes fragmentos de código:**

  ![cap01](src/assets/images/cap01.png)

  ![cap02](src/assets/images/cap02.png)

  Se han añadido nuevas clases para representar un total de 3 vinilos.

  Veamos la estructura de directorios del proyecto:

  ![cap08](src/assets/images/cap08.png)

- **Utilizando módulos de Javascript, crea dos clases Player y Song y expórtalas para utilizar en nuestro index.js.**

  Vemos el contenido del fichero _index.js_ donde se crea un objeto map a partir del hash _audios_ y se importa la clase _Player_ para luego instanciarla:

  ![cap07](src/assets/images/cap07.png)

- **La clase Player.js debe analizar los ítems del map (representan la clase HTML y el nombre del MP3 asociado) uno por uno e instanciar una canción ( Song ).**

  Se ha definido esta clase de la siguiente forma: en primer lugar recibe el objeto **map** desde _index.js_, donde se recorre y se le pasa a cada nuevo objeto _Song_ la clave, que corresponde al item desde donde se activará el evento _onclick_, la canción que se debe reproducir y el elemento que hace referencia al vinilo que ha de desplazarse cuando se produzca el evento, luego posteiormente se invoca al método _reproducir_ del fichero _Song.js_ que se encarga de reproducir o pausar la canción. Veamos su implementación:

  ![cap03](src/assets/images/cap03.png)

- **La clase Song.js debe buscar en el DOM el elemento HTML indicado (la clave del map) y aplicarle un listener para reproducir la canción si se pulsa encima.**

  Para la clase _Song.js_ se ha llevado a cabo la siguiente implementación:

  ![cap04](src/assets/images/cap04.png)

  Luego se ha desarrolado una función _reproducir_ a la que se le va a pasar cada canción desde la clase _Player_, que inicia o pausa la canción cuando se activa el evento _onclick_.

- **Asegúrate de estar utilizando Prettier (recomendado) y ESLint para revisar la calidad de tu código y corregir todos los errores. Añade un script lint en los scripts de NPM que revise el código y/o utiliza la extensión adecuada para verlo desde VSCode.**

  Vemos la versión de _Prettier_ y de _ESLint_ instalada y el script lint (junto a todos los demás):

  ![cap05](src/assets/images/cap05.png)

  ![cap06](src/assets/images/cap06.png)

### Retos

1. Revisa la API de audio y añade otras funcionalidades no mencionadas en la práctica. Puedes utilizar funcionalidades como la tasa de velocidad, volumen o eventos especiales para añadir funcionalidades concretas. No te olvides de documentarlas en el README.md y mencionarlo como Funcionalidades extra.

2. La librería Howler.js es una interesante librería que nos hace mucho más fácil trabajar con archivos de audio. ¿Serías capaz de cambiar tu proyecto y utilizar la librería Howler.js? ¿Cuál prefieres utilizar? ¿Por qué?

3. ¿Serías capaz de realizar esta práctica íntegramente desde Javascript? Es decir, crear la estructura HTML del interior del <body> directamente desde Javascript, haciendo uso de document.body y la creación de elementos en el DOM. Esto ayuda a comprender como funciona a bajo nivel el DOM de una página HTML y son unas bases interesantes si en el futuro quieres aprender como funcionan por debajo librerías como React y conceptos utilizados como Virtual DOM.
   La clase Song.js debe buscar en el DOM el elemento HTML indicado (la clave del map) y aplicarle un listener para reproducir la canción si se pulsa encima. Recuerda que con Parcel, podemos importar assets (.mp3, .jpg, etc...) de una carpeta y obtener un objeto (hash o diccionario) con una lista de pares clave-valor con el nombre del fichero y el fichero generado en dist/:
