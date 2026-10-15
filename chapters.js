/*
 * Contenido de sustentación. Fuentes del proyecto contrastadas en solo lectura:
 * slides.js de la presentación anterior (eslogan y comprobantes de presupuesto),
 * Control Visual/static/index.html, Control Visual/control.py,
 * jaquebot/README.md, jaquebot/app/state_machine.py,
 * jaquebot/chess_engine/stockfish_engine.py,
 * manual-interactivo/content/project-content.json,
 * _registro/jugada_incompleta_180_20261010/RESULTADO.md,
 * y la Guía Orientadora para la Sustentación SENA suministrada.
 * El estado terminado y la limitación de piezas próximas proceden de la
 * actualización del equipo del 15 de octubre de 2026.
 * Las referencias públicas al final son lecturas complementarias; la evidencia
 * del montaje, los dos pedidos y la depuración proviene de los archivos locales.
 */

export const chapters = [
  {
    id: 'jaquebot',
    title: 'JaqueBot',
    kicker: '11C · 2026 / PROTOTIPO TERMINADO',
    lead: 'Ajedrez que cobra movimiento.',
    detail: 'Un brazo robótico. Dos apps. Una demostración de cómo convertir decisiones digitales en movimiento físico.',
    role: 'Gestor de proyecto',
    seconds: 15,
    notes: 'Buenos días. Nosotros somos el equipo de JaqueBot, del grado 11C de la I.E. Carlos Julio Torrado Peñaranda, del Técnico en Sistemas Teleinformáticos. Presentamos nuestro prototipo terminado: Ajedrez que cobra movimiento.',
    kind: 'hero',
    tags: ['Prototipo terminado', 'Dos apps', '11C · 2026']
  },
  {
    id: 'reto',
    title: 'Del tablero\na la industria.',
    kicker: '01 / EL RETO',
    lead: 'Mover y clasificar objetos son tareas repetitivas. Nuestra idea es explorar cómo un brazo programable puede ayudar a optimizar esos procesos.',
    detail: 'Elegimos el ajedrez como demostración: exige identificar un objeto, decidir un destino y trasladarlo. La clasificación industrial es una aplicación proyectada que necesita adaptación y pruebas.',
    role: 'Gestor de proyecto',
    seconds: 35,
    notes: 'Nuestra idea es explorar un brazo que pueda mover y clasificar objetos para ayudar a optimizar tareas repetitivas. En el colegio convertimos esa idea en un reto de mecánica, electrónica y programación. Elegimos el ajedrez para demostrar cómo recoger un objeto y llevarlo a un destino decidido por software. La optimización industrial es una proyección: necesitamos evaluar una tarea real antes de afirmar un ahorro de tiempo.',
    kind: 'story',
    tags: ['Mover', 'Clasificar · proyección', 'Optimizar tiempos · objetivo']
  },
  {
    id: 'objetivos',
    title: 'Una decisión.\nUn movimiento.',
    kicker: '02 / LO QUE CONSTRUIMOS',
    lead: 'Integramos un brazo EduSCARA, visión del tablero, control electrónico y dos aplicaciones: JaqueBot manual y JaqueBot Ajedrez.',
    detail: 'El objetivo fue unir percepción, cálculo y movimiento en un prototipo funcional. El ajedrez demuestra el traslado de piezas; la misma idea orienta una futura adaptación a otras tareas.',
    role: 'Gestor de proyecto',
    seconds: 30,
    notes: 'Nos propusimos conectar tres partes: observar, decidir y mover. Terminamos el prototipo y contamos con dos aplicaciones. JaqueBot manual permite manejar el brazo y comprobar sus funciones; JaqueBot Ajedrez integra cámara, reglas y respuesta del robot. Partimos de EduSCARA y adaptamos el conjunto para este proyecto escolar. Demostramos el ciclo y reconocemos sus límites; otra tarea necesitaría adaptar el tamaño y la herramienta.',
    kind: 'story',
    tags: ['Percibir', 'Decidir', 'Ejecutar']
  },
  {
    id: 'ia',
    title: 'La IA acompaña.\nNosotros comprobamos.',
    kicker: '03 / PROGRAMACIÓN Y DEPURACIÓN',
    lead: 'ChatGPT Codex apoyó la programación. Le dimos el hardware, los límites y el protocolo; después revisamos y probamos cada propuesta.',
    detail: 'Una captura produjo lecturas de posición distintas. Ahora exigimos tres lecturas consecutivas en tolerancia; si fallan, bloqueamos la operación sin repetir el traslado.',
    role: 'Ingeniero de IA',
    seconds: 120,
    notes: 'Nosotros utilizamos programación asistida por IA, con decisiones y comprobaciones humanas. Para orientar una solución hay que describir el contexto: usamos una NUCLEO F446RE, una Raspberry Pi, servos, potenciómetros y un protocolo ya existente. También hay que precisar restricciones: límites articulares, una sola aplicación dueña del USB, no repetir una orden física fallida y no confundir una confirmación electrónica con una posición real. La estructura que explicamos aquí resume ese método; no sustituye una captura histórica de un prompt. Los prompts del proceso deben mostrarse a partir de registros reales conservados por el equipo.\n\nUn ejemplo concreto de depuración quedó documentado el 10 de octubre durante una captura Bxa3. Las lecturas de la base dentro de la misma operación no coincidían. No teníamos evidencia suficiente para decidir si se trataba de oscilación mecánica o ruido de lectura. Por eso no declaramos corregida una causa física que no habíamos identificado. Sí reforzamos la comprobación del software: después de enviar el movimiento se piden lecturas ADC y se exigen tres consecutivas dentro de la tolerancia. Si no se confirma la llegada, el control bloquea la sesión y no vuelve a enviar el traslado.\n\nLa lección fue que recibir un ACK no demuestra haber llegado. Contrastamos registros y pruebas de software; el montaje real se verifica aparte. Esta es una corrección de lógica y verificación documentada, no un error de compilación inventado para completar la exposición.',
    kind: 'story',
    tags: ['Contexto + restricciones', 'Registros reales', 'ACK ≠ llegada']
  },
  {
    id: 'articulaciones',
    title: 'Dos eslabones.\nUn espacio de trabajo.',
    kicker: '04 / MECÁNICA Y SENSORES',
    lead: 'Los servos de base y codo coordinan el desplazamiento horizontal. Los potenciómetros aportan la lectura angular para comprobar la posición.',
    detail: 'El diseño conserva eslabones de 125 y 100 mm. Su alcance geométrico depende de ambos giros; los límites y el espacio libre determinan qué recorridos son utilizables.',
    role: 'Hardware · primer aprendiz',
    seconds: 55,
    notes: 'Nosotros partimos de la mecánica EduSCARA. En este recorrido se distinguen la base, el primer eslabón, el codo y el segundo eslabón. Las longitudes nominales son 125 y 100 milímetros. Los servos producen el giro y los potenciómetros permiten calcular los ángulos de base y codo mediante las entradas ADC de la NUCLEO. Con esos ángulos y las longitudes calculamos la posición X/Y. El alcance máximo geométrico es 225 milímetros, pero no todos los puntos de ese círculo son accesibles: también cuentan los límites de articulación y los obstáculos. Por eso revisamos la trayectoria y no solamente la casilla final.',
    kind: 'architecture',
    tags: ['Servomotores', 'Potenciómetros · ADC', '125 + 100 mm']
  },
  {
    id: 'electroiman',
    title: 'Acercar. Sujetar.\nTrasladar. Soltar.',
    kicker: '05 / EJE Z Y ELECTROIMÁN',
    lead: 'El eje vertical acerca la herramienta. El electroimán se activa al recoger, permanece encendido durante el traslado y se apaga para dejar la pieza.',
    detail: 'La bobina utiliza 12 V y una etapa MOSFET. Z y la señal del imán son estados electrónicos: el sistema no tiene sensor de altura, contacto o agarre.',
    role: 'Hardware · primer aprendiz',
    seconds: 65,
    notes: 'Nosotros usamos el eje Z para subir y bajar la herramienta. En el ajedrez, primero se comprueba el destino horizontal, después baja Z hasta la altura guardada y se activa el electroimán. La pieza se eleva, se traslada y desciende sobre su destino; allí apagamos el imán antes de retirar el brazo. Durante el desplazamiento se mantiene Z arriba.\n\nLa bobina necesita su fuente de 12 voltios y una etapa de potencia MOSFET. La NUCLEO entrega la señal de control, no la corriente del electroimán. La lectura de esa señal no prueba que la bobina tenga alimentación ni que haya sujetado una sola pieza. Tampoco tenemos un sensor que mida la altura real de Z: el ángulo mostrado es una consigna electrónica y su referencia se confirma físicamente. Por eso el operador observa la toma y la liberación, especialmente con piezas cercanas.',
    kind: 'magnet',
    tags: ['Eje vertical Z', 'Electroimán · 12 V', 'Control MOSFET']
  },
  {
    id: 'vision',
    title: 'Cada pieza\ntiene una identidad.',
    kicker: '06 / CÁMARA Y ARUCO',
    lead: 'La Raspberry Pi AI Camera, con sensor Sony IMX500, captura el tablero. OpenCV reconoce los marcadores ArUco y relaciona cada pieza con su casilla.',
    detail: 'Cuatro referencias orientan la cuadrícula. La calibración conecta imagen, tablero y brazo; una observación ambigua debe corregirse antes de ordenar otra jugada.',
    role: 'Hardware · segundo aprendiz',
    seconds: 55,
    notes: 'Nosotros utilizamos una Raspberry Pi AI Camera para capturar la imagen. El reconocimiento de ArUco se realiza con OpenCV en la Raspberry; no depende de que una IA en la nube adivine las piezas. Cada marcador tiene una identidad asociada a una pieza y cuatro marcadores de referencia sitúan el tablero en la imagen. La app utiliza el esquema DICT_4X4_1000 del proyecto. Calibramos por separado la cámara, la geometría del tablero y las posiciones del brazo. También importa la altura de la etiqueta sobre cada pieza. Una imagen antigua o una detección ambigua no valida una jugada; necesitamos observaciones nuevas y estables.',
    kind: 'vision',
    tags: ['Raspberry Pi AI Camera', 'Sony IMX500', 'OpenCV · ArUco']
  },
  {
    id: 'conexiones',
    title: 'Cada señal\ntiene una función.',
    kicker: '07 / ELECTRÓNICA Y COMUNICACIÓN',
    lead: 'La Raspberry coordina las apps. La NUCLEO F446RE controla los servos, lee los potenciómetros y gobierna la señal del electroimán.',
    detail: 'USB serial a 115200 baudios, órdenes de 48 bytes, PWM hacia servos y ADC desde sensores. Fuentes separadas de 5 V para servos y 12 V para la bobina.',
    role: 'Hardware · segundo aprendiz',
    seconds: 65,
    notes: 'Nosotros separamos la coordinación y el control físico. La Raspberry ejecuta las apps, procesa la cámara y consulta Stockfish. Por USB serial se comunica con la NUCLEO F446RE a 115200 baudios. El protocolo utiliza órdenes de 48 bytes y una confirmación de cuatro bytes. La NUCLEO genera las señales de servos y recibe las señales analógicas de los potenciómetros. El firmware está desarrollado en C para STM32 y organiza comunicaciones, temporizadores, lecturas y órdenes de movimiento.\n\nEn el montaje documentado, PB5, accesible como D4 y llevado por B8, controla el módulo MOSFET externo del electroimán. Esa línea no debe recibir 12 voltios. Los servos usan 5 voltios y la bobina 12; las conexiones de tierra siguen el esquema del montaje. Revisamos polaridad y aislamiento de cables, mantenemos el recorrido libre y dejamos accesible el corte de alimentación de servos. Bloquear la pantalla evita nuevas órdenes, pero no equivale a una parada física inmediata.',
    kind: 'wiring',
    tags: ['Raspberry Pi 5 → STM32', 'USB · 115200 baudios', 'PWM / ADC']
  },
  {
    id: 'app-manual',
    title: 'App 01.\nControl en tus manos.',
    kicker: '08 / JAQUEBOT MANUAL',
    lead: 'Mueve base y codo por pasos o por destino. Prepara coordenadas X/Y, controla Z y activa o desactiva el electroimán.',
    detail: 'Arrastrar solo prepara el destino: el movimiento se envía al pulsar Mover. La interfaz muestra lecturas, estado de conexión y controles de preparación de la sesión.',
    role: 'Desarrollador',
    seconds: 60,
    notes: 'Nosotros desarrollamos dos interfaces sobre el mismo brazo. La primera es JaqueBot, nuestra app manual. Permite conectar la NUCLEO, usar la calibración vigente o preparar de nuevo los motores cuando corresponde. Podemos mover base y codo con pasos, introducir ángulos o preparar un destino X/Y en la vista superior. Arrastrar la punta no mueve el equipo: primero previsualizamos y luego pulsamos Mover.\n\nTambién controlamos Z y el electroimán. Los valores de base y codo proceden de potenciómetros; Z representa una orden nominal y el indicador del imán muestra su señal. El servidor valida parámetros y límites, y un trabajador serial administra las órdenes y respuestas. Las dos apps pueden estar disponibles en la Raspberry, pero solo una puede tener abierto el USB de la NUCLEO. Debemos desconectar la sesión de una antes de conectarla en la otra.',
    kind: 'app-manual',
    tags: ['Base · codo · Z', 'Coordenadas X/Y', 'Electroimán']
  },
  {
    id: 'app-ajedrez',
    title: 'App 02.\nEl tablero responde.',
    kicker: '09 / JAQUEBOT AJEDREZ',
    lead: 'La visión identifica el tablero, python-chess valida las reglas y Stockfish calcula la respuesta. La app convierte esa jugada en una secuencia del brazo.',
    detail: 'Turno humano → validación → cálculo → traslado → verificación. La cámara comprueba el resultado antes de actualizar la posición lógica y continuar la partida.',
    role: 'Desarrollador',
    seconds: 60,
    notes: 'Nosotros usamos JaqueBot Ajedrez para demostrar una decisión convertida en acción. La cámara identifica las piezas; python-chess mantiene las reglas y Stockfish, consultado mediante UCI, elige una jugada legal. Stockfish no reconoce la imagen ni acciona el robot: nuestra aplicación conecta esas partes.\n\nLa máquina de estados separa el turno humano, la validación, el cálculo del motor, el movimiento y su verificación. Cuando terminamos nuestra jugada, pedimos una nueva observación estable. Si se acepta, el motor calcula su respuesta y el planificador genera los traslados. La ejecución comprueba base y codo, coordina Z y el electroimán, vuelve a estacionar y obtiene otra imagen. La posición lógica se confirma después de verificar el resultado físico. Una captura retira primero la pieza rival; la promoción necesita intervención manual. Si un traslado falla, la app no lo repite automáticamente.',
    kind: 'app-chess',
    tags: ['Visión', 'python-chess + Stockfish', 'Máquina de estados']
  },
  {
    id: 'demostracion',
    title: 'Del cálculo\na la pieza real.',
    kicker: '10 / DEMOSTRACIÓN EN VIVO',
    lead: 'El robot calcula su jugada mediante la app, mueve el brazo y activa el electroimán para recoger y trasladar la pieza.',
    detail: 'La demostración es supervisada. Observamos la toma, el transporte y la liberación; comprobamos que la pieza correcta termine en la casilla esperada.',
    role: 'Maquetador',
    seconds: 55,
    notes: 'Ahora nosotros mostramos el prototipo real. Antes de empezar comprobamos conexión, calibración, referencia de Z, electroimán y espacio libre. En la app se observa el tablero y la jugada elegida por Stockfish. Seguimos la secuencia física: el brazo llega a la pieza, baja, activa el electroimán, sube y se traslada; al llegar, baja y libera la pieza. Observamos que recoja una sola pieza y que la deje en su destino. Después la cámara comprueba el resultado. Este momento pertenece a los doce minutos de exposición. El movimiento del modelo 3D de esta web es una visualización explicativa; la demostración funcional la hace el equipo físico.',
    kind: 'demo',
    tags: ['Jugada calculada', 'Traslado físico', 'Supervisión']
  },
  {
    id: 'fabricacion',
    title: 'Diseñar. Ensamblar.\nPoner a funcionar.',
    kicker: '11 / FABRICACIÓN E INTEGRACIÓN',
    lead: 'Adaptamos la plataforma EduSCARA y diseñamos el conjunto de tablero, piezas y soportes en Autodesk Fusion. La fabricación y el ensamble conectan el diseño con el prototipo.',
    detail: 'El modelo 3D conserva la geometría CAD del proyecto. Articulaciones, fijaciones, carro vertical, tablero y herramienta cumplen una función dentro del mismo sistema.',
    role: 'Maquetador',
    seconds: 25,
    notes: 'Nosotros adaptamos EduSCARA y trabajamos el conjunto en Autodesk Fusion: tablero, piezas, etiquetas y soportes. El ensamble une estructura, fijaciones, cableado y herramienta. La vista 3D procede del CAD del proyecto; el video muestra el proceso físico. Reconocemos a los autores de EduSCARA como plataforma original.',
    kind: 'making',
    tags: ['Autodesk Fusion', 'Adaptación EduSCARA', 'Ensamble físico']
  },
  {
    id: 'limites',
    title: 'La precisión\ntambién se aprende.',
    kicker: '12 / UN LÍMITE REAL',
    lead: 'En un tablero pequeño, las piezas quedan muy juntas. A veces el electroimán puede levantar más de una; por eso debemos estar pendientes durante el juego.',
    detail: 'El prototipo terminado requiere supervisión. La separación entre objetos y el tamaño de la herramienta influyen en la toma; el sistema no tiene un sensor que confirme el agarre.',
    role: 'Maquetador',
    seconds: 20,
    notes: 'Nuestro prototipo está terminado y tiene un límite real: el ajedrez es pequeño y las piezas quedan próximas. A veces el electroimán levanta más de una. Nosotros observamos la toma e intervenimos cuando ocurre. La señal electrónica no detecta cuántas piezas se sujetaron.',
    kind: 'limits',
    tags: ['Piezas próximas', 'Posible toma múltiple', 'Supervisión necesaria']
  },
  {
    id: 'escala',
    title: 'Otra tarea.\nOtra escala.',
    kicker: '13 / PROYECCIÓN INDUSTRIAL',
    lead: 'Para producción habría que adaptar el tamaño del robot, su alcance y la herramienta a los objetos que deba mover o clasificar.',
    detail: 'El ahorro de tiempo debe medirse en el proceso real. Alcance, carga, separación, seguridad y fiabilidad se verifican antes de plantear un uso productivo.',
    role: 'Maquetador',
    seconds: 10,
    notes: 'Para producción nosotros adaptaríamos tamaño, alcance y herramienta. Después mediríamos tiempo y fiabilidad con objetos reales. La clasificación industrial es nuestra proyección.',
    kind: 'industry',
    tags: ['Adaptar tamaño', 'Adecuar herramienta', 'Medir resultados']
  },
  {
    id: 'presupuesto',
    title: 'Construir\ncon criterio.',
    kicker: '14 / VIABILIDAD Y PRESUPUESTO · COP',
    lead: 'Dos pedidos documentados suman $711.474,77. El equipo informó una inversión total aproximada de $1.000.000, incluyendo otros materiales y herramientas.',
    detail: 'Pedido 1: $484.660,63. Pedido 2: $226.814,14. El millón es una estimación; los adicionales y los aportes reutilizados necesitan su desglose para cuantificar la optimización financiera.',
    role: 'Gestor de proyecto',
    seconds: 40,
    notes: 'Nosotros respaldamos 711.474 pesos con 77 centavos con dos pedidos del 14 de agosto: sus valores aparecen en pantalla. Informamos aproximadamente un millón de pesos incluyendo adicionales como cautín, soldadura, potenciómetros, PLA y jumpers. La diferencia de 288.525 pesos con 23 centavos no es un gasto desglosado y comprobado. El millón sigue siendo aproximado. Para demostrar optimización financiera debemos identificar los recursos del aula reutilizados y las compras reales; no tenemos una cifra documentada de ahorro. También distinguimos herramientas reutilizables de consumibles. Los comprobantes sustentan el subtotal, no un desglose completo del millón.',
    kind: 'budget',
    tags: ['$711.474,77 documentados', '~ $1.000.000 informado', 'COP']
  },
  {
    id: 'cierre',
    title: 'JaqueBot',
    kicker: '15 / DEL PROTOTIPO A NUEVAS POSIBILIDADES',
    lead: 'Ajedrez que cobra movimiento.',
    detail: 'Terminamos el prototipo y demostramos una idea: decidir, mover y verificar. Ahora presentamos el video del proceso; después responderemos las preguntas del jurado.',
    role: 'Maquetador y Gestor de proyecto',
    seconds: 10,
    notes: 'Maquetador, 11:50–11:55: Concluimos la demostración. Nuestro gestor presenta el video del proceso.\n\nGestor de proyecto, 11:55–12:00: JaqueBot, Ajedrez que cobra movimiento. Ahora presentamos el video de nuestro proceso.',
    kind: 'closing',
    tags: ['12 min · exposición y demo', '3 min · video', '5 min · preguntas']
  }
];

export const questions = [
  {
    question: '¿Cuál es el propósito del proyecto más allá del ajedrez?',
    answer: 'Explorar un brazo programable para mover y clasificar objetos, con la intención de optimizar tareas repetitivas. El ajedrez demuestra el traslado y la coordinación. Un uso industrial necesita adaptar tamaño, herramienta y seguridad, y medir tiempos y fiabilidad con objetos reales.'
  },
  {
    question: '¿Qué hace cada una de las dos apps?',
    answer: 'JaqueBot manual controla base, codo, Z, destinos X/Y y electroimán, y permite preparar la sesión. JaqueBot Ajedrez integra cámara, ArUco, reglas, Stockfish y secuencias de traslado. Comparten el mismo controlador y solo una puede poseer el USB a la vez.'
  },
  {
    question: '¿El robot realmente piensa la jugada?',
    answer: 'Stockfish calcula la respuesta mediante UCI. OpenCV identifica marcadores y python-chess valida las reglas. Nuestra app enlaza esas funciones, planifica los traslados y coordina la NUCLEO. El motor de ajedrez no reconoce imágenes ni acciona los servos directamente.'
  },
  {
    question: '¿Cómo sabe el sistema qué pieza está en cada casilla?',
    answer: 'La cámara captura el tablero y OpenCV detecta identidades ArUco. Cuatro referencias orientan la cuadrícula; la calibración relaciona imagen, tablero y brazo. La app requiere observaciones nuevas y estables y valida las identidades, no solamente el color de las piezas.'
  },
  {
    question: '¿Cómo se comunican la app y la NUCLEO?',
    answer: 'Mediante USB serial a 115200 baudios. Las órdenes del protocolo tienen 48 bytes y reciben una confirmación de cuatro bytes. Un trabajador serial administra el enlace. El ACK confirma el intercambio; la llegada de base y codo se comprueba aparte con lecturas ADC.'
  },
  {
    question: '¿Qué diferencia hay entre ADC y PWM en este robot?',
    answer: 'ADC convierte la señal analógica de los potenciómetros en datos para calcular los ángulos de base y codo. Las señales de control de servos ordenan su posición. La posición X/Y se calcula por geometría; Z conserva una referencia nominal y no mide altura física.'
  },
  {
    question: '¿Cómo se activa el electroimán?',
    answer: 'La app manda la orden por el USB de la NUCLEO. PB5 gobierna un MOSFET externo y una fuente de 12 V alimenta la bobina. Se activa tras llegar y bajar para recoger; se mantiene durante el traslado y se apaga al depositar. La señal no mide agarre.'
  },
  {
    question: '¿Qué pasa si el imán levanta más de una pieza?',
    answer: 'Es una limitación observada con piezas muy próximas en el tablero pequeño. La demostración requiere supervisión de la toma y la liberación; el operador interviene cuando ocurre. Una adaptación debe revisar separación, escala y herramienta. No hay sensor que cuente las piezas sujetadas.'
  },
  {
    question: '¿Qué error real corrigieron durante el desarrollo?',
    answer: 'Una captura Bxa3 produjo lecturas de base distintas durante la misma operación. Se reforzó la comprobación de llegada: tres lecturas ADC consecutivas dentro de tolerancia; si falla, se bloquea sin reenviar el traslado. Esa corrección no demuestra eliminada una causa de ruido u oscilación mecánica.'
  },
  {
    question: '¿Cómo evitaron aceptar sin revisar las respuestas de la IA?',
    answer: 'El desarrollo se orientó con el hardware, los límites y el protocolo existentes, y se contrastó con código, registros y pruebas. Usamos ChatGPT Codex como apoyo para implementar y revisar soluciones. Explicamos el contexto, fijamos restricciones y comprobamos los cambios con el código y el prototipo.'
  },
  {
    question: '¿Cómo se organiza el software?',
    answer: 'El firmware STM32 en C controla la electrónica. Las apps usan Python; la de ajedrez separa visión, reglas y motor, planificación, calibración y máquina de estados. Su ciclo principal distingue turno humano, validación, cálculo, traslado y verificación antes de continuar.'
  },
  {
    question: '¿Qué medidas de seguridad y calibración aplican?',
    answer: 'Se revisan polaridad, alimentación, recorrido libre, sesión motora y referencia física de Z. La geometría del tablero y la calibración de motores son distintas. Servos e imán tienen sus fuentes y etapa de potencia. El corte de alimentación de servos debe estar accesible; bloquear la interfaz no es parada física inmediata.'
  },
  {
    question: '¿Cuánto costó y cuánto se ahorró reutilizando recursos?',
    answer: 'Los dos pedidos documentados suman $711.474,77 COP. El equipo informó cerca de $1.000.000 con adicionales. La diferencia no es un gasto desglosado ni un ahorro probado. Hay que identificar los recursos reutilizados, las compras y las herramientas antes de cuantificar la optimización financiera.'
  },
  {
    question: '¿Qué habría que cambiar para utilizarlo en producción?',
    answer: 'Adaptar tamaño, alcance, herramienta y separación de objetos a la tarea; comprobar carga, precisión, seguridad y fiabilidad. Después comparar el tiempo del proceso anterior con el automatizado. El proyecto no aporta todavía una cifra de productividad ni una validación industrial.'
  }
];

export const sources = [
  { label: 'EduSCARA · plataforma original', url: 'https://doi.org/10.1016/j.ohx.2026.e00761' },
  { label: 'EduSCARA · diseños originales', url: 'https://doi.org/10.17632/m46jnn2cmb.3' },
  { label: 'ST · NUCLEO-F446RE', url: 'https://www.st.com/en/evaluation-tools/nucleo-f446re.html' },
  { label: 'Raspberry Pi · AI Camera', url: 'https://www.raspberrypi.com/documentation/accessories/ai-camera.html' },
  { label: 'OpenCV · detección ArUco', url: 'https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html' },
  { label: 'python-chess · reglas y motor', url: 'https://python-chess.readthedocs.io/en/latest/' },
  { label: 'Stockfish · motor de ajedrez', url: 'https://stockfishchess.org/' }
];
