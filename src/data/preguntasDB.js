/**
 * Banco de preguntas educativas por temaId.
 * Convención: opciones[0] es SIEMPRE la respuesta correcta.
 * El motor del juego se encarga de aleatorizar el orden al presentarlas.
 */
export const preguntasPorTema = {
  // ═══════════════════════════════════════════
  // 1RO SECUNDARIA
  // ═══════════════════════════════════════════

  'tema-1-1': [ // Números Enteros
    { pregunta: '¿Cuánto es (-5) + (+8)?', opciones: ['3', '-3', '13', '-13'] },
    { pregunta: '¿Cuál es el resultado de (-4) × (-3)?', opciones: ['12', '-12', '7', '-7'] },
    { pregunta: '¿Cuánto es (-20) ÷ (+5)?', opciones: ['-4', '4', '-15', '15'] },
    { pregunta: '¿Cuál es el valor absoluto de -7?', opciones: ['7', '-7', '0', '1'] },
    { pregunta: '¿Cuánto es 6 - (-3)?', opciones: ['9', '3', '-9', '-3'] },
  ],

  'tema-1-2': [ // Fracciones y Decimales
    { pregunta: '¿Cuánto es 1/2 + 1/4?', opciones: ['3/4', '2/6', '1/6', '2/4'] },
    { pregunta: '¿Cuánto es 2/3 - 1/3?', opciones: ['1/3', '1/6', '3/3', '2/6'] },
    { pregunta: '¿Cuál es el decimal de 3/4?', opciones: ['0.75', '0.34', '0.5', '0.25'] },
    { pregunta: '¿Cuánto es 1/5 × 10?', opciones: ['2', '5', '50', '0.5'] },
    { pregunta: '¿Qué fracción equivale a 0.5?', opciones: ['1/2', '1/3', '1/4', '1/5'] },
  ],

  'tema-1-3': [ // Geometría Básica
    { pregunta: '¿Cuántos grados tiene un ángulo recto?', opciones: ['90°', '180°', '45°', '360°'] },
    { pregunta: '¿Cuántos lados tiene un triángulo?', opciones: ['3', '4', '5', '6'] },
    { pregunta: '¿Cómo se llama un triángulo con todos los lados iguales?', opciones: ['Equilátero', 'Isósceles', 'Escaleno', 'Rectángulo'] },
    { pregunta: '¿Cuánto suman los ángulos internos de un triángulo?', opciones: ['180°', '360°', '90°', '270°'] },
    { pregunta: '¿Qué tipo de ángulo mide menos de 90°?', opciones: ['Agudo', 'Obtuso', 'Recto', 'Llano'] },
  ],

  'tema-1-4': [ // La Narración
    { pregunta: '¿Cuáles son las partes de una narración?', opciones: ['Inicio, nudo y desenlace', 'Título, cuerpo y firma', 'Introducción y conclusión', 'Verso, estrofa y rima'] },
    { pregunta: '¿Quién es el narrador omnisciente?', opciones: ['El que lo sabe todo', 'El protagonista', 'Un personaje secundario', 'El autor real'] },
    { pregunta: '¿Qué es un mito?', opciones: ['Relato que explica el origen de algo', 'Una historia de amor', 'Un texto científico', 'Un poema épico'] },
    { pregunta: '¿Qué diferencia un cuento de una novela?', opciones: ['La extensión', 'El idioma', 'El número de personajes siempre', 'El tipo de letra'] },
    { pregunta: '¿Qué es el nudo de una narración?', opciones: ['El conflicto principal', 'El final feliz', 'La presentación de personajes', 'La moraleja'] },
  ],

  'tema-1-5': [ // Comprensión Lectora
    { pregunta: '¿Qué es la idea principal de un texto?', opciones: ['El mensaje central del texto', 'La primera oración', 'El título del texto', 'La última oración'] },
    { pregunta: '¿Qué son las ideas secundarias?', opciones: ['Las que apoyan la idea principal', 'Las más importantes', 'Las del primer párrafo', 'Las del título'] },
    { pregunta: '¿Qué significa inferir en lectura?', opciones: ['Deducir algo no dicho explícitamente', 'Leer en voz alta', 'Copiar el texto', 'Resumir todo'] },
    { pregunta: '¿Qué tipo de texto informa sobre hechos reales?', opciones: ['Informativo', 'Narrativo', 'Poético', 'Dramático'] },
    { pregunta: '¿Qué es un sinónimo?', opciones: ['Palabra con significado similar', 'Palabra opuesta', 'Palabra inventada', 'Palabra larga'] },
  ],

  'tema-1-6': [ // La Célula
    { pregunta: '¿Cuál es la unidad básica de los seres vivos?', opciones: ['La célula', 'El átomo', 'La molécula', 'El tejido'] },
    { pregunta: '¿Qué organelo realiza la fotosíntesis?', opciones: ['Cloroplasto', 'Mitocondria', 'Ribosoma', 'Núcleo'] },
    { pregunta: '¿Qué tipo de célula tiene núcleo definido?', opciones: ['Eucariota', 'Procariota', 'Virus', 'Bacteria'] },
    { pregunta: '¿Cuál es la función de la mitocondria?', opciones: ['Producir energía (ATP)', 'Almacenar agua', 'Fabricar proteínas', 'Digerir alimentos'] },
    { pregunta: '¿Qué estructura protege a la célula vegetal?', opciones: ['Pared celular', 'Membrana nuclear', 'Citoplasma', 'Vacuola'] },
  ],

  'tema-1-7': [ // Ecosistemas
    { pregunta: '¿Qué es una cadena trófica?', opciones: ['Transferencia de energía entre organismos', 'Un tipo de ecosistema', 'Una cadena de montañas', 'Un tipo de célula'] },
    { pregunta: '¿Quiénes son los productores en un ecosistema?', opciones: ['Las plantas', 'Los animales', 'Los hongos', 'Las bacterias'] },
    { pregunta: '¿Qué es un consumidor primario?', opciones: ['Herbívoro', 'Carnívoro', 'Descomponedor', 'Productor'] },
    { pregunta: '¿Qué factores son abióticos?', opciones: ['Agua, luz, temperatura', 'Plantas y animales', 'Solo los insectos', 'Los hongos'] },
    { pregunta: '¿Qué organismos descomponen la materia muerta?', opciones: ['Descomponedores', 'Herbívoros', 'Carnívoros', 'Productores'] },
  ],

  'tema-1-8': [ // Las Civilizaciones Antiguas
    { pregunta: '¿En qué continente surgió la civilización egipcia?', opciones: ['África', 'Asia', 'Europa', 'América'] },
    { pregunta: '¿Cuál era la escritura de Mesopotamia?', opciones: ['Cuneiforme', 'Jeroglífica', 'Alfabética', 'Latina'] },
    { pregunta: '¿Qué río fue clave para Egipto?', opciones: ['Nilo', 'Éufrates', 'Amazonas', 'Ganges'] },
    { pregunta: '¿Qué construyeron los egipcios como tumbas para faraones?', opciones: ['Pirámides', 'Coliseos', 'Acueductos', 'Murallas'] },
    { pregunta: '¿Entre qué ríos se ubicó Mesopotamia?', opciones: ['Tigris y Éufrates', 'Nilo y Congo', 'Ganges e Indo', 'Rin y Danubio'] },
  ],

  'tema-1-9': [ // Identidad y Autoestima
    { pregunta: '¿Qué es la autoestima?', opciones: ['La valoración que uno tiene de sí mismo', 'La opinión de los demás', 'La nota del colegio', 'La apariencia física'] },
    { pregunta: '¿Qué es la identidad personal?', opciones: ['Conjunto de características que nos hacen únicos', 'Solo el nombre', 'El DNI', 'La ropa que usamos'] },
    { pregunta: '¿Qué fortalece la autoestima?', opciones: ['Reconocer nuestras cualidades', 'Compararnos con otros', 'Ignorar nuestros errores', 'Hacer lo que otros dicen'] },
    { pregunta: '¿La identidad se construye con...?', opciones: ['Experiencias, cultura y relaciones', 'Solo la genética', 'Solo el dinero', 'Solo la escuela'] },
    { pregunta: '¿Qué es el autoconcepto?', opciones: ['La imagen que tenemos de nosotros mismos', 'Lo que piensan los demás', 'Nuestra estatura', 'El color de piel'] },
  ],

  // ═══════════════════════════════════════════
  // 2DO SECUNDARIA
  // ═══════════════════════════════════════════

  'tema-2-1': [ // Álgebra
    { pregunta: '¿Qué es un monomio?', opciones: ['Expresión algebraica de un solo término', 'Ecuación de segundo grado', 'Una fracción', 'Un número negativo'] },
    { pregunta: '¿Cuál es el resultado de (a+b)²?', opciones: ['a²+2ab+b²', 'a²+b²', '2a+2b', 'a²-b²'] },
    { pregunta: '¿Cuánto es 3x · 2x?', opciones: ['6x²', '5x²', '6x', '5x'] },
    { pregunta: '¿Qué es un polinomio?', opciones: ['Suma de varios monomios', 'Un solo número', 'Una división', 'Un exponente'] },
    { pregunta: '¿Cuál es el producto notable (a-b)(a+b)?', opciones: ['a²-b²', 'a²+b²', '2ab', 'a-b'] },
  ],

  'tema-2-2': [ // Ecuaciones Lineales
    { pregunta: 'Si 2x + 4 = 10, ¿cuánto vale x?', opciones: ['3', '5', '7', '2'] },
    { pregunta: '¿Qué es una ecuación de primer grado?', opciones: ['Tiene la variable con exponente 1', 'Tiene x²', 'No tiene variables', 'Tiene raíz cuadrada'] },
    { pregunta: 'Si 5x = 25, ¿cuánto vale x?', opciones: ['5', '20', '125', '30'] },
    { pregunta: '¿Cuál es el primer paso para resolver 3x - 6 = 9?', opciones: ['Sumar 6 a ambos lados', 'Dividir entre 3', 'Restar 9', 'Multiplicar por 6'] },
    { pregunta: 'Si x/4 = 3, ¿cuánto vale x?', opciones: ['12', '7', '1', '3/4'] },
  ],

  'tema-2-3': [ // Teorema de Pitágoras
    { pregunta: '¿Qué dice el Teorema de Pitágoras?', opciones: ['a²+b²=c² (en triángulo rectángulo)', 'a+b=c', 'a×b=c', 'a²=b²+c²'] },
    { pregunta: 'Si los catetos miden 3 y 4, ¿cuánto mide la hipotenusa?', opciones: ['5', '7', '12', '6'] },
    { pregunta: '¿Qué es la hipotenusa?', opciones: ['El lado más largo del triángulo rectángulo', 'El lado más corto', 'Un ángulo', 'La altura'] },
    { pregunta: '¿En qué tipo de triángulo se aplica Pitágoras?', opciones: ['Rectángulo', 'Equilátero', 'Cualquiera', 'Obtusángulo'] },
    { pregunta: 'Si la hipotenusa es 13 y un cateto es 5, ¿cuánto mide el otro?', opciones: ['12', '8', '18', '10'] },
  ],

  'tema-2-4': [ // Textos Argumentativos
    { pregunta: '¿Cuál es el propósito de un texto argumentativo?', opciones: ['Convencer o persuadir al lector', 'Narrar una historia', 'Describir un lugar', 'Dar instrucciones'] },
    { pregunta: '¿Qué es una tesis en un ensayo?', opciones: ['La postura del autor', 'Un resumen', 'La bibliografía', 'El título'] },
    { pregunta: '¿Qué son los argumentos?', opciones: ['Razones que apoyan la tesis', 'Opiniones sin sustento', 'Datos inventados', 'Preguntas al lector'] },
    { pregunta: '¿Qué es un contraargumento?', opciones: ['Una objeción a la tesis contraria', 'Un error gramatical', 'Un sinónimo', 'Una conclusión'] },
    { pregunta: '¿Cuál es la estructura de un ensayo argumentativo?', opciones: ['Introducción, desarrollo y conclusión', 'Inicio, nudo y desenlace', 'Título y cuerpo', 'Solo opiniones'] },
  ],

  'tema-2-5': [ // La Química en la Vida
    { pregunta: '¿Qué es una mezcla homogénea?', opciones: ['Sus componentes no se distinguen a simple vista', 'Se ven sus partes', 'Solo tiene un elemento', 'Es un compuesto puro'] },
    { pregunta: '¿Cuál es un ejemplo de mezcla heterogénea?', opciones: ['Ensalada', 'Agua con sal disuelta', 'Aire', 'Vinagre'] },
    { pregunta: '¿Qué es un compuesto químico?', opciones: ['Unión de 2 o más elementos en proporción fija', 'Un solo átomo', 'Una mezcla', 'Un gas cualquiera'] },
    { pregunta: '¿Qué método separa mezclas por punto de ebullición?', opciones: ['Destilación', 'Filtración', 'Imantación', 'Decantación'] },
    { pregunta: '¿Cuál es la fórmula del agua?', opciones: ['H₂O', 'CO₂', 'NaCl', 'O₂'] },
  ],

  'tema-2-6': [ // El Virreinato del Perú
    { pregunta: '¿Quién fue el primer virrey del Perú?', opciones: ['Blasco Núñez Vela', 'Francisco Pizarro', 'Túpac Amaru', 'Simón Bolívar'] },
    { pregunta: '¿Cuál fue la capital del Virreinato del Perú?', opciones: ['Lima', 'Cusco', 'Buenos Aires', 'Bogotá'] },
    { pregunta: '¿Qué sistema económico predominó en el Virreinato?', opciones: ['Mercantilismo', 'Capitalismo', 'Feudalismo', 'Socialismo'] },
    { pregunta: '¿Qué institución impartía justicia en el Virreinato?', opciones: ['Real Audiencia', 'El Cabildo', 'La Iglesia', 'El ejército'] },
    { pregunta: '¿Qué trabajo forzado se impuso a los indígenas?', opciones: ['La mita', 'La esclavitud', 'El tributo', 'El diezmo'] },
  ],

  'tema-2-7': [ // Ciudadanía Digital
    { pregunta: '¿Qué es la huella digital en internet?', opciones: ['El rastro que dejamos al navegar', 'Una foto de nuestro dedo', 'Un virus', 'Una contraseña'] },
    { pregunta: '¿Qué es el ciberbullying?', opciones: ['Acoso a través de medios digitales', 'Un videojuego', 'Un tipo de red social', 'Una app educativa'] },
    { pregunta: '¿Cuál es una buena práctica de seguridad digital?', opciones: ['Usar contraseñas fuertes y únicas', 'Compartir contraseñas con amigos', 'Usar la misma clave en todo', 'No actualizar el software'] },
    { pregunta: '¿Qué son los datos personales?', opciones: ['Información que te identifica', 'Solo tu nombre', 'Tus fotos únicamente', 'Tu color favorito'] },
    { pregunta: '¿Qué hacer si un desconocido te contacta por redes?', opciones: ['No responder y contarle a un adulto', 'Darle tu dirección', 'Aceptar siempre', 'Enviar fotos'] },
  ],

  // ═══════════════════════════════════════════
  // 3RO SECUNDARIA
  // ═══════════════════════════════════════════

  'tema-3-1': [ // Funciones y Gráficas
    { pregunta: '¿Qué forma tiene la gráfica de una función lineal?', opciones: ['Una recta', 'Una parábola', 'Un círculo', 'Una hipérbola'] },
    { pregunta: '¿Qué representa la pendiente en y=mx+b?', opciones: ['La inclinación de la recta', 'El punto de corte con X', 'El área bajo la curva', 'El valor de Y'] },
    { pregunta: 'En f(x)=2x+3, ¿cuánto vale f(1)?', opciones: ['5', '3', '2', '6'] },
    { pregunta: '¿Cuál es el vértice de f(x)=x²?', opciones: ['(0,0)', '(1,1)', '(0,1)', '(1,0)'] },
    { pregunta: '¿Qué tipo de función es f(x)=x²+2x+1?', opciones: ['Cuadrática', 'Lineal', 'Constante', 'Cúbica'] },
  ],

  'tema-3-2': [ // Trigonometría
    { pregunta: '¿Qué es el seno de un ángulo?', opciones: ['Cateto opuesto / hipotenusa', 'Cateto adyacente / hipotenusa', 'Hipotenusa / cateto', 'Cateto / cateto'] },
    { pregunta: '¿Cuánto vale sen(90°)?', opciones: ['1', '0', '0.5', '-1'] },
    { pregunta: '¿Qué razón es cos(θ)?', opciones: ['Cateto adyacente / hipotenusa', 'Cateto opuesto / hipotenusa', 'Opuesto / adyacente', 'Hipotenusa / opuesto'] },
    { pregunta: '¿Cuánto vale tan(45°)?', opciones: ['1', '0', '√2', '0.5'] },
    { pregunta: '¿En qué triángulo se definen las razones trigonométricas?', opciones: ['Rectángulo', 'Equilátero', 'Isósceles', 'Obtusángulo'] },
  ],

  'tema-3-3': [ // Estadística
    { pregunta: '¿Qué es la media aritmética?', opciones: ['La suma de datos dividida entre la cantidad', 'El dato que más se repite', 'El dato central', 'El dato mayor'] },
    { pregunta: '¿Qué es la moda?', opciones: ['El dato que más se repite', 'El promedio', 'El dato central', 'La diferencia entre extremos'] },
    { pregunta: '¿Qué es la mediana?', opciones: ['El valor central de datos ordenados', 'El promedio', 'La moda', 'El dato más grande'] },
    { pregunta: 'En {2,3,3,5,7}, ¿cuál es la moda?', opciones: ['3', '5', '4', '2'] },
    { pregunta: 'En {1,2,3,4,5}, ¿cuál es la mediana?', opciones: ['3', '2.5', '4', '5'] },
  ],

  'tema-3-4': [ // Literatura Peruana
    { pregunta: '¿Quién escribió "Los ríos profundos"?', opciones: ['José María Arguedas', 'Mario Vargas Llosa', 'César Vallejo', 'Ricardo Palma'] },
    { pregunta: '¿Qué movimiento literario representa César Vallejo?', opciones: ['Vanguardismo', 'Romanticismo', 'Realismo', 'Costumbrismo'] },
    { pregunta: '¿Quién es el autor de "Tradiciones Peruanas"?', opciones: ['Ricardo Palma', 'Ciro Alegría', 'Arguedas', 'Vallejo'] },
    { pregunta: '¿Qué obra escribió Ciro Alegría?', opciones: ['El mundo es ancho y ajeno', 'Los heraldos negros', 'Trilce', 'Yawar fiesta'] },
    { pregunta: '¿A qué corriente pertenece "Aves sin nido" de Clorinda Matto?', opciones: ['Indigenismo', 'Modernismo', 'Barroco', 'Neoclasicismo'] },
  ],

  'tema-3-5': [ // Genética
    { pregunta: '¿Quién es el padre de la genética?', opciones: ['Gregor Mendel', 'Charles Darwin', 'Watson', 'Pasteur'] },
    { pregunta: '¿Qué es un gen dominante?', opciones: ['Se expresa siempre que está presente', 'Solo aparece en homocigosis', 'No se hereda', 'Es una mutación'] },
    { pregunta: '¿Qué es el genotipo?', opciones: ['La composición genética', 'La apariencia física', 'El ambiente', 'La alimentación'] },
    { pregunta: '¿Qué es el fenotipo?', opciones: ['Las características observables', 'Los genes ocultos', 'El ADN', 'Los cromosomas'] },
    { pregunta: '¿Cuántos cromosomas tiene el ser humano?', opciones: ['46', '23', '48', '44'] },
  ],

  'tema-3-6': [ // Física: Movimiento
    { pregunta: '¿Cuál es la fórmula de velocidad?', opciones: ['v = d/t', 'v = t/d', 'v = d×t', 'v = d+t'] },
    { pregunta: '¿Qué unidad mide la aceleración?', opciones: ['m/s²', 'km/h', 'm/s', 'kg'] },
    { pregunta: '¿Qué dice la primera ley de Newton?', opciones: ['Un cuerpo mantiene su estado si no hay fuerza neta', 'F=ma', 'Acción y reacción son iguales', 'La gravedad atrae todo'] },
    { pregunta: '¿Cuál es la fórmula de la segunda ley de Newton?', opciones: ['F = m × a', 'E = mc²', 'v = d/t', 'P = F/A'] },
    { pregunta: '¿Qué es la inercia?', opciones: ['Resistencia al cambio de movimiento', 'Velocidad constante', 'Fuerza de gravedad', 'Tipo de energía'] },
  ],

  'tema-3-7': [ // La República Aristocrática
    { pregunta: '¿En qué período se dio la República Aristocrática en Perú?', opciones: ['1895-1919', '1821-1850', '1930-1960', '1970-1990'] },
    { pregunta: '¿Qué grupo social dominó la República Aristocrática?', opciones: ['La oligarquía civilista', 'Los militares', 'Los obreros', 'Los campesinos'] },
    { pregunta: '¿Qué actividad económica predominó en ese periodo?', opciones: ['Exportación de materias primas', 'Industria manufacturera', 'Turismo', 'Tecnología'] },
    { pregunta: '¿Qué partido gobernó la mayor parte de este período?', opciones: ['Partido Civil', 'APRA', 'Partido Comunista', 'Acción Popular'] },
    { pregunta: '¿Qué presidente inició la República Aristocrática?', opciones: ['Nicolás de Piérola', 'Augusto B. Leguía', 'Ramón Castilla', 'Andrés A. Cáceres'] },
  ],

  'tema-3-8': [ // Derechos Humanos
    { pregunta: '¿En qué año se firmó la Declaración Universal de los DDHH?', opciones: ['1948', '1945', '1960', '1975'] },
    { pregunta: '¿Qué organización proclamó la Declaración Universal?', opciones: ['La ONU', 'La OEA', 'La OTAN', 'La Cruz Roja'] },
    { pregunta: '¿Cuál es un derecho fundamental?', opciones: ['Derecho a la vida', 'Derecho a un auto', 'Derecho a viajar gratis', 'Derecho a no estudiar'] },
    { pregunta: '¿Los derechos humanos son...?', opciones: ['Universales e inalienables', 'Solo para adultos', 'Solo en algunos países', 'Negociables'] },
    { pregunta: '¿Qué institución defiende los DDHH en Perú?', opciones: ['Defensoría del Pueblo', 'El Congreso', 'La Policía', 'El Banco Central'] },
  ],

  'tema-3-9': [ // Inglés: Present Simple
    { pregunta: 'She ___ to school every day.', opciones: ['goes', 'go', 'going', 'gone'] },
    { pregunta: 'They ___ football on Sundays.', opciones: ['play', 'plays', 'playing', 'played'] },
    { pregunta: 'He ___ coffee in the morning.', opciones: ['drinks', 'drink', 'drinking', 'drank'] },
    { pregunta: 'Which sentence is correct?', opciones: ['She doesn\'t like fish', 'She don\'t like fish', 'She not like fish', 'She no likes fish'] },
    { pregunta: '___ you speak English?', opciones: ['Do', 'Does', 'Is', 'Are'] },
  ],

  // ═══════════════════════════════════════════
  // 4TO SECUNDARIA
  // ═══════════════════════════════════════════

  'tema-4-1': [ // Matrices y Determinantes
    { pregunta: '¿Qué es una matriz cuadrada?', opciones: ['Tiene igual número de filas y columnas', 'Solo tiene una fila', 'Es diagonal', 'No tiene elementos'] },
    { pregunta: '¿Cuál es la matriz identidad de 2×2?', opciones: ['[[1,0],[0,1]]', '[[0,0],[0,0]]', '[[1,1],[1,1]]', '[[2,0],[0,2]]'] },
    { pregunta: '¿Qué es el determinante de una matriz?', opciones: ['Un valor numérico asociado a la matriz', 'Una fila de la matriz', 'Un tipo de matriz', 'La diagonal'] },
    { pregunta: 'Det de [[2,3],[1,4]] = ?', opciones: ['5', '11', '8', '3'] },
    { pregunta: '¿Cuándo una matriz NO tiene inversa?', opciones: ['Cuando su determinante es 0', 'Cuando es cuadrada', 'Cuando tiene números negativos', 'Siempre tiene inversa'] },
  ],

  'tema-4-2': [ // Logaritmos
    { pregunta: '¿Cuánto es log₁₀(100)?', opciones: ['2', '10', '100', '1'] },
    { pregunta: '¿Qué propiedad dice que log(a×b)=log(a)+log(b)?', opciones: ['Logaritmo de un producto', 'Logaritmo de un cociente', 'Cambio de base', 'Potencia'] },
    { pregunta: '¿Cuánto es log₂(8)?', opciones: ['3', '4', '2', '8'] },
    { pregunta: '¿Cuánto es ln(e)?', opciones: ['1', '0', 'e', '2.71'] },
    { pregunta: '¿Cuánto es log(1) en cualquier base?', opciones: ['0', '1', '-1', 'Indefinido'] },
  ],

  'tema-4-3': [ // Probabilidad
    { pregunta: 'Al lanzar un dado, ¿cuál es P(sacar 3)?', opciones: ['1/6', '1/3', '1/2', '3/6'] },
    { pregunta: '¿Cuál es la probabilidad de un evento seguro?', opciones: ['1', '0', '0.5', '2'] },
    { pregunta: 'Al lanzar una moneda, P(cara) = ?', opciones: ['1/2', '1/4', '1', '0'] },
    { pregunta: '¿Qué es el espacio muestral?', opciones: ['Todos los resultados posibles', 'Un solo resultado', 'La probabilidad', 'Un evento'] },
    { pregunta: 'P(A) + P(no A) = ?', opciones: ['1', '0', '2', '0.5'] },
  ],

  'tema-4-4': [ // Textos Científicos
    { pregunta: '¿Cuál es el propósito de un artículo de divulgación?', opciones: ['Explicar temas científicos al público general', 'Entretener con ficción', 'Vender productos', 'Narrar historias'] },
    { pregunta: '¿Qué lenguaje usa un texto de divulgación?', opciones: ['Claro y accesible', 'Solo técnico', 'Poético', 'Coloquial informal'] },
    { pregunta: '¿Qué sección resume un artículo científico?', opciones: ['Abstract o resumen', 'Bibliografía', 'Anexos', 'Dedicatoria'] },
    { pregunta: '¿Qué es una hipótesis?', opciones: ['Una explicación provisional que se puede probar', 'Un hecho comprobado', 'Una opinión personal', 'Una conclusión final'] },
    { pregunta: '¿Qué parte del método científico viene después de la hipótesis?', opciones: ['Experimentación', 'Conclusión', 'Observación', 'Publicación'] },
  ],

  'tema-4-5': [ // Química Orgánica
    { pregunta: '¿Qué elemento es base de la química orgánica?', opciones: ['Carbono', 'Oxígeno', 'Hierro', 'Sodio'] },
    { pregunta: '¿Qué es un hidrocarburo?', opciones: ['Compuesto de carbono e hidrógeno', 'Agua con carbono', 'Un ácido', 'Un mineral'] },
    { pregunta: '¿Cuál es el hidrocarburo más simple?', opciones: ['Metano (CH₄)', 'Etanol', 'Benceno', 'Propano'] },
    { pregunta: '¿Qué tipo de enlace predomina en alcanos?', opciones: ['Enlace simple', 'Enlace doble', 'Enlace triple', 'Enlace iónico'] },
    { pregunta: '¿Qué grupo funcional tiene un alcohol?', opciones: ['-OH', '-COOH', '-NH₂', '-CHO'] },
  ],

  'tema-4-6': [ // Electromagnetismo
    { pregunta: '¿Qué unidad mide la corriente eléctrica?', opciones: ['Amperio (A)', 'Voltio (V)', 'Ohmio (Ω)', 'Watt (W)'] },
    { pregunta: '¿Qué ley dice V = I × R?', opciones: ['Ley de Ohm', 'Ley de Faraday', 'Ley de Coulomb', 'Ley de Newton'] },
    { pregunta: '¿Qué genera un imán?', opciones: ['Campo magnético', 'Campo eléctrico solo', 'Gravedad', 'Sonido'] },
    { pregunta: '¿Qué materiales son atraídos por imanes?', opciones: ['Ferromagnéticos (hierro, cobalto)', 'Plástico', 'Madera', 'Vidrio'] },
    { pregunta: '¿Qué es un circuito en serie?', opciones: ['Componentes conectados uno tras otro', 'Componentes en paralelo', 'Sin resistencia', 'Sin batería'] },
  ],

  'tema-4-7': [ // La Guerra del Pacífico
    { pregunta: '¿Entre qué países se libró la Guerra del Pacífico?', opciones: ['Chile, Perú y Bolivia', 'Perú y Ecuador', 'Chile y Argentina', 'Colombia y Venezuela'] },
    { pregunta: '¿En qué años ocurrió la Guerra del Pacífico?', opciones: ['1879-1883', '1895-1900', '1920-1925', '1850-1855'] },
    { pregunta: '¿Cuál fue la causa económica principal?', opciones: ['Control del salitre y guano', 'Petróleo', 'Oro', 'Comercio de esclavos'] },
    { pregunta: '¿Quién fue el héroe peruano de la batalla de Angamos?', opciones: ['Miguel Grau', 'Andrés A. Cáceres', 'Bolognesi', 'Ramón Castilla'] },
    { pregunta: '¿Qué territorio perdió Perú tras la guerra?', opciones: ['Tarapacá, Arica y Tacna', 'Arequipa', 'Cusco', 'Loreto'] },
  ],

  'tema-4-8': [ // Emprendimiento Social
    { pregunta: '¿Qué busca un emprendimiento social?', opciones: ['Resolver un problema de la comunidad', 'Solo ganar dinero', 'Fama personal', 'Vender productos caros'] },
    { pregunta: '¿Qué es un modelo de negocio Canvas?', opciones: ['Herramienta visual para planificar un negocio', 'Un tipo de pintura', 'Un software', 'Una red social'] },
    { pregunta: '¿Qué es la propuesta de valor?', opciones: ['Lo que ofreces para resolver el problema del cliente', 'El precio del producto', 'La marca', 'El logo'] },
    { pregunta: '¿Qué es un stakeholder?', opciones: ['Persona interesada o afectada por el proyecto', 'Un competidor', 'Un producto', 'Un tipo de empresa'] },
    { pregunta: '¿Cuál es el primer paso al emprender?', opciones: ['Identificar un problema real', 'Pedir un préstamo', 'Diseñar el logo', 'Comprar oficina'] },
  ],

  'tema-4-9': [ // Inglés: Past Simple
    { pregunta: 'She ___ to the store yesterday.', opciones: ['went', 'goes', 'going', 'go'] },
    { pregunta: 'They ___ a movie last night.', opciones: ['watched', 'watch', 'watching', 'watches'] },
    { pregunta: 'I ___ my homework before dinner.', opciones: ['did', 'do', 'does', 'doing'] },
    { pregunta: 'He ___ not come to the party.', opciones: ['did', 'does', 'was', 'is'] },
    { pregunta: 'What is the past of "eat"?', opciones: ['ate', 'eated', 'eaten', 'eating'] },
  ],

  // ═══════════════════════════════════════════
  // 5TO SECUNDARIA
  // ═══════════════════════════════════════════

  'tema-5-1': [ // Derivadas
    { pregunta: '¿Cuál es la derivada de f(x)=x²?', opciones: ['2x', 'x', '2', 'x²'] },
    { pregunta: '¿Cuál es la derivada de una constante?', opciones: ['0', '1', 'La misma constante', 'Infinito'] },
    { pregunta: '¿Qué representa la derivada geométricamente?', opciones: ['La pendiente de la recta tangente', 'El área bajo la curva', 'El volumen', 'La distancia'] },
    { pregunta: '¿Cuál es la derivada de f(x)=3x³?', opciones: ['9x²', '3x²', '6x', '3x³'] },
    { pregunta: '¿Qué regla se usa para derivar f(x)=u·v?', opciones: ['Regla del producto', 'Regla de la cadena', 'Regla del cociente', 'L\'Hôpital'] },
  ],

  'tema-5-2': [ // Integrales
    { pregunta: '¿Cuál es la integral de 2x dx?', opciones: ['x² + C', '2x² + C', 'x + C', '2 + C'] },
    { pregunta: '¿Qué representa la integral definida?', opciones: ['El área bajo la curva', 'La pendiente', 'La derivada', 'El máximo'] },
    { pregunta: '¿Cuál es la integral de dx?', opciones: ['x + C', '1 + C', '0', 'dx'] },
    { pregunta: '¿Qué es la constante de integración C?', opciones: ['Constante arbitraria que aparece en integrales indefinidas', 'Siempre vale 0', 'La derivada', 'Un error'] },
    { pregunta: '∫x² dx = ?', opciones: ['x³/3 + C', 'x³ + C', '2x + C', '3x² + C'] },
  ],

  'tema-5-3': [ // Análisis Combinatorio
    { pregunta: '¿Cuántas permutaciones hay de 3 elementos?', opciones: ['6', '3', '9', '27'] },
    { pregunta: '¿Cuál es la fórmula de combinaciones?', opciones: ['C(n,r) = n! / (r!(n-r)!)', 'C=n×r', 'C=n+r', 'C=n^r'] },
    { pregunta: '¿Cuánto es 5!?', opciones: ['120', '25', '60', '720'] },
    { pregunta: '¿Cuánto es C(4,2)?', opciones: ['6', '8', '12', '4'] },
    { pregunta: '¿Cuál es la diferencia entre permutación y combinación?', opciones: ['El orden importa en permutación', 'Son lo mismo', 'El orden importa en combinación', 'No hay diferencia'] },
  ],

  'tema-5-4': [ // Filosofía y Ética
    { pregunta: '¿Quién es considerado el padre de la filosofía occidental?', opciones: ['Sócrates', 'Aristóteles', 'Platón', 'Descartes'] },
    { pregunta: '¿Qué estudia la ética?', opciones: ['La moral y el comportamiento correcto', 'El universo', 'Los números', 'La política'] },
    { pregunta: '¿Qué corriente dice "pienso, luego existo"?', opciones: ['Racionalismo', 'Empirismo', 'Existencialismo', 'Positivismo'] },
    { pregunta: '¿Qué es un dilema moral?', opciones: ['Situación con dos opciones moralmente conflictivas', 'Un problema matemático', 'Una ley', 'Un castigo'] },
    { pregunta: '¿Qué corriente filosófica prioriza la experiencia sensorial?', opciones: ['Empirismo', 'Racionalismo', 'Idealismo', 'Nihilismo'] },
  ],

  'tema-5-5': [ // Biología Molecular
    { pregunta: '¿Qué significa ADN?', opciones: ['Ácido desoxirribonucleico', 'Ácido ribonucleico', 'Adenina nucleica', 'Ácido dinucleótido'] },
    { pregunta: '¿Cuáles son las bases nitrogenadas del ADN?', opciones: ['Adenina, Timina, Guanina, Citosina', 'Adenina, Uracilo, Guanina, Citosina', 'Solo Adenina y Timina', 'Glucosa y Fructosa'] },
    { pregunta: '¿Dónde ocurre la síntesis de proteínas?', opciones: ['En los ribosomas', 'En el núcleo', 'En la mitocondria', 'En la membrana'] },
    { pregunta: '¿Qué es el ARN mensajero?', opciones: ['Copia del ADN que lleva info al ribosoma', 'Un tipo de proteína', 'Un lípido', 'Una enzima'] },
    { pregunta: '¿Qué proceso copia el ADN antes de la división celular?', opciones: ['Replicación', 'Transcripción', 'Traducción', 'Mutación'] },
  ],

  'tema-5-6': [ // Física Moderna
    { pregunta: '¿Quién propuso la teoría de la relatividad?', opciones: ['Einstein', 'Newton', 'Bohr', 'Planck'] },
    { pregunta: '¿Qué dice E=mc²?', opciones: ['La energía equivale a masa por velocidad de la luz al cuadrado', 'Energía = movimiento × calor', 'Es una fórmula de velocidad', 'Relaciona voltaje y corriente'] },
    { pregunta: '¿Qué estudia la mecánica cuántica?', opciones: ['El comportamiento de partículas subatómicas', 'Los planetas', 'Los fluidos', 'La termodinámica'] },
    { pregunta: '¿Qué es un fotón?', opciones: ['Partícula de luz', 'Partícula de materia', 'Un electrón', 'Un protón'] },
    { pregunta: '¿Qué principio dice que no se puede conocer posición y velocidad exactas a la vez?', opciones: ['Principio de Incertidumbre de Heisenberg', 'Principio de Arquímedes', 'Ley de Ohm', 'Ley de Hooke'] },
  ],

  'tema-5-7': [ // Globalización
    { pregunta: '¿Qué es la globalización?', opciones: ['Integración económica, cultural y política mundial', 'Solo comercio entre países', 'Una ley peruana', 'Un tratado militar'] },
    { pregunta: '¿Qué organismo regula el comercio internacional?', opciones: ['OMC (Organización Mundial del Comercio)', 'ONU', 'FMI', 'UNESCO'] },
    { pregunta: '¿Cuál es un efecto positivo de la globalización?', opciones: ['Acceso a información y tecnología', 'Desaparición de todas las culturas', 'Aislamiento total', 'Mayor pobreza siempre'] },
    { pregunta: '¿Cuál es un efecto negativo de la globalización?', opciones: ['Pérdida de identidad cultural local', 'Mayor educación', 'Más empleos siempre', 'Paz mundial'] },
    { pregunta: '¿Qué es un TLC?', opciones: ['Tratado de Libre Comercio', 'Tipo de Ley Constitucional', 'Tarifa Legal de Consumo', 'Tecnología Libre de Costo'] },
  ],

  'tema-5-8': [ // Planificación Financiera
    { pregunta: '¿Qué es un presupuesto personal?', opciones: ['Plan de ingresos y gastos', 'Una deuda', 'Un tipo de ahorro', 'Una inversión'] },
    { pregunta: '¿Qué es el ahorro?', opciones: ['Parte del ingreso que no se gasta', 'Gastar todo', 'Un préstamo', 'Una multa'] },
    { pregunta: '¿Qué es una tasa de interés?', opciones: ['Porcentaje que se cobra o paga por dinero prestado', 'Un impuesto', 'Un descuento fijo', 'El precio de un producto'] },
    { pregunta: '¿Qué es diversificar inversiones?', opciones: ['Distribuir dinero en diferentes opciones', 'Poner todo en un solo lugar', 'No invertir nada', 'Gastar más'] },
    { pregunta: '¿Qué es la inflación?', opciones: ['Aumento general de precios', 'Baja de precios', 'Aumento de salarios', 'Una moneda'] },
  ],

  'tema-5-9': [ // Inglés: Future Tenses
    { pregunta: 'I ___ travel to Japan next year.', opciones: ['will', 'am', 'was', 'did'] },
    { pregunta: 'She ___ going to study medicine.', opciones: ['is', 'will', 'does', 'has'] },
    { pregunta: 'They ___ arrive at 8pm tomorrow.', opciones: ['will', 'are', 'were', 'did'] },
    { pregunta: 'Which expresses a plan? "I ___ meet her at 5."', opciones: ['am going to', 'will', 'did', 'was'] },
    { pregunta: 'The train ___ at 9am (scheduled future).', opciones: ['leaves', 'will leave', 'left', 'leaving'] },
  ],
};
