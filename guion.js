export const guion = {
  "version": "Guion claro · 16 de octubre de 2026",
  "roles": [
    {
      "role": "Gestor de proyecto",
      "time": "00:00 a 02:00",
      "actions": "DIAPOSITIVA 1 «JaqueBot» (portada) → DIAPOSITIVA 2 «Del tablero a la industria.» → DIAPOSITIVA 3 «Una decisión. Un movimiento.» → DIAPOSITIVA 15 «Construir con criterio.». Presentar el objetivo de aprendizaje, la utilidad y el recorrido del sistema. Mostrar el presupuesto solo durante 20 segundos; el detalle queda en el anexo.",
      "parts": [
        {
          "chapter": 1,
          "time": "00:00 a 00:30",
          "label": "Presentación y objetivo",
          "say": "Buenos días, jurados, docentes y compañeros. Somos JaqueBot, del grado once C de la Institución Educativa Carlos Julio Torrado Peñaranda, del Técnico en Sistemas Teleinformáticos. Nuestro objetivo fue aprender a integrar visión artificial, inteligencia artificial y mecánica, aplicando lo visto en Matemáticas y Sistemas para mover objetos con un brazo robótico. JaqueBot: Ajedrez que cobra movimiento.",
          "slide_title": "JaqueBot",
          "slide_reference": "DIAPOSITIVA 1 «JaqueBot» (portada)",
          "actions": "Mostrar DIAPOSITIVA 1 «JaqueBot» (portada). Presentar al equipo, nombrar la institución y explicar el objetivo de aprendizaje."
        },
        {
          "chapter": 2,
          "time": "00:30 a 01:05",
          "label": "Para qué sirve",
          "say": "Imaginen una empresa que separa cajas de medicamentos por destino. Un brazo más grande podría llevar cada caja al lugar indicado por su etiqueta, agilizar el trabajo y reducir errores; tendríamos que comprobarlo. En Tiempos modernos, Charles Chaplin mostró lo agotador de repetir movimientos en una fábrica. Nos interesa reducir ese esfuerzo repetitivo de hombros y brazos. En el colegio elegimos el ajedrez para demostrar la idea de reconocer, decidir y trasladar.",
          "slide_title": "Del tablero\na la industria.",
          "slide_reference": "DIAPOSITIVA 2 «Del tablero a la industria.»",
          "actions": "Mostrar DIAPOSITIVA 2 «Del tablero a la industria.». Usar el ejemplo hipotético de cajas de medicamentos y la referencia a Chaplin para explicar la utilidad, sin afirmar un uso industrial ya validado."
        },
        {
          "chapter": 3,
          "time": "01:05 a 01:35",
          "label": "Qué construimos",
          "say": "Usamos EduSCARA, un diseño educativo publicado, y construimos el brazo y dos aplicaciones. Unimos matemáticas y geometría con Sistemas: programación, electrónica y conexiones practicadas antes en cursos de Arduino. En JaqueBot aplicamos esas bases con la placa STM32. Relacionamos una imagen con una posición y con el giro de los motores: la cámara observa, el programa interpreta y el brazo actúa.",
          "slide_title": "Una decisión.\nUn movimiento.",
          "slide_reference": "DIAPOSITIVA 3 «Una decisión. Un movimiento.»",
          "actions": "Mostrar DIAPOSITIVA 3 «Una decisión. Un movimiento.». Señalar la relación entre imagen, posición, órdenes y movimiento del prototipo construido."
        },
        {
          "chapter": 15,
          "time": "01:35 a 01:55",
          "label": "Presupuesto breve; detalle en el anexo",
          "say": "El presupuesto está en el anexo. Las compras documentadas rondan los setecientos cuarenta mil pesos. Aprovechamos la Raspberry y la cámara prestadas por el profesor Ricardo: así evitamos comprarlas para este prototipo. Ahora explicaremos cómo programamos y comprobamos el sistema.",
          "maximum_spoken_seconds": 20,
          "slide_title": "Construir\ncon criterio.",
          "slide_reference": "DIAPOSITIVA 15 «Construir con criterio.»",
          "actions": "Mostrar DIAPOSITIVA 15 «Construir con criterio.». Resumir en 20 segundos las compras y los préstamos que evitaron nuevas compras. Los cálculos completos se consultan en el anexo."
        }
      ]
    },
    {
      "role": "Ingeniero de IA",
      "time": "02:00 a 04:00",
      "actions": "DIAPOSITIVA 4 «La IA acompaña. Nosotros comprobamos.». Mostrar la conversación reconstruida identificada y los registros de pruebas. Explicar qué propuso Codex y qué comprobó el equipo.",
      "parts": [
        {
          "chapter": 4,
          "time": "02:00 a 03:00",
          "label": "Cómo nos ayudó la inteligencia artificial",
          "say": "Usamos ChatGPT Codex, una herramienta de inteligencia artificial que ayuda a entender, escribir y revisar programas mediante una conversación. La elegimos para adaptar el código de EduSCARA y construir las dos aplicaciones. Primero explicábamos qué componentes teníamos, qué queríamos lograr, los límites del brazo y qué problema observábamos. Por ejemplo: el brazo recibió una orden, pero la posición leída no coincide con el destino. Después pedíamos revisar esa parte sin cambiar lo que ya funcionaba. Codex proponía cambios y pruebas; nosotros aportábamos medidas, observábamos el robot y comprobábamos el resultado. La ayuda era útil porque permitía trabajar un problema por partes. Recibir una respuesta convincente no era suficiente para darla por correcta.",
          "slide_title": "La IA acompaña.\nNosotros comprobamos.",
          "slide_reference": "DIAPOSITIVA 4 «La IA acompaña. Nosotros comprobamos.»",
          "actions": "Mostrar DIAPOSITIVA 4 «La IA acompaña. Nosotros comprobamos.». Mostrar la reconstrucción identificada de la conversación y relacionarla con las pruebas y registros reales."
        },
        {
          "chapter": 4,
          "time": "03:00 a 04:00",
          "label": "Qué aprendimos de los errores",
          "say": "Durante una captura de ajedrez encontramos lecturas de posición distintas. Aprendimos algo sencillo: que el controlador responda que recibió una orden no demuestra que el brazo ya llegó. Por eso reforzamos el programa para revisar varias lecturas de posición y bloquear la operación si no coinciden con lo esperado. Tampoco debe repetir un traslado fallido sin revisar dónde quedó la pieza. Esto mejoró la comprobación del programa; para conocer la causa física debemos observar y medir el montaje. Aprendimos a registrar los fallos, guardar versiones y cambiar una cosa cada vez. La inteligencia artificial apoyó la programación; el equipo siguió siendo responsable de construir, probar y explicar lo realizado.",
          "slide_title": "La IA acompaña.\nNosotros comprobamos.",
          "slide_reference": "DIAPOSITIVA 4 «La IA acompaña. Nosotros comprobamos.»",
          "actions": "Mostrar DIAPOSITIVA 4 «La IA acompaña. Nosotros comprobamos.». Mostrar la reconstrucción identificada de la conversación y relacionarla con las pruebas y registros reales."
        }
      ]
    },
    {
      "role": "Hardware primer aprendiz",
      "time": "04:00 a 06:00",
      "actions": "DIAPOSITIVA 5 «Dos eslabones. Un espacio de trabajo.» → DIAPOSITIVA 6 «Acercar. Sujetar. Trasladar. Soltar.». Señalar estructura, motores, sensores y electroimán en el modelo y en el prototipo quieto. Los 90 grados son un ejemplo geométrico, no una orden de movimiento.",
      "parts": [
        {
          "chapter": 5,
          "time": "04:00 a 05:00",
          "label": "Estructura, motores y sensores",
          "say": "La base gira y el codo cambia la posición del extremo, como nuestro brazo. Usamos servomotores: motores que reciben la orden de alcanzar una posición, como una puerta que se abre hasta un ángulo. Los potenciómetros funcionan como sensores: su señal cambia al girar, como una perilla. Nos permiten estimar la posición y compararla con la esperada. Los engranajes transmiten movimiento y los tornillos sujetan el conjunto. También usamos matemáticas: X e Y indican dónde está el extremo sobre el tablero; los grados describen cuánto gira una articulación. Un cuarto de vuelta son noventa grados, como el ángulo de la esquina de un cuaderno. Así vemos la geometría convertirse en movimiento.",
          "slide_title": "Dos eslabones.\nUn espacio de trabajo.",
          "slide_reference": "DIAPOSITIVA 5 «Dos eslabones. Un espacio de trabajo.»",
          "actions": "Mostrar DIAPOSITIVA 5 «Dos eslabones. Un espacio de trabajo.». Señalar base, codo, motores y sensores. Explicar X e Y y usar los 90 grados solo como ejemplo geométrico; no introducirlos como orden en la aplicación."
        },
        {
          "chapter": 6,
          "time": "05:00 a 06:00",
          "label": "Subir, recoger y soltar",
          "say": "El extremo también puede subir y bajar. En la pantalla ese movimiento se llama eje Z; aquí significa simplemente altura de la herramienta. Para tomar una pieza usamos un electroimán, un dispositivo que atrae una parte metálica cuando recibe electricidad. Lo elegimos porque podemos encenderlo para sujetar y apagarlo para liberar. La secuencia es acercarse, bajar, encender el imán, subir, trasladar, bajar y soltar. Las piezas deben tener una parte que el imán pueda atraer. La pantalla indica si se ordenó encenderlo, pero no mide la fuerza ni confirma cuántas piezas levantó. Tampoco tenemos un sensor que mida directamente la altura. Por eso comprobamos la preparación y observamos la toma y la liberación.",
          "slide_title": "Acercar. Sujetar.\nTrasladar. Soltar.",
          "slide_reference": "DIAPOSITIVA 6 «Acercar. Sujetar. Trasladar. Soltar.»",
          "actions": "Mostrar DIAPOSITIVA 6 «Acercar. Sujetar. Trasladar. Soltar.». Mostrar el desplazamiento vertical Z y la herramienta de agarre sin tocar el robot en funcionamiento."
        }
      ]
    },
    {
      "role": "Hardware segundo aprendiz",
      "time": "06:00 a 08:00",
      "actions": "DIAPOSITIVA 7 «Cada pieza tiene una identidad.» → DIAPOSITIVA 8 «Cada señal tiene una función.». Señalar Raspberry, cámara, etiquetas, NUCLEO y alimentación. Explicar las conexiones sin manipularlas durante la exposición.",
      "parts": [
        {
          "chapter": 7,
          "time": "06:00 a 07:00",
          "label": "La computadora y los ojos del robot",
          "say": "La Raspberry Pi es una computadora pequeña: organiza las aplicaciones y recibe imágenes de la Raspberry Pi AI Camera con sensor Sony. Usamos visión artificial: programas que extraen información de una imagen. Aquí reconocen las etiquetas ArUco, dibujos cuadrados con una identidad para cada pieza. OpenCV es el conjunto de herramientas que usamos para analizarlas. No es una cámara que entiende todo sola. Debemos calibrar: relacionar la imagen, las casillas y los lugares que alcanza el brazo. Aprendimos que importan la luz, las etiquetas visibles y la posición de cámara y tablero. Si algo cambia, revisamos las referencias antes de seguir.",
          "slide_title": "Cada pieza\ntiene una identidad.",
          "slide_reference": "DIAPOSITIVA 7 «Cada pieza tiene una identidad.»",
          "actions": "Mostrar DIAPOSITIVA 7 «Cada pieza tiene una identidad.». Señalar la Raspberry, la cámara y las etiquetas. Explicar visión artificial y por qué importan la luz y las referencias."
        },
        {
          "chapter": 8,
          "time": "07:00 a 08:00",
          "label": "La placa que ejecuta las órdenes",
          "say": "La NUCLEO es la otra placa del proyecto y contiene un controlador STM32. Es un pequeño circuito programable que recibe instrucciones de la Raspberry por un cable USB y produce las señales para los motores y el electroimán. Por ese mismo cable devuelve lecturas de posición y respuestas, para que la aplicación las revise. Lo usamos porque el diseño EduSCARA ya organiza ese control con esta placa. Así, la Raspberry coordina la tarea y la STM32 ejecuta las órdenes físicas. Las fuentes de alimentación entregan la electricidad adecuada a cada parte. El módulo del imán funciona como un interruptor electrónico: la placa da la orden y el módulo maneja la corriente que necesita el imán. Revisamos conexiones, polaridad y recorrido libre. Mantenemos accesible el corte físico de alimentación; un botón en pantalla no sustituye ese corte.",
          "slide_title": "Cada señal\ntiene una función.",
          "slide_reference": "DIAPOSITIVA 8 «Cada señal tiene una función.»",
          "actions": "Mostrar DIAPOSITIVA 8 «Cada señal tiene una función.». Señalar NUCLEO/STM32, USB y fuentes. Explicar qué envía y recibe cada parte sin realizar conexiones durante la exposición."
        }
      ]
    },
    {
      "role": "Desarrollador",
      "time": "08:00 a 10:00",
      "actions": "DIAPOSITIVA 9 «App 01. Control en tus manos.» → DIAPOSITIVA 10 «App 02. El tablero responde.». Mostrar las dos aplicaciones reales y seguir el ejemplo e2–e4. No prometer una respuesta fija de Stockfish ni ejecutar valores del guion como órdenes.",
      "parts": [
        {
          "chapter": 9,
          "time": "08:00 a 08:50",
          "label": "La aplicación de control manual",
          "say": "JaqueBot manual permite preparar una posición y pedir el movimiento desde botones. También sube o baja la herramienta y controla el imán. La hicimos para probar cada parte antes de unirla al ajedrez. Preparar un destino no mueve el robot: debe confirmarse la orden. El programa guarda datos, como la posición deseada y la leída. Al comenzar prepara la comunicación; luego espera acciones del usuario y comprueba condiciones. Si no confirma la llegada, bloquea el siguiente paso. Es parecido a seguir una receta: no continúa si falta un paso anterior. Las dos aplicaciones comparten el mismo brazo; por eso una sola puede controlarlo a la vez.",
          "slide_title": "App 01.\nControl en tus manos.",
          "slide_reference": "DIAPOSITIVA 9 «App 01. Control en tus manos.»",
          "actions": "Mostrar DIAPOSITIVA 9 «App 01. Control en tus manos.». Mostrar la aplicación manual y explicar preparación, datos y condiciones para avanzar."
        },
        {
          "chapter": 10,
          "time": "08:50 a 10:00",
          "label": "La aplicación de ajedrez y Stockfish",
          "say": "JaqueBot Ajedrez reúne cámara, reglas y movimientos. Usa Stockfish, un programa especializado en calcular jugadas de ajedrez. Analiza la posición y elige una respuesta; lo usamos para contar con un jugador digital ya desarrollado. No reconoce las imágenes ni mueve motores. Otro programa, python-chess, comprueba las reglas, y nuestra aplicación conecta todo. Imaginemos que una persona lleva un peón de e dos a e cuatro y pulsa Terminé mi jugada. La cámara observa el cambio; el programa comprueba si es válido y consulta a Stockfish. Cuando recibe la respuesta, prepara el recorrido del brazo y coordina el imán para trasladar la pieza. Al terminar, retira el brazo y revisa otra imagen. Stockfish calcula la jugada; Codex nos ayudó a programar el sistema. Son funciones diferentes.",
          "slide_title": "App 02.\nEl tablero responde.",
          "slide_reference": "DIAPOSITIVA 10 «App 02. El tablero responde.»",
          "actions": "Mostrar DIAPOSITIVA 10 «App 02. El tablero responde.». Mostrar la aplicación de ajedrez y seguir el ejemplo e2–e4 como explicación, sin prometer una respuesta fija de Stockfish."
        }
      ]
    },
    {
      "role": "Maquetador",
      "time": "10:00 a 11:55",
      "actions": "DIAPOSITIVA 12 «Diseñar. Ensamblar. Poner a funcionar.» → DIAPOSITIVA 11 «Del cálculo a la pieza real.» → DIAPOSITIVA 13 «La precisión también se aprende.» → DIAPOSITIVA 14 «Otra tarea. Otra escala.» → DIAPOSITIVA 16 «JaqueBot» (cierre). Mostrar la construcción y la prueba supervisada. Reservar 20 segundos de observación; explicar el límite, la proyección y los aprendizajes. El gestor da paso al video a las 11:55.",
      "parts": [
        {
          "chapter": 12,
          "time": "10:00 a 10:25",
          "label": "Cómo se construyó",
          "say": "Descargamos los archivos de EduSCARA. Usamos Autodesk Fusion, un programa para ajustar piezas en tres dimensiones. La impresión 3D fabrica objetos añadiendo plástico por capas. Después ensamblamos engranajes y motores, fijamos soportes, soldamos conexiones y organizamos cables. Probamos cada parte antes de unir el sistema.",
          "slide_title": "Diseñar. Ensamblar.\nPoner a funcionar.",
          "slide_reference": "DIAPOSITIVA 12 «Diseñar. Ensamblar. Poner a funcionar.»",
          "actions": "Mostrar DIAPOSITIVA 12 «Diseñar. Ensamblar. Poner a funcionar.». Mostrar el diseño y relacionarlo con la impresión, el ensamblaje y las conexiones del prototipo."
        },
        {
          "chapter": 11,
          "time": "10:25 a 11:15",
          "label": "Demostración supervisada",
          "say": "Ahora observamos la prueba preparada. El programa decide el destino; el brazo se acerca, el imán recoge y la pieza se libera al llegar. Supervisamos que tome una sola pieza. Después la cámara toma otra imagen para comprobar. La aplicación controla el robot; el modelo ayuda a explicar.",
          "slide_title": "Del cálculo\na la pieza real.",
          "slide_reference": "DIAPOSITIVA 11 «Del cálculo a la pieza real.»",
          "actions": "Mostrar DIAPOSITIVA 11 «Del cálculo a la pieza real.». Observar la prueba breve y supervisada. Dejar 20 segundos sin hablar dentro de este bloque para ver el movimiento."
        },
        {
          "chapter": 13,
          "time": "11:15 a 11:30",
          "label": "Qué dificultad permanece",
          "say": "El tablero es pequeño y las piezas están muy juntas. A veces el imán puede levantar más de una. Por eso supervisamos las pruebas: el prototipo no puede trabajar solo en cualquier situación.",
          "slide_title": "La precisión\ntambién se aprende.",
          "slide_reference": "DIAPOSITIVA 13 «La precisión también se aprende.»",
          "actions": "Mostrar DIAPOSITIVA 13 «La precisión también se aprende.». Señalar la cercanía de las piezas y explicar por qué la toma necesita supervisión."
        },
        {
          "chapter": 14,
          "time": "11:30 a 11:40",
          "label": "Qué cambiaría para otra tarea",
          "say": "Para esa empresa adaptaríamos tamaño, herramienta y sensores. Mediríamos tiempos y errores antes de afirmar que el brazo mejora la tarea.",
          "slide_title": "Otra tarea.\nOtra escala.",
          "slide_reference": "DIAPOSITIVA 14 «Otra tarea. Otra escala.»",
          "actions": "Mostrar DIAPOSITIVA 14 «Otra tarea. Otra escala.». Volver al ejemplo de la empresa y explicar las adaptaciones y mediciones que necesitaría."
        },
        {
          "chapter": 16,
          "time": "11:40 a 11:55",
          "label": "Qué aprendimos",
          "say": "Aplicamos Matemáticas y Sistemas: coordenadas, ángulos, programación y conexiones aprendidas en los cursos de Arduino. Aprendimos a cuidar la luz y las etiquetas, repartir tareas y comprobar cada parte del robot.",
          "slide_title": "JaqueBot",
          "slide_reference": "DIAPOSITIVA 16 «JaqueBot» (cierre)",
          "actions": "Mostrar DIAPOSITIVA 16 «JaqueBot» (cierre). Concluir los aprendizajes; a las 11:55 el gestor da paso al video."
        }
      ]
    }
  ],
  "video_handoff": {
    "role": "Gestor de proyecto",
    "time": "11:55 a 12:00",
    "chapter": 16,
    "say": "Veamos en tres minutos cómo construimos y probamos JaqueBot.",
    "slide_title": "JaqueBot",
    "slide_reference": "DIAPOSITIVA 16 «JaqueBot» (cierre)",
    "actions": "Mantener DIAPOSITIVA 16 «JaqueBot» (cierre) y dar paso al video sin añadir tiempo."
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
    },
    {
      "term": "Visión artificial",
      "what": "Programas que extraen información de una imagen.",
      "use": "Reconocer las etiquetas de las piezas y relacionarlas con las casillas.",
      "why": "Conecta lo que observa la cámara con los datos que necesita la aplicación; en este proyecto se usa OpenCV, sin suponer que toda cámara entiende imágenes por sí sola."
    },
    {
      "term": "Coordenadas X e Y",
      "what": "Dos valores que ubican un lugar sobre un plano.",
      "use": "Describir dónde está el extremo del brazo sobre el tablero.",
      "why": "Permiten relacionar una casilla con un destino físico, usando las medidas y la geometría del brazo."
    },
    {
      "term": "Grados y ángulo",
      "what": "Una forma de medir cuánto gira una línea o una articulación.",
      "use": "Expresar el giro de la base y del codo.",
      "why": "Permiten relacionar el movimiento de los motores con el destino. Noventa grados equivale a un cuarto de vuelta como ejemplo matemático, no es una instrucción de operación ni una afirmación sobre el alcance del robot."
    },
    {
      "term": "Cursos de Arduino — formación previa",
      "what": "Arduino es una plataforma utilizada para aprender programación y electrónica mediante proyectos con placas y componentes.",
      "use": "En los cursos previos el equipo practicó programación, conexiones y conceptos que después pudo aplicar al robot.",
      "why": "Esos aprendizajes ayudaron a comprender el proyecto. JaqueBot utiliza una placa STM32; mencionar los cursos no significa que el robot esté construido con una placa Arduino."
    }
  ]
};
