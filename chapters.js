// Guion y explicaciones revisados con la guía SENA y la evidencia del proyecto.
export const chapters = [
  {
    "id": "jaquebot",
    "title": "JaqueBot",
    "kicker": "11C · 2026 / PROTOTIPO TERMINADO",
    "lead": "Ajedrez que cobra movimiento.",
    "detail": "Aplicamos Matemáticas y Sistemas para integrar visión artificial, inteligencia artificial y mecánica. Un brazo que mueve objetos, dos apps y el ajedrez como prueba.",
    "role": "Gestor de proyecto",
    "seconds": 15,
    "notes": "Buenos días, jurados, docentes y compañeros. Somos JaqueBot, del grado once C de la Institución Educativa Carlos Julio Torrado Peñaranda, del Técnico en Sistemas Teleinformáticos. Nuestro objetivo fue aprender a integrar visión artificial, inteligencia artificial y mecánica, aplicando lo visto en Matemáticas y Sistemas para mover objetos con un brazo robótico. JaqueBot: Ajedrez que cobra movimiento.",
    "kind": "hero",
    "tags": [
      "Prototipo terminado",
      "Dos apps",
      "11C · 2026"
    ]
  },
  {
    "id": "reto",
    "title": "Del tablero\na la industria.",
    "kicker": "01 / EL RETO",
    "lead": "Imaginen una empresa que separa cajas de medicamentos según su etiqueta y destino. Un brazo adaptado podría recoger cada caja y llevarla al lugar indicado.",
    "detail": "Tiempos modernos, de Chaplin, muestra el desgaste de repetir movimientos. El ajedrez nos permite demostrar el principio.",
    "role": "Gestor de proyecto",
    "seconds": 35,
    "notes": "Imaginen una empresa que separa cajas de medicamentos por destino. Un brazo más grande podría llevar cada caja al lugar indicado por su etiqueta, agilizar el trabajo y reducir errores; tendríamos que comprobarlo. En Tiempos modernos, Charles Chaplin mostró lo agotador de repetir movimientos en una fábrica. Nos interesa reducir ese esfuerzo repetitivo de hombros y brazos. En el colegio elegimos el ajedrez para demostrar la idea de reconocer, decidir y trasladar.",
    "kind": "story",
    "tags": [
      "Ejemplo de aplicación",
      "Adaptar y medir"
    ]
  },
  {
    "id": "objetivos",
    "title": "Una decisión.\nUn movimiento.",
    "kicker": "02 / LO QUE CONSTRUIMOS",
    "lead": "Partimos de EduSCARA, un diseño educativo, y creamos dos apps: una para probar el brazo y otra para jugar ajedrez.",
    "detail": "Aplicamos programación, electrónica y conexiones aprendidas en Sistemas y en cursos previos de Arduino. En JaqueBot usamos STM32. Las coordenadas y los ángulos de Matemáticas se convierten en movimiento.",
    "role": "Gestor de proyecto",
    "seconds": 30,
    "notes": "Usamos EduSCARA, un diseño educativo publicado, y construimos el brazo y dos aplicaciones. Unimos matemáticas y geometría con Sistemas: programación, electrónica y conexiones practicadas antes en cursos de Arduino. En JaqueBot aplicamos esas bases con la placa STM32. Relacionamos una imagen con una posición y con el giro de los motores: la cámara observa, el programa interpreta y el brazo actúa.",
    "kind": "story",
    "tags": [
      "Matemáticas y Sistemas",
      "Visión + IA + mecánica",
      "Geometría en movimiento"
    ]
  },
  {
    "id": "ia",
    "title": "La IA acompaña.\nNosotros comprobamos.",
    "kicker": "03 / PROGRAMACIÓN Y DEPURACIÓN",
    "lead": "Codex es una herramienta de IA que ayuda a escribir y revisar programas. Le explicamos el problema; nosotros comprobamos la propuesta en el proyecto.",
    "detail": "Una orden recibida no demuestra que el brazo llegó. Aprendimos a revisar la posición y a detener la secuencia cuando la comprobación falla.",
    "role": "Ingeniero de IA",
    "seconds": 120,
    "notes": "Usamos ChatGPT Codex, una herramienta de inteligencia artificial que ayuda a entender, escribir y revisar programas mediante una conversación. La elegimos para adaptar el código de EduSCARA y construir las dos aplicaciones. Primero explicábamos qué componentes teníamos, qué queríamos lograr, los límites del brazo y qué problema observábamos. Por ejemplo: el brazo recibió una orden, pero la posición leída no coincide con el destino. Después pedíamos revisar esa parte sin cambiar lo que ya funcionaba. Codex proponía cambios y pruebas; nosotros aportábamos medidas, observábamos el robot y comprobábamos el resultado. La ayuda era útil porque permitía trabajar un problema por partes. Recibir una respuesta convincente no era suficiente para darla por correcta.\n\nDurante una captura de ajedrez encontramos lecturas de posición distintas. Aprendimos algo sencillo: que el controlador responda que recibió una orden no demuestra que el brazo ya llegó. Por eso reforzamos el programa para revisar varias lecturas de posición y bloquear la operación si no coinciden con lo esperado. Tampoco debe repetir un traslado fallido sin revisar dónde quedó la pieza. Esto mejoró la comprobación del programa; para conocer la causa física debemos observar y medir el montaje. Aprendimos a registrar los fallos, guardar versiones y cambiar una cosa cada vez. La inteligencia artificial apoyó la programación; el equipo siguió siendo responsable de construir, probar y explicar lo realizado.",
    "kind": "story",
    "tags": [
      "Describir el problema",
      "Probar por partes",
      "Comprobar el resultado"
    ]
  },
  {
    "id": "articulaciones",
    "title": "Dos eslabones.\nUn espacio de trabajo.",
    "kicker": "04 / MECÁNICA Y SENSORES",
    "lead": "Los servomotores son motores que giran hasta una posición indicada. Mueven la base y el codo para llevar la herramienta al lugar elegido.",
    "detail": "X e Y ubican el extremo sobre el tablero; los grados indican cuánto gira una articulación. Los potenciómetros son sensores que aportan información para comprobar esa posición.",
    "role": "Hardware · primer aprendiz",
    "seconds": 55,
    "notes": "La base gira y el codo cambia la posición del extremo, como nuestro brazo. Usamos servomotores: motores que reciben la orden de alcanzar una posición, como una puerta que se abre hasta un ángulo. Los potenciómetros funcionan como sensores: su señal cambia al girar, como una perilla. Nos permiten estimar la posición y compararla con la esperada. Los engranajes transmiten movimiento y los tornillos sujetan el conjunto. También usamos matemáticas: X e Y indican dónde está el extremo sobre el tablero; los grados describen cuánto gira una articulación. Un cuarto de vuelta son noventa grados, como el ángulo de la esquina de un cuaderno. Así vemos la geometría convertirse en movimiento.",
    "kind": "architecture",
    "tags": [
      "Servomotores · movimiento",
      "Potenciómetros · posición",
      "Base y codo"
    ]
  },
  {
    "id": "electroiman",
    "title": "Acercar. Sujetar.\nTrasladar. Soltar.",
    "kicker": "05 / EJE Z Y ELECTROIMÁN",
    "lead": "La herramienta sube y baja para acercarse a la pieza. El electroimán atrae una parte metálica al recibir electricidad y la libera al apagarse.",
    "detail": "Eje Z significa altura. Encendemos el imán para recoger y lo apagamos para soltar; supervisamos que se tome una sola pieza.",
    "role": "Hardware · primer aprendiz",
    "seconds": 65,
    "notes": "El extremo también puede subir y bajar. En la pantalla ese movimiento se llama eje Z; aquí significa simplemente altura de la herramienta. Para tomar una pieza usamos un electroimán, un dispositivo que atrae una parte metálica cuando recibe electricidad. Lo elegimos porque podemos encenderlo para sujetar y apagarlo para liberar. La secuencia es acercarse, bajar, encender el imán, subir, trasladar, bajar y soltar. Las piezas deben tener una parte que el imán pueda atraer. La pantalla indica si se ordenó encenderlo, pero no mide la fuerza ni confirma cuántas piezas levantó. Tampoco tenemos un sensor que mida directamente la altura. Por eso comprobamos la preparación y observamos la toma y la liberación.",
    "kind": "magnet",
    "tags": [
      "Altura de la herramienta",
      "Atracción magnética",
      "Toma supervisada"
    ]
  },
  {
    "id": "vision",
    "title": "Cada pieza\ntiene una identidad.",
    "kicker": "06 / CÁMARA Y ARUCO",
    "lead": "La Raspberry Pi es la pequeña computadora que ejecuta las apps. La cámara Raspberry Pi, con sensor Sony, obtiene la imagen del tablero.",
    "detail": "ArUco son etiquetas cuadradas que identifican las piezas. OpenCV es el conjunto de herramientas que las reconoce en la imagen. Calibrar permite relacionar imagen, casilla y brazo.",
    "role": "Hardware · segundo aprendiz",
    "seconds": 55,
    "notes": "La Raspberry Pi es una computadora pequeña: organiza las aplicaciones y recibe imágenes de la Raspberry Pi AI Camera con sensor Sony. Usamos visión artificial: programas que extraen información de una imagen. Aquí reconocen las etiquetas ArUco, dibujos cuadrados con una identidad para cada pieza. OpenCV es el conjunto de herramientas que usamos para analizarlas. No es una cámara que entiende todo sola. Debemos calibrar: relacionar la imagen, las casillas y los lugares que alcanza el brazo. Aprendimos que importan la luz, las etiquetas visibles y la posición de cámara y tablero. Si algo cambia, revisamos las referencias antes de seguir.",
    "kind": "vision",
    "tags": [
      "Computadora + cámara",
      "Etiquetas para identificar",
      "Referencias del tablero"
    ]
  },
  {
    "id": "conexiones",
    "title": "Cada señal\ntiene una función.",
    "kicker": "07 / ELECTRÓNICA Y COMUNICACIÓN",
    "lead": "La placa NUCLEO contiene el controlador STM32: recibe las instrucciones de la Raspberry y genera las señales para motores y electroimán.",
    "detail": "Un cable USB lleva órdenes y lecturas. Las fuentes entregan electricidad a cada parte; el módulo del imán funciona como un interruptor electrónico.",
    "role": "Hardware · segundo aprendiz",
    "seconds": 65,
    "notes": "La NUCLEO es la otra placa del proyecto y contiene un controlador STM32. Es un pequeño circuito programable que recibe instrucciones de la Raspberry por un cable USB y produce las señales para los motores y el electroimán. Por ese mismo cable devuelve lecturas de posición y respuestas, para que la aplicación las revise. Lo usamos porque el diseño EduSCARA ya organiza ese control con esta placa. Así, la Raspberry coordina la tarea y la STM32 ejecuta las órdenes físicas. Las fuentes de alimentación entregan la electricidad adecuada a cada parte. El módulo del imán funciona como un interruptor electrónico: la placa da la orden y el módulo maneja la corriente que necesita el imán. Revisamos conexiones, polaridad y recorrido libre. Mantenemos accesible el corte físico de alimentación; un botón en pantalla no sustituye ese corte.",
    "kind": "wiring",
    "tags": [
      "Raspberry coordina",
      "STM32 ejecuta",
      "Alimentación y conexiones"
    ]
  },
  {
    "id": "app-manual",
    "title": "App 01.\nControl en tus manos.",
    "kicker": "08 / JAQUEBOT MANUAL",
    "lead": "La primera app tiene botones para probar el brazo: mover base y codo, preparar un destino, subir o bajar y encender o apagar el imán.",
    "detail": "La creamos para comprobar cada función antes de combinarla con el ajedrez. Preparar un destino no mueve el brazo: hay que confirmar la orden.",
    "role": "Desarrollador",
    "seconds": 60,
    "notes": "JaqueBot manual permite preparar una posición y pedir el movimiento desde botones. También sube o baja la herramienta y controla el imán. La hicimos para probar cada parte antes de unirla al ajedrez. Preparar un destino no mueve el robot: debe confirmarse la orden. El programa guarda datos, como la posición deseada y la leída. Al comenzar prepara la comunicación; luego espera acciones del usuario y comprueba condiciones. Si no confirma la llegada, bloquea el siguiente paso. Es parecido a seguir una receta: no continúa si falta un paso anterior. Las dos aplicaciones comparten el mismo brazo; por eso una sola puede controlarlo a la vez.",
    "kind": "app-manual",
    "tags": [
      "Probar cada parte",
      "Preparar y confirmar",
      "Control del imán"
    ]
  },
  {
    "id": "app-ajedrez",
    "title": "App 02.\nEl tablero responde.",
    "kicker": "09 / JAQUEBOT AJEDREZ",
    "lead": "Stockfish es un programa que calcula jugadas de ajedrez. Lo usamos como jugador digital; nuestra app conecta esa decisión con la cámara y el brazo.",
    "detail": "La cámara observa, python-chess comprueba las reglas, Stockfish elige una respuesta y la app coordina el traslado. Después se revisa otra imagen.",
    "role": "Desarrollador",
    "seconds": 60,
    "notes": "JaqueBot Ajedrez reúne cámara, reglas y movimientos. Usa Stockfish, un programa especializado en calcular jugadas de ajedrez. Analiza la posición y elige una respuesta; lo usamos para contar con un jugador digital ya desarrollado. No reconoce las imágenes ni mueve motores. Otro programa, python-chess, comprueba las reglas, y nuestra aplicación conecta todo. Imaginemos que una persona lleva un peón de e dos a e cuatro y pulsa Terminé mi jugada. La cámara observa el cambio; el programa comprueba si es válido y consulta a Stockfish. Cuando recibe la respuesta, prepara el recorrido del brazo y coordina el imán para trasladar la pieza. Al terminar, retira el brazo y revisa otra imagen. Stockfish calcula la jugada; Codex nos ayudó a programar el sistema. Son funciones diferentes.",
    "kind": "app-chess",
    "tags": [
      "Observar y validar",
      "Calcular la jugada",
      "Mover y revisar"
    ]
  },
  {
    "id": "demostracion",
    "title": "Del cálculo\na la pieza real.",
    "kicker": "10 / DEMOSTRACIÓN EN VIVO",
    "lead": "El robot calcula su jugada mediante la app, mueve el brazo y activa el electroimán para recoger y trasladar la pieza.",
    "detail": "La demostración es supervisada. Observamos la toma, el transporte y la liberación; comprobamos que la pieza correcta termine en la casilla esperada.",
    "role": "Maquetador",
    "seconds": 55,
    "notes": "Ahora observamos la prueba preparada. El programa decide el destino; el brazo se acerca, el imán recoge y la pieza se libera al llegar. Supervisamos que tome una sola pieza. Después la cámara toma otra imagen para comprobar. La aplicación controla el robot; el modelo ayuda a explicar.",
    "kind": "demo",
    "tags": [
      "Jugada calculada",
      "Traslado físico",
      "Supervisión"
    ]
  },
  {
    "id": "fabricacion",
    "title": "Diseñar. Ensamblar.\nPoner a funcionar.",
    "kicker": "11 / FABRICACIÓN E INTEGRACIÓN",
    "lead": "Partimos de los archivos de EduSCARA. Usamos Autodesk Fusion, un programa de diseño 3D, para ajustar el tablero, las piezas y los soportes.",
    "detail": "La impresión 3D fabrica las piezas de plástico por capas. Después ensamblamos motores y engranajes, soldamos conexiones y organizamos cables.",
    "role": "Maquetador",
    "seconds": 25,
    "notes": "Descargamos los archivos de EduSCARA. Usamos Autodesk Fusion, un programa para ajustar piezas en tres dimensiones. La impresión 3D fabrica objetos añadiendo plástico por capas. Después ensamblamos engranajes y motores, fijamos soportes, soldamos conexiones y organizamos cables. Probamos cada parte antes de unir el sistema.",
    "kind": "making",
    "tags": [
      "Autodesk Fusion",
      "Adaptación EduSCARA",
      "Ensamble físico"
    ]
  },
  {
    "id": "limites",
    "title": "La precisión\ntambién se aprende.",
    "kicker": "12 / UN LÍMITE REAL",
    "lead": "En un tablero pequeño, las piezas quedan muy juntas. A veces el electroimán puede levantar más de una; por eso debemos estar pendientes durante el juego.",
    "detail": "El prototipo terminado requiere supervisión. La separación entre objetos y el tamaño de la herramienta influyen en la toma; el sistema no tiene un sensor que confirme el agarre.",
    "role": "Maquetador",
    "seconds": 20,
    "notes": "El tablero es pequeño y las piezas están muy juntas. A veces el imán puede levantar más de una. Por eso supervisamos las pruebas: el prototipo no puede trabajar solo en cualquier situación.",
    "kind": "limits",
    "tags": [
      "Piezas próximas",
      "Posible toma múltiple",
      "Supervisión necesaria"
    ]
  },
  {
    "id": "escala",
    "title": "Otra tarea.\nOtra escala.",
    "kicker": "13 / PROYECCIÓN INDUSTRIAL",
    "lead": "Para producción habría que adaptar el tamaño del robot, su alcance y la herramienta a los objetos que deba mover o clasificar.",
    "detail": "El ahorro de tiempo debe medirse en el proceso real. Alcance, carga, separación, seguridad y fiabilidad se verifican antes de plantear un uso productivo.",
    "role": "Maquetador",
    "seconds": 10,
    "notes": "Para esa empresa adaptaríamos tamaño, herramienta y sensores. Mediríamos tiempos y errores antes de afirmar que el brazo mejora la tarea.",
    "kind": "industry",
    "tags": [
      "Adaptar tamaño",
      "Adecuar herramienta",
      "Medir resultados"
    ]
  },
  {
    "id": "presupuesto",
    "title": "Construir\ncon criterio.",
    "kicker": "14 / VIABILIDAD Y PRESUPUESTO · COP",
    "lead": "Aprovechamos la Raspberry Pi y la cámara prestadas por el profesor Ricardo. Así evitamos comprarlas para esta prueba escolar.",
    "detail": "Las compras con importe conocido suman $739.474,77 COP. El anexo del guion reúne los materiales y los cálculos; falta registrar el precio de dos potenciómetros adicionales.",
    "role": "Gestor de proyecto",
    "seconds": 20,
    "notes": "El presupuesto está en el anexo. Las compras documentadas rondan los setecientos cuarenta mil pesos. Aprovechamos la Raspberry y la cámara prestadas por el profesor Ricardo: así evitamos comprarlas para este prototipo. Ahora explicaremos cómo programamos y comprobamos el sistema.",
    "kind": "budget",
    "tags": [
      "Equipos prestados",
      "Compras y aportes separados",
      "Detalle en el anexo"
    ]
  },
  {
    "id": "cierre",
    "title": "JaqueBot",
    "kicker": "15 / DEL PROTOTIPO A NUEVAS POSIBILIDADES",
    "lead": "Ajedrez que cobra movimiento.",
    "detail": "Llevamos a la práctica Matemáticas, Sistemas y los cursos previos: coordenadas, ángulos, conexiones y programación. Aprendimos a construir, comprobar y trabajar en equipo. Ahora mostramos el proceso.",
    "role": "Maquetador y Gestor de proyecto",
    "seconds": 10,
    "notes": "Aplicamos Matemáticas y Sistemas: coordenadas, ángulos, programación y conexiones aprendidas en los cursos de Arduino. Aprendimos a cuidar la luz y las etiquetas, repartir tareas y comprobar cada parte del robot.\n\nGestor de proyecto, 11:55 a 12:00: Veamos en tres minutos cómo construimos y probamos JaqueBot.",
    "kind": "closing",
    "tags": [
      "12 min · exposición y demo",
      "3 min · video",
      "5 min · preguntas"
    ]
  }
];

export const questions = [
  {
    "question": "¿Cuál es el objetivo principal?",
    "answer": "Aprender a integrar visión artificial, inteligencia artificial y mecánica, aplicando Matemáticas, geometría y Sistemas. Los cursos previos de Arduino nos dieron bases de programación, electrónica y conexiones; en JaqueBot las aplicamos con STM32. Usamos el ajedrez para relacionar una imagen, una decisión y un movimiento. La aplicación industrial es una posibilidad que requiere adaptación y pruebas."
  },
  {
    "question": "¿Qué hace cada componente en una frase?",
    "answer": "La cámara observa; la Raspberry organiza y calcula con los programas; la STM32 envía señales; los servomotores mueven; los sensores aportan posición y el electroimán sujeta o libera."
  },
  {
    "question": "¿Qué es Stockfish y por qué lo usaron?",
    "answer": "Es un programa que analiza ajedrez y calcula una jugada. Lo usamos como jugador digital, para concentrarnos en conectar esa decisión con la cámara y el movimiento del brazo."
  },
  {
    "question": "¿ChatGPT juega la partida?",
    "answer": "En este proyecto no. Codex ayudó durante la programación. Durante una partida, OpenCV reconoce las etiquetas, python-chess comprueba las reglas y Stockfish calcula la respuesta."
  },
  {
    "question": "¿Por qué usar dos placas?",
    "answer": "Son tareas distintas que trabajan juntas. La Raspberry es la computadora que ejecuta las aplicaciones; la STM32 es el controlador que recibe instrucciones y produce las señales para los elementos físicos."
  },
  {
    "question": "¿Cómo sabe qué pieza está viendo?",
    "answer": "Cada pieza lleva una etiqueta cuadrada con una identidad. La cámara toma la imagen y OpenCV reconoce esas identidades. Las referencias y las medidas previas permiten relacionarlas con las casillas."
  },
  {
    "question": "¿Por qué no basta con conectar el robot?",
    "answer": "Porque el programa necesita referencias del equipo real: dónde está el tablero, qué posición tienen los motores y hasta dónde debe bajar la herramienta. Conectar el cable no mide ni comprueba todo eso."
  },
  {
    "question": "¿Qué sucede si recoge dos piezas?",
    "answer": "Es una limitación del tablero pequeño y la cercanía de las piezas. Supervisamos la toma y revisamos el tablero antes de continuar. Para mejorarla habría que revisar tamaño, separación y herramienta; el sistema actual no cuenta las piezas sujetadas."
  },
  {
    "question": "¿Qué error concreto les dejó una enseñanza?",
    "answer": "En una captura hubo lecturas de posición que no coincidían. Aprendimos a comprobar la llegada y a bloquear el traslado si falta confirmación. Una respuesta electrónica no demuestra por sí sola que la pieza llegó bien."
  },
  {
    "question": "¿Qué construyeron ustedes y qué aprovecharon de otros?",
    "answer": "EduSCARA aportó el diseño y el control base publicados. Nuestro trabajo reunió el montaje, las adaptaciones del tablero y soportes, las dos aplicaciones y la integración de cámara, juego y electroimán. Reconocemos los autores de las herramientas que utilizamos."
  },
  {
    "question": "¿Cuánto costó?",
    "answer": "Llevamos alrededor de 740.000 pesos en compras documentadas, incluida la fuente regulable adicional de 28.000. Hay dos potenciómetros adicionales cuyo precio falta registrar. La Raspberry y la cámara son préstamos del profesor Ricardo. En el anexo están las cantidades, los valores y la separación entre compras y equipos prestados; no damos un costo definitivo mientras falten esos datos."
  },
  {
    "question": "¿Ya demostraron que ahorra tiempo en una industria?",
    "answer": "Todavía no. Separar cajas de medicamentos es un ejemplo para explicar una posible aplicación, no una función industrial ya validada. Habría que adaptar tamaño, herramienta y sensores a los objetos, y comparar tiempos y errores con la tarea anterior. También se evaluaría si reduce esfuerzo repetitivo de hombros y brazos, sin prometer prevenir lesiones."
  },
  {
    "question": "¿Qué aprendieron como equipo?",
    "answer": "A aplicar Matemáticas y Sistemas al robot: relacionar imágenes, coordenadas, ángulos y movimiento; usar bases de programación, electrónica y conexiones practicadas en los cursos de Arduino; y reconocer cómo influyen la luz y las etiquetas. La placa del proyecto es STM32. También aprendimos a repartir tareas, probar por partes y comprobar los cambios propuestos por Codex."
  },
  {
    "question": "¿El prototipo puede trabajar sin supervisión?",
    "answer": "El programa calcula y coordina una secuencia, pero las pruebas requieren supervisión por el agarre, la cercanía de las piezas y las referencias que se comprueban a mano."
  },
  {
    "question": "¿Por qué necesitan un electroimán?",
    "answer": "Es la herramienta que usamos para sujetar una parte metálica y soltarla con una orden eléctrica. Fue útil para demostrar el traslado; para otros materiales habría que elegir otra herramienta o adaptar el objeto."
  }
];

export const sources = [
  {
    "label": "EduSCARA · plataforma original",
    "url": "https://doi.org/10.1016/j.ohx.2026.e00761"
  },
  {
    "label": "EduSCARA · diseños originales",
    "url": "https://doi.org/10.17632/m46jnn2cmb.3"
  },
  {
    "label": "ST · NUCLEO-F446RE",
    "url": "https://www.st.com/en/evaluation-tools/nucleo-f446re.html"
  },
  {
    "label": "Raspberry Pi · AI Camera",
    "url": "https://www.raspberrypi.com/documentation/accessories/ai-camera.html"
  },
  {
    "label": "OpenCV · detección ArUco",
    "url": "https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html"
  },
  {
    "label": "python-chess · reglas y motor",
    "url": "https://python-chess.readthedocs.io/en/latest/"
  },
  {
    "label": "Stockfish · motor de ajedrez",
    "url": "https://stockfishchess.org/"
  }
];
