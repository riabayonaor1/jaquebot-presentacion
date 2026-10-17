export const guion = {
  "version": "Guion claro · 16 de octubre de 2026",
  "roles": [
    {
      "role": "Gestor de proyecto",
      "time": "00:00 a 02:00",
      "actions": "Abrir los capítulos 1, 2 y 3. Explicar el objetivo y señalar el recorrido cámara → programas → placa → movimiento → revisión. Pasar brevemente al capítulo 15 para el resumen de presupuesto. La tabla completa se consulta en el anexo; no leer filas, sumas largas ni centavos. No operar el brazo en este bloque.",
      "parts": [
        {
          "chapter": 1,
          "time": "00:00 a 00:30",
          "label": "Presentación y objetivo",
          "say": "Buenos días, jurados, docentes y compañeros. Somos JaqueBot, del grado once C de la Institución Educativa Carlos Julio Torrado Peñaranda, del Técnico en Sistemas Teleinformáticos. Nuestro objetivo fue desarrollar un brazo robótico para mover objetos y explorar cómo agilizar tareas repetitivas. Hoy presentamos el prototipo construido: Ajedrez que cobra movimiento."
        },
        {
          "chapter": 2,
          "time": "00:30 a 01:05",
          "label": "Para qué sirve",
          "say": "Imaginen una empresa que separa cajas de medicamentos por destino. Un brazo más grande podría llevar cada caja al lugar indicado por su etiqueta, agilizar el trabajo y reducir errores; tendríamos que comprobarlo. En Tiempos modernos, Charles Chaplin mostró lo agotador de repetir movimientos en una fábrica. Nos interesa reducir ese esfuerzo repetitivo de hombros y brazos. En el colegio elegimos el ajedrez para demostrar la idea de reconocer, decidir y trasladar."
        },
        {
          "chapter": 3,
          "time": "01:05 a 01:35",
          "label": "Qué construimos",
          "say": "Para demostrar esa idea usamos EduSCARA, un diseño educativo publicado, y construimos el prototipo. Creamos una aplicación para probar el brazo y otra para jugar ajedrez. El recorrido es sencillo: la cámara observa, el programa interpreta, la placa recibe instrucciones y los motores actúan. Después se revisa el resultado. Las pruebas requieren supervisión."
        },
        {
          "chapter": 15,
          "time": "01:35 a 01:55",
          "label": "Presupuesto breve; detalle en el anexo",
          "say": "El presupuesto está en el anexo. Las compras documentadas rondan los setecientos cuarenta mil pesos. Aprovechamos la Raspberry y la cámara prestadas por el profesor Ricardo: así evitamos comprarlas para este prototipo. Ahora explicaremos cómo programamos y comprobamos el sistema.",
          "maximum_spoken_seconds": 20
        }
      ]
    },
    {
      "role": "Ingeniero de IA",
      "time": "02:00 a 04:00",
      "actions": "Abrir el capítulo 4. Mostrar la conversación reconstruida y su identificación. Relacionar lo mostrado con el código y los registros del proyecto. No presentar una reconstrucción como captura literal del historial ni atribuir a Codex la elección de jugadas.",
      "parts": [
        {
          "chapter": 4,
          "time": "02:00 a 03:00",
          "label": "Cómo nos ayudó la inteligencia artificial",
          "say": "Usamos ChatGPT Codex, una herramienta de inteligencia artificial que ayuda a entender, escribir y revisar programas mediante una conversación. La elegimos para adaptar el código de EduSCARA y construir las dos aplicaciones. Primero explicábamos qué componentes teníamos, qué queríamos lograr, los límites del brazo y qué problema observábamos. Por ejemplo: el brazo recibió una orden, pero la posición leída no coincide con el destino. Después pedíamos revisar esa parte sin cambiar lo que ya funcionaba. Codex proponía cambios y pruebas; nosotros aportábamos medidas, observábamos el robot y comprobábamos el resultado. La ayuda era útil porque permitía trabajar un problema por partes. Recibir una respuesta convincente no era suficiente para darla por correcta."
        },
        {
          "chapter": 4,
          "time": "03:00 a 04:00",
          "label": "Qué aprendimos de los errores",
          "say": "Durante una captura de ajedrez encontramos lecturas de posición distintas. Aprendimos algo sencillo: que el controlador responda que recibió una orden no demuestra que el brazo ya llegó. Por eso reforzamos el programa para revisar varias lecturas de posición y bloquear la operación si no coinciden con lo esperado. Tampoco debe repetir un traslado fallido sin revisar dónde quedó la pieza. Esto mejoró la comprobación del programa; para conocer la causa física debemos observar y medir el montaje. Aprendimos a registrar los fallos, guardar versiones y cambiar una cosa cada vez. La inteligencia artificial apoyó la programación; el equipo siguió siendo responsable de construir, probar y explicar lo realizado."
        }
      ]
    },
    {
      "role": "Hardware primer aprendiz",
      "time": "04:00 a 06:00",
      "actions": "Abrir los capítulos 5 y 6. Señalar base, codo, piezas impresas, servomotores, sensores de posición y electroimán en el modelo 3D y en el prototipo quieto. Mantener las manos fuera de su recorrido cuando esté funcionando.",
      "parts": [
        {
          "chapter": 5,
          "time": "04:00 a 05:00",
          "label": "Estructura, motores y sensores",
          "say": "Esta es la parte que produce el movimiento. La base gira y el codo cambia la posición del extremo, de forma parecida a nuestro brazo. Usamos servomotores: motores que reciben la orden de girar hasta una posición determinada. Es como una puerta que debe abrirse hasta cierto ángulo: necesitamos que alcance una posición, no que dé vueltas sin parar. Los engranajes transmiten ese movimiento y los tornillos sujetan el conjunto. Los potenciómetros son como perillas que cambian una señal al girar; los usamos como sensores, es decir, para obtener información de la posición. El programa interpreta esa señal para estimar cuánto giraron la base y el codo. Los usamos para comparar la posición esperada con la leída. Una pieza floja puede afectar esa precisión, aunque el programa esté bien escrito."
        },
        {
          "chapter": 6,
          "time": "05:00 a 06:00",
          "label": "Subir, recoger y soltar",
          "say": "El extremo también puede subir y bajar. En la pantalla ese movimiento se llama eje Z; aquí significa simplemente altura de la herramienta. Para tomar una pieza usamos un electroimán, un dispositivo que atrae una parte metálica cuando recibe electricidad. Lo elegimos porque podemos encenderlo para sujetar y apagarlo para liberar. La secuencia es acercarse, bajar, encender el imán, subir, trasladar, bajar y soltar. Las piezas deben tener una parte que el imán pueda atraer. La pantalla indica si se ordenó encenderlo, pero no mide la fuerza ni confirma cuántas piezas levantó. Tampoco tenemos un sensor que mida directamente la altura. Por eso comprobamos la preparación y observamos la toma y la liberación."
        }
      ]
    },
    {
      "role": "Hardware segundo aprendiz",
      "time": "06:00 a 08:00",
      "actions": "Abrir los capítulos 7 y 8. Enfocar primero la Raspberry Pi, después la cámara Sony, las etiquetas de las piezas, la NUCLEO y la alimentación. Explicar las conexiones sin convertir el guion en instrucciones de cableado. No confundir la vista 3D con una lectura del robot en ese momento.",
      "parts": [
        {
          "chapter": 7,
          "time": "06:00 a 07:00",
          "label": "La computadora y los ojos del robot",
          "say": "La Raspberry Pi es una computadora pequeña que organiza el trabajo: ejecuta las aplicaciones, recibe la imagen y coordina lo que debe ocurrir. La cámara es una Raspberry Pi AI Camera con sensor Sony. Su función aquí es fotografiar el tablero; no decide la jugada. Sobre las piezas hay etiquetas ArUco: pequeños dibujos cuadrados con una identidad distinta, como una etiqueta con el nombre de cada pieza. Los elegimos para distinguir las piezas con más claridad. OpenCV es un conjunto de herramientas para analizar imágenes; lo usamos para reconocer esas etiquetas y ubicarlas. Antes debemos calibrar: enseñar la relación entre lo que aparece en la imagen, las casillas y los lugares que alcanza el brazo. Si movemos cámara o tablero, revisamos esa relación."
        },
        {
          "chapter": 8,
          "time": "07:00 a 08:00",
          "label": "La placa que ejecuta las órdenes",
          "say": "La NUCLEO es la otra placa del proyecto y contiene un controlador STM32. Es un pequeño circuito programable que recibe instrucciones de la Raspberry por un cable USB y produce las señales para los motores y el electroimán. Por ese mismo cable devuelve lecturas de posición y respuestas, para que la aplicación las revise. Lo usamos porque el diseño EduSCARA ya organiza ese control con esta placa. Así, la Raspberry coordina la tarea y la STM32 ejecuta las órdenes físicas. Las fuentes de alimentación entregan la electricidad adecuada a cada parte. El módulo del imán funciona como un interruptor electrónico: la placa da la orden y el módulo maneja la corriente que necesita el imán. Revisamos conexiones, polaridad y recorrido libre. Mantenemos accesible el corte físico de alimentación; un botón en pantalla no sustituye ese corte."
        }
      ]
    },
    {
      "role": "Desarrollador",
      "time": "08:00 a 10:00",
      "actions": "Abrir los capítulos 9 y 10. Mostrar las capturas reales de ambas aplicaciones. Usar la secuencia e2 a e4 como ejemplo narrado; no prometer una respuesta fija de Stockfish ni ejecutar valores del guion como órdenes de movimiento. Si se nombran Python o C, usar la explicación del glosario en una respuesta, no añadir una lista de lenguajes a la exposición.",
      "parts": [
        {
          "chapter": 9,
          "time": "08:00 a 08:50",
          "label": "La aplicación de control manual",
          "say": "JaqueBot manual permite preparar una posición y pedir el movimiento desde botones. También sube o baja la herramienta y controla el imán. La hicimos para probar cada parte antes de unirla al ajedrez. Preparar un destino no mueve el robot: debe confirmarse la orden. El programa guarda datos, como la posición deseada y la leída. Al comenzar prepara la comunicación; luego espera acciones del usuario y comprueba condiciones. Si no confirma la llegada, bloquea el siguiente paso. Es parecido a seguir una receta: no continúa si falta un paso anterior. Las dos aplicaciones comparten el mismo brazo; por eso una sola puede controlarlo a la vez."
        },
        {
          "chapter": 10,
          "time": "08:50 a 10:00",
          "label": "La aplicación de ajedrez y Stockfish",
          "say": "JaqueBot Ajedrez reúne cámara, reglas y movimientos. Usa Stockfish, un programa especializado en calcular jugadas de ajedrez. Analiza la posición y elige una respuesta; lo usamos para contar con un jugador digital ya desarrollado. No reconoce las imágenes ni mueve motores. Otro programa, python-chess, comprueba las reglas, y nuestra aplicación conecta todo. Imaginemos que una persona lleva un peón de e dos a e cuatro y pulsa Terminé mi jugada. La cámara observa el cambio; el programa comprueba si es válido y consulta a Stockfish. Cuando recibe la respuesta, prepara el recorrido del brazo y coordina el imán para trasladar la pieza. Al terminar, retira el brazo y revisa otra imagen. Stockfish calcula la jugada; Codex nos ayudó a programar el sistema. Son funciones diferentes."
        }
      ]
    },
    {
      "role": "Maquetador",
      "time": "10:00 a 11:55",
      "actions": "Orden de capítulos: 12, 11, 13, 14 y 16. Tener preparada una prueba breve y ensayada. Una persona opera la aplicación real y otra supervisa la toma y el recorrido. Reservar 20 segundos de observación sin hablar dentro del bloque de demostración de 10:25 a 11:15. Si la prueba física no está preparada, explicar el recorrido con el modelo y usar los registros disponibles como evidencia, identificándolos; no anunciar un resultado que no se esté viendo.",
      "parts": [
        {
          "chapter": 12,
          "time": "10:00 a 10:25",
          "label": "Cómo se construyó",
          "say": "Descargamos los archivos de EduSCARA. Usamos Autodesk Fusion, un programa para ajustar piezas en tres dimensiones. La impresión 3D fabrica objetos añadiendo plástico por capas. Después ensamblamos engranajes y motores, fijamos soportes, soldamos conexiones y organizamos cables. Probamos cada parte antes de unir el sistema."
        },
        {
          "chapter": 11,
          "time": "10:25 a 11:15",
          "label": "Demostración supervisada",
          "say": "Ahora observamos la prueba preparada. El programa decide el destino; el brazo se acerca, el imán recoge y la pieza se libera al llegar. Supervisamos que tome una sola pieza. Después la cámara toma otra imagen para comprobar. La aplicación controla el robot; el modelo ayuda a explicar."
        },
        {
          "chapter": 13,
          "time": "11:15 a 11:30",
          "label": "Qué dificultad permanece",
          "say": "El tablero es pequeño y las piezas están muy juntas. A veces el imán puede levantar más de una. Por eso supervisamos las pruebas: el prototipo no puede trabajar solo en cualquier situación."
        },
        {
          "chapter": 14,
          "time": "11:30 a 11:40",
          "label": "Qué cambiaría para otra tarea",
          "say": "Para esa empresa adaptaríamos tamaño, herramienta y sensores. Mediríamos tiempos y errores antes de afirmar que el brazo mejora la tarea."
        },
        {
          "chapter": 16,
          "time": "11:40 a 11:55",
          "label": "Qué aprendimos",
          "say": "Aprendimos a ensamblar, programar y repartir tareas. También a medir antes de suponer y probar por partes para encontrar errores. Entendimos que diseño, conexiones y programa deben trabajar juntos."
        }
      ]
    }
  ],
  "video_handoff": {
    "role": "Gestor de proyecto",
    "time": "11:55 a 12:00",
    "chapter": 16,
    "say": "Veamos en tres minutos cómo construimos y probamos JaqueBot."
  },
  "glossary": [
    {
      "term": "Brazo robótico",
      "what": "Un mecanismo con partes móviles que pueden colocarse mediante un programa.",
      "use": "Llevar una herramienta hasta un objeto y trasladarlo.",
      "why": "Permite explorar tareas repetitivas de recoger, mover y, con adaptación, clasificar objetos."
    },
    {
      "term": "EduSCARA",
      "what": "Un diseño abierto de brazo robótico educativo con archivos y código publicados.",
      "use": "Servir como base de estructura y control.",
      "why": "Permite estudiar un proyecto existente y dedicar el trabajo escolar al montaje, las adaptaciones y las aplicaciones. Se reconoce a sus autores."
    },
    {
      "term": "Autodesk Fusion",
      "what": "Un programa de diseño de objetos en tres dimensiones.",
      "use": "Revisar medidas y adaptar el tablero, piezas y soportes antes de fabricarlos.",
      "why": "Permite comprobar cómo encajan las partes y preparar las adaptaciones del proyecto."
    },
    {
      "term": "Impresión 3D",
      "what": "Una forma de fabricar que construye el objeto añadiendo material por capas.",
      "use": "Convertir archivos de diseño en piezas físicas del robot y su montaje.",
      "why": "Permite producir y modificar piezas adaptadas al proyecto. En este caso se utilizó material plástico."
    },
    {
      "term": "Servomotor",
      "what": "Un motor que recibe una orden para alcanzar una posición determinada.",
      "use": "Mover la base, el codo o el mecanismo vertical según el montaje.",
      "why": "El robot necesita dirigir la herramienta a lugares concretos, no mantener un giro continuo. La orden por sí sola no prueba precisión física."
    },
    {
      "term": "Potenciómetro",
      "what": "Un componente cuya señal eléctrica cambia cuando gira.",
      "use": "Usarse como sensor para estimar el ángulo de la base o del codo.",
      "why": "Permite comparar dónde se esperaba llegar con lo que indica el montaje."
    },
    {
      "term": "Sensor",
      "what": "Un elemento que convierte una característica física, como posición o luz, en información.",
      "use": "Aportar datos al programa.",
      "why": "Ayuda a comprobar lo que ocurre. En JaqueBot no todos los estados se miden: faltan sensores directos de altura y agarre."
    },
    {
      "term": "Eje Z",
      "what": "El nombre del movimiento vertical del extremo.",
      "use": "Subir y bajar la herramienta al recoger o dejar una pieza.",
      "why": "El brazo debe pasar sobre las otras piezas y acercarse al objeto solo cuando corresponde."
    },
    {
      "term": "Electroimán",
      "what": "Un dispositivo que produce atracción magnética cuando recibe electricidad.",
      "use": "Tomar y liberar la parte metálica de una pieza.",
      "why": "Permite controlar la sujeción desde el programa, encendiéndolo o apagándolo. No atrae cualquier material ni garantiza recoger una sola pieza."
    },
    {
      "term": "Raspberry Pi",
      "what": "Una computadora pequeña montada en una placa.",
      "use": "Ejecutar las aplicaciones, procesar las imágenes y coordinar la tarea.",
      "why": "Reúne en el prototipo la interfaz, el análisis del tablero y el cálculo de jugadas."
    },
    {
      "term": "Raspberry Pi AI Camera / sensor Sony",
      "what": "El módulo de cámara utilizado para obtener las imágenes; su sensor es Sony IMX500.",
      "use": "Observar el tablero y las etiquetas de las piezas.",
      "why": "Proporciona las imágenes que analiza la Raspberry. El nombre AI Camera no significa que en esta aplicación su sensor elija jugadas ni que haga por sí mismo el reconocimiento ArUco."
    },
    {
      "term": "ArUco",
      "what": "Una familia de etiquetas cuadradas con dibujos que representan identidades.",
      "use": "Distinguir piezas y ubicar referencias del tablero en la imagen.",
      "why": "Permite reconocer identidades definidas en lugar de depender solo de la apariencia o del color de una pieza."
    },
    {
      "term": "OpenCV",
      "what": "Un conjunto de herramientas de programación para trabajar con imágenes.",
      "use": "Reconocer las etiquetas y situarlas en el tablero.",
      "why": "Aporta funciones de visión ya desarrolladas que el equipo integra en su aplicación."
    },
    {
      "term": "Calibrar",
      "what": "Medir y guardar referencias para relacionar el programa con el montaje real.",
      "use": "Saber dónde está cada casilla y qué movimiento corresponde.",
      "why": "Una imagen o un número no coinciden automáticamente con una posición física. Cámara, tablero y motores requieren sus propias comprobaciones."
    },
    {
      "term": "NUCLEO / STM32",
      "what": "NUCLEO es la placa utilizada; STM32 es el circuito programable que contiene.",
      "use": "Recibir órdenes por USB, producir señales para el movimiento y consultar los sensores.",
      "why": "Forma parte del control original de EduSCARA y permite que la Raspberry se concentre en coordinar las aplicaciones."
    },
    {
      "term": "USB",
      "what": "Una conexión por cable para intercambiar datos.",
      "use": "Comunicar las órdenes y respuestas entre la Raspberry y la placa de control.",
      "why": "Es el enlace que utiliza el control existente. Solo una aplicación lo controla a la vez."
    },
    {
      "term": "Fuente de alimentación",
      "what": "Un dispositivo que entrega electricidad con las características que necesita un equipo.",
      "use": "Alimentar computadora, motores o electroimán según el circuito.",
      "why": "Esos elementos no se alimentan todos de la misma forma; una salida de control no debe suministrar directamente toda la corriente del imán."
    },
    {
      "term": "MOSFET / módulo de potencia",
      "what": "Un interruptor electrónico controlado por una señal pequeña.",
      "use": "Permitir o cortar la corriente que alimenta el electroimán.",
      "why": "La placa da la orden y el módulo maneja la corriente del dispositivo. Las protecciones concretas se describen únicamente según el circuito instalado y comprobado."
    },
    {
      "term": "Aplicación manual",
      "what": "La pantalla con botones para controlar el brazo.",
      "use": "Preparar y probar por separado movimiento, altura e imán.",
      "why": "Permite aprender y detectar problemas antes de coordinar una jugada completa."
    },
    {
      "term": "Stockfish",
      "what": "Un programa especializado en analizar posiciones de ajedrez y calcular jugadas.",
      "use": "Elegir la respuesta del robot durante una partida.",
      "why": "Permite usar un jugador digital ya desarrollado y concentrar el trabajo en conectar tablero, reglas y movimiento. No reconoce imágenes ni controla motores."
    },
    {
      "term": "python-chess",
      "what": "Un conjunto de herramientas de programación con las reglas y el estado de una partida.",
      "use": "Comprobar movimientos y mantener la posición del ajedrez.",
      "why": "Evita que el equipo tenga que reescribir todas las reglas para reunirlas con la cámara y Stockfish."
    },
    {
      "term": "ChatGPT Codex",
      "what": "Una herramienta de inteligencia artificial con la que se conversa para trabajar sobre programas.",
      "use": "Comprender código, proponer cambios, preparar pruebas e interfaces.",
      "why": "Ayudó a adaptar EduSCARA a las necesidades del proyecto. El equipo aporta medidas y comprobaciones; Codex no elige las jugadas en esta implementación."
    },
    {
      "term": "Código / programa",
      "what": "El conjunto de instrucciones escritas para que una computadora o placa realice una tarea.",
      "use": "Organizar qué hacer, cuándo hacerlo y qué revisar.",
      "why": "Los componentes conectados no se coordinan solos: necesitan instrucciones y comprobaciones."
    },
    {
      "term": "Python y C",
      "what": "Dos lenguajes para escribir instrucciones de programación.",
      "use": "Python organiza las aplicaciones; C se usa en el programa que controla la placa STM32.",
      "why": "Se emplearon las herramientas adecuadas a cada parte y se aprovechó la base original de EduSCARA. Solo se nombran si el jurado pregunta por la programación."
    },
    {
      "term": "Firmware",
      "what": "El programa que se guarda y ejecuta dentro de una placa de control.",
      "use": "Convertir órdenes en señales y lecturas del equipo.",
      "why": "Permite que la STM32 maneje los elementos físicos. En la exposición basta decir «programa de la placa»."
    },
    {
      "term": "Máquina de estados",
      "what": "Una organización del programa por etapas, con condiciones para pasar de una a otra.",
      "use": "Separar turno humano, comprobación, cálculo, traslado y revisión.",
      "why": "Evita tratar una orden recibida como si toda la tarea ya estuviera terminada. En la exposición se explica con la comparación de una receta."
    }
  ]
};
