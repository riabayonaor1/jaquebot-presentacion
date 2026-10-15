export const guion = {
  "roles": [
    {
      "role": "Gestor de proyecto",
      "time": "00:00 a 02:00",
      "objective": "Presentar JaqueBot, su propósito, el resultado actual y el presupuesto.",
      "actions": "Abrir #1. Cambiar a #2, #3 y #15 usando Capítulos o Guion, porque el presupuesto se presenta al inicio. Señalar el prototipo sin operarlo. Terminar el texto a 01:55 y dejar cinco segundos para entregar la palabra; reservar el paso final al video para 11:55.",
      "parts": [
        {
          "chapter": 1,
          "time": "00:00 a 00:15",
          "label": "Presentación",
          "say": "Buenos días, jurados, docentes y compañeros. Nosotros somos el equipo de JaqueBot, del grado once C de la Institución Educativa Carlos Julio Torrado Peñaranda. Presentamos nuestro prototipo terminado y nuestro eslogan: Ajedrez que cobra movimiento."
        },
        {
          "chapter": 2,
          "time": "00:15 a 00:50",
          "label": "Problema y propósito",
          "say": "Nuestro proyecto parte de una tarea frecuente: recoger un objeto y dejarlo en un destino. La idea es explorar un brazo programable que pueda mover y clasificar objetos para ayudar a optimizar tareas repetitivas. En el colegio convertimos esa idea en un reto de mecánica, electrónica y sistemas. Elegimos el ajedrez para demostrar cómo una decisión digital se convierte en una acción física. El ahorro de tiempo industrial es una proyección que debemos medir en un proceso real. Por eso el ajedrez es una demostración y no el único uso posible del brazo."
        },
        {
          "chapter": 3,
          "time": "00:50 a 01:20",
          "label": "Objetivos y resultado",
          "say": "Nos propusimos observar el tablero, calcular una jugada y trasladar una pieza. Integramos un brazo basado en EduSCARA, una cámara, control electrónico y dos aplicaciones. JaqueBot manual permite manejar y comprobar el brazo; JaqueBot Ajedrez integra visión, reglas y respuesta del robot. El prototipo funciona y requiere supervisión. La clasificación de otros objetos necesita adaptar el tamaño y la herramienta."
        },
        {
          "chapter": 15,
          "time": "01:20 a 01:55",
          "label": "Viabilidad y transición",
          "say": "Nuestro presupuesto documenta dos pedidos que suman setecientos once mil cuatrocientos setenta y cuatro pesos con setenta y siete centavos. Informamos aproximadamente un millón de pesos con adicionales. Distinguimos herramientas reutilizables y consumibles; el millón es aproximado. Para cuantificar la optimización financiera debemos identificar los aportes reutilizados y las compras, sin inventar ahorros. Ahora nuestro compañero explicará cómo orientamos la programación y comprobamos las soluciones con ayuda de inteligencia artificial."
        }
      ],
      "spoken_words": 258
    },
    {
      "role": "Ingeniero de IA",
      "time": "02:00 a 04:00",
      "objective": "Explicar la consulta guiada a ChatGPT Codex y una depuración real.",
      "actions": "Abrir #4. Mostrar el esquema de consulta a ChatGPT Codex identificado como reconstrucción gráfica. Explicar contexto, restricciones y comprobación; señalar el caso de depuración real.",
      "parts": [
        {
          "chapter": 4,
          "time": "02:00 a 03:00",
          "label": "Cómo orientamos las consultas",
          "say": "Nosotros usamos ChatGPT Codex como apoyo para implementar y revisar las aplicaciones. Para obtener una solución útil, explicamos el contexto: el brazo EduSCARA, la NUCLEO F446RE, la Raspberry Pi y el protocolo disponible. Después precisamos las restricciones: respetar límites articulares, conservar las órdenes existentes, permitir una sola aplicación dueña del USB y no repetir automáticamente un traslado que falle. También describimos las herramientas del proyecto: Python, OpenCV para ArUco y Stockfish como motor de ajedrez. Una consulta se puede resumir así: revisa esta secuencia con este hardware, conserva el protocolo y comprueba la llegada antes de continuar. Ese esquema nos ayuda a explicar cómo se guía una solución. Nosotros debemos revisar el código, probarlo y contrastar el comportamiento con los registros. Las respuestas útiles se convierten en cambios revisables, que podemos explicar frente al jurado."
        },
        {
          "chapter": 4,
          "time": "03:00 a 04:00",
          "label": "Caso real de depuración",
          "say": "Un problema real apareció durante una captura Bxa3: las lecturas de posición de la base no coincidían dentro de la misma operación. No podíamos concluir si había oscilación física o ruido de lectura. Aprendimos que recibir un ACK, la confirmación del controlador, no demuestra que el brazo llegó. Reforzamos la comprobación del software para exigir tres lecturas ADC consecutivas dentro de la tolerancia. Si no se confirma la llegada, se bloquea la sesión y no se vuelve a enviar el traslado. Además revisamos la coordinación del estacionamiento usando el mismo trabajador de control manual. Las pruebas de software ayudan a verificar esa lógica; la respuesta mecánica se observa en el prototipo. Nuestro compañero mostrará ahora los elementos que producen y permiten comprobar el movimiento."
        }
      ],
      "spoken_words": 259
    },
    {
      "role": "Hardware primer aprendiz",
      "time": "04:00 a 06:00",
      "objective": "Identificar estructura, actuadores, sensores, eje vertical y herramienta.",
      "actions": "Abrir #5 y después #6. Señalar en el 3D y en el prototipo base, codo, eslabones, potenciómetros, carro Z y electroimán. No mover articulaciones a mano durante una operación.",
      "parts": [
        {
          "chapter": 5,
          "time": "04:00 a 04:55",
          "label": "Articulaciones y lectura de posición",
          "say": "Nosotros partimos de la plataforma EduSCARA. Aquí distinguimos la base, el primer eslabón, el codo y el segundo eslabón. Sus longitudes nominales son ciento veinticinco y cien milímetros. Los servomotores producen el giro y los potenciómetros aportan una señal que permite calcular los ángulos de base y codo. Con esos ángulos y las longitudes obtenemos la posición X e Y. El alcance geométrico máximo es de doscientos veinticinco milímetros, aunque los límites articulares y los obstáculos reducen los recorridos utilizables. Las fijaciones mantienen el conjunto; una holgura puede afectar la posición. Por eso nos interesa comprobar el destino y mantener libre el recorrido del brazo, los cables y la herramienta. La estructura y sus soportes conservan alineados los elementos que deben trabajar juntos."
        },
        {
          "chapter": 6,
          "time": "04:55 a 06:00",
          "label": "Elevación y electroimán",
          "say": "El eje Z permite subir y bajar la herramienta. En el ajedrez, el brazo llega a la pieza, baja a la altura guardada y activa el electroimán. Después eleva la pieza y la transporta. En el destino baja, apaga el imán y retira la herramienta. La bobina utiliza doce voltios y un módulo MOSFET; no recibe su corriente directamente de la señal del microcontrolador. El indicador de la aplicación muestra la señal electrónica, no la fuerza de agarre ni cuántas piezas quedaron sujetas. Tampoco tenemos un sensor que mida la altura real de Z: la referencia se comprueba visualmente. Esa diferencia explica por qué observamos la toma y la liberación. Ahora veremos cómo se relacionan estos elementos con la cámara y las conexiones del sistema."
        }
      ],
      "spoken_words": 248
    },
    {
      "role": "Hardware segundo aprendiz",
      "time": "06:00 a 08:00",
      "objective": "Explicar visión, calibraciones, comunicación, alimentación y seguridad.",
      "actions": "Abrir #7 y #8. Enfocar la cámara Sony IMX500 y después Raspberry Pi, NUCLEO y conexiones. Mostrar el esquema del montaje actual; no usar el de una PCB futura como si estuviera instalada.",
      "parts": [
        {
          "chapter": 7,
          "time": "06:00 a 06:55",
          "label": "Visión y referencias",
          "say": "Nosotros usamos una Raspberry Pi AI Camera con sensor Sony IMX500 para capturar el tablero. OpenCV reconoce los marcadores ArUco en la Raspberry. Cada identidad se asocia a una pieza y cuatro referencias sitúan la cuadrícula en la imagen. No depende de una IA en la nube que adivine las piezas. Calibramos por separado cámara, tablero y posiciones del brazo. También importa la altura de las etiquetas. Una imagen anterior no confirma una jugada nueva; la aplicación necesita observaciones estables. La Raspberry ejecuta las aplicaciones y coordina el sistema. La NUCLEO se encarga de las señales físicas de los servos, las lecturas de los potenciómetros y el control del electroimán. Si cambiamos la cámara o movemos el tablero, revisamos de nuevo esas referencias."
        },
        {
          "chapter": 8,
          "time": "06:55 a 08:00",
          "label": "Señales y seguridad",
          "say": "El enlace entre aplicación y NUCLEO es USB serial a ciento quince mil doscientos baudios. Las órdenes tienen cuarenta y ocho bytes y una confirmación de cuatro bytes. Los servos reciben señales de control y los potenciómetros entran por ADC, que convierte una señal analógica en datos. La señal PB5 gobierna el MOSFET del electroimán. En el montaje actual pasa por el borne B8; allí no se conectan doce voltios. Los servos utilizan cinco voltios y la bobina doce, con las tierras conectadas según el esquema. Antes de operar revisamos polaridad, cables, recorrido y referencia de Z. El corte de alimentación de servos queda accesible: bloquear la pantalla evita nuevas órdenes, pero no equivale a detener físicamente un movimiento en curso. Nuestro desarrollador explicará cómo organizamos ese control en las dos aplicaciones."
        }
      ],
      "spoken_words": 255
    },
    {
      "role": "Desarrollador",
      "time": "08:00 a 10:00",
      "objective": "Explicar firmware, interfaces, lógica de juego y comprobación de movimientos.",
      "actions": "Abrir #9 y #10. Ampliar las capturas de ambas apps y señalar sus controles. Mostrar las interfaces reales en la Raspberry si está preparada. Navegar por esta web solo explica el proyecto; no envía órdenes al robot.",
      "parts": [
        {
          "chapter": 9,
          "time": "08:00 a 09:00",
          "label": "Control manual y software embebido",
          "say": "Nosotros tenemos dos aplicaciones. JaqueBot manual permite conectar la NUCLEO, preparar los motores y elegir movimientos de base, codo y Z. Podemos introducir ángulos o preparar un destino X e Y. Arrastrar la punta solo previsualiza; la orden se envía al pulsar Mover. También activamos o desactivamos el electroimán. El servidor valida parámetros y límites, y un trabajador administra el puerto serial. El firmware está desarrollado en C para STM32: inicializa comunicaciones, temporizadores y lecturas; sus variables guardan órdenes, destinos y estados. Sus condiciones deciden qué comando ejecutar. Conservamos el protocolo original de EduSCARA. Como ambas apps comparten hardware, una sola puede tener abierto el USB. Desconectamos una antes de conectarlo desde la otra para evitar órdenes en conflicto. La interfaz presenta el estado y el servidor decide si la acción está permitida."
        },
        {
          "chapter": 10,
          "time": "09:00 a 10:00",
          "label": "Ajedrez y máquina de estados",
          "say": "JaqueBot Ajedrez añade la cámara y el juego. OpenCV identifica ArUco, python-chess valida las reglas y Stockfish calcula una respuesta legal mediante UCI. Nuestra aplicación une esas funciones con el brazo. La máquina de estados separa turno humano, validación, cálculo, movimiento y verificación. Tras aceptar la jugada humana, planifica los traslados y coordina Z y electroimán. Una captura retira primero la pieza rival; la promoción requiere intervención manual. Al terminar se estaciona el brazo y una nueva imagen comprueba la posición. En la depuración del estacionamiento revisamos que el codo partiera de la posición leída y que la base siguiera en su referencia. El envío de una orden no se confunde con llegada. Ahora nuestro compañero presenta el montaje y guía la demostración física."
        }
      ],
      "spoken_words": 257
    },
    {
      "role": "Maquetador",
      "time": "10:00 a 12:00",
      "objective": "Mostrar fabricación, demostrar el ciclo, explicar límites y entregar el cierre al gestor.",
      "actions": "Orden recomendado #12, #11, #13, #14 y #16. El equipo debe haber preparado y ensayado una transferencia breve antes de la exposición. Una persona opera la app real y otra supervisa piezas y recorrido. Narrar mientras se observa el ciclo; no improvisar una partida larga.",
      "parts": [
        {
          "chapter": 12,
          "time": "10:00 a 10:25",
          "label": "Diseño y ensamble",
          "say": "Nosotros adaptamos EduSCARA en Autodesk Fusion y trabajamos el conjunto de tablero, piezas, etiquetas y soportes. La fabricación y el ensamble unieron estructura, fijaciones, cableado y herramienta. El modelo 3D explica la geometría; el montaje físico muestra cómo se integraron sus componentes. Reconocemos la plataforma original de los autores de EduSCARA."
        },
        {
          "chapter": 11,
          "time": "10:25 a 11:20",
          "label": "Demostración supervisada",
          "say": "Ahora observamos el prototipo preparado. La aplicación calcula la respuesta con Stockfish. Seguimos la pieza: el brazo llega, baja Z, activa el electroimán, eleva y traslada. En el destino baja y libera. Nosotros comprobamos que sea una sola pieza y que quede en su casilla. Después la cámara verifica el resultado. Este recorrido web explica el sistema; la acción la realiza el robot desde su aplicación."
        },
        {
          "chapter": 13,
          "time": "11:20 a 11:40",
          "label": "Limitación real",
          "say": "Nuestro tablero es pequeño y las piezas quedan próximas. A veces el electroimán puede levantar más de una. Por eso supervisamos la toma y corregimos el tablero cuando ocurre. La señal electrónica no detecta cuántas piezas se sujetaron."
        },
        {
          "chapter": 14,
          "time": "11:40 a 11:50",
          "label": "Adaptación industrial",
          "say": "Para producción adaptaríamos tamaño, alcance y herramienta. Mediríamos tiempo y fiabilidad con objetos reales antes de afirmar una mejora industrial."
        },
        {
          "chapter": 16,
          "time": "11:50 a 11:55",
          "label": "Entrega y paso al video",
          "say": "Concluimos la demostración. Nuestro gestor presenta el video del proceso."
        }
      ],
      "spoken_words": 185
    }
  ],
  "video_handoff": {
    "role": "Gestor de proyecto",
    "time": "11:55 a 12:00",
    "chapter": 16,
    "say": "JaqueBot, Ajedrez que cobra movimiento. Ahora presentamos el video de nuestro proceso."
  },
  "total_spoken_words": 1474
};
