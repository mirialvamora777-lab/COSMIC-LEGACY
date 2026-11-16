/*
 * COSMIC LEGACY · Explorador de planetas dentro del sistema solar 3D.
 * Módulo independiente: no toca el render WebGL. Escucha el evento
 * 'solar3d:focus' (lanzado por sistema-solar.js al hacer clic en un planeta,
 * su etiqueta o su botón) y dibuja encima de la escena una capa transparente
 * con las naves/antenas del planeta. El sistema solar sigue girando debajo.
 */
(() => {
  'use strict';

  const stage = document.getElementById('solar3d-escena');
  if (!stage) return;

  // [español, inglés]
  const MUNDOS = {
    mercurio: {
      name: ['Mercurio', 'Mercury'],
      kicker: ['PLANETA ROCOSO · EL MÁS CERCANO AL SOL', 'ROCKY PLANET · CLOSEST TO THE SUN'],
      desc: ['Un mundo pequeño y lleno de cráteres, con días larguísimos y temperaturas extremas.', 'A small, heavily cratered world with extremely long days and extreme temperatures.'],
      ships: [
        { k: 'MARINER 10', a: ['NASA · 1973—1975', 'NASA · 1973—1975'], n: ['Mariner 10', 'Mariner 10'],
          d: ['Primera nave en visitar Mercurio: lo sobrevoló tres veces entre 1974 y 1975 y mostró un mundo lleno de cráteres.', 'First spacecraft to visit Mercury: it flew past three times in 1974–1975 and revealed a heavily cratered world.'],
          f: ['También fue la primera misión en usar la gravedad de un planeta para llegar a otro.', 'It was also the first mission to use one planet’s gravity to reach another.'], x: 25, y: 29 },
        { k: 'MESSENGER', a: ['NASA · 2004—2015', 'NASA · 2004—2015'], n: ['MESSENGER', 'MESSENGER'],
          d: ['Primera sonda en orbitar Mercurio (2011). Cartografió toda su superficie y estudió su campo magnético.', 'First probe to orbit Mercury (2011). It mapped the whole surface and studied its magnetic field.'],
          f: ['Terminó su misión en 2015 con un impacto controlado contra la superficie.', 'It ended its mission in 2015 with a controlled impact on the surface.'], x: 76, y: 32 },
        { k: 'BEPICOLOMBO', a: ['ESA / JAXA · 2018', 'ESA / JAXA · 2018'], n: ['BepiColombo', 'BepiColombo'],
          d: ['Misión europeo-japonesa con dos orbitadores para estudiar la superficie, el interior y el campo magnético de Mercurio.', 'A European–Japanese mission with two orbiters to study Mercury’s surface, interior and magnetic field.'],
          f: ['Usa varios sobrevuelos de la Tierra, Venus y Mercurio para frenar y acercarse al planeta.', 'It uses several flybys of Earth, Venus and Mercury to slow down and approach the planet.'], x: 65, y: 74 }
      ]
    },
    venus: {
      name: ['Venus', 'Venus'],
      kicker: ['PLANETA ROCOSO · EL MÁS CALIENTE', 'ROCKY PLANET · THE HOTTEST'],
      desc: ['Un planeta cubierto de nubes densas, con un efecto invernadero extremo que esconde su superficie.', 'A planet wrapped in thick clouds, with an extreme greenhouse effect that hides its surface.'],
      ships: [
        { k: 'MARINER 2', a: ['NASA · 1962', 'NASA · 1962'], n: ['Mariner 2', 'Mariner 2'],
          d: ['Primera nave en completar con éxito el sobrevuelo de otro planeta. Midió las altísimas temperaturas de Venus.', 'First spacecraft to successfully fly past another planet. It measured Venus’s extreme temperatures.'],
          f: ['Confirmó que Venus es mucho más caliente de lo que se pensaba.', 'It confirmed that Venus is far hotter than expected.'], x: 25, y: 29 },
        { k: 'VENERA 7', a: ['URSS · 1970', 'USSR · 1970'], n: ['Venera 7', 'Venera 7'],
          d: ['Primera sonda en transmitir datos desde la superficie de otro planeta tras aterrizar en Venus.', 'First probe to transmit data from the surface of another planet after landing on Venus.'],
          f: ['Su señal fue débil y duró apenas unos 23 minutos en un entorno de calor y presión extremos.', 'Its signal was weak and lasted only about 23 minutes in extreme heat and pressure.'], x: 76, y: 32 },
        { k: 'MAGELLAN', a: ['NASA · 1989—1994', 'NASA · 1989—1994'], n: ['Magellan', 'Magellan'],
          d: ['Usó radar para atravesar las nubes y cartografiar casi toda la superficie de Venus.', 'It used radar to see through the clouds and map almost the entire surface of Venus.'],
          f: ['Reveló volcanes, fallas y cráteres escondidos bajo la densa atmósfera.', 'It revealed volcanoes, faults and craters hidden beneath the dense atmosphere.'], x: 65, y: 74 }
      ]
    },
    tierra: {
      name: ['La Tierra', 'Earth'],
      kicker: ['PLANETA ROCOSO · NUESTRO HOGAR', 'ROCKY PLANET · OUR HOME'],
      desc: ['Un planeta dinámico, protegido por una atmósfera y observado continuamente por una flota de observatorios espaciales.', 'A dynamic planet, protected by an atmosphere and continuously watched by a fleet of space observatories.'],
      ships: [
        { k: 'HUBBLE', a: ['NASA / ESA · 1990—ACTUALIDAD', 'NASA / ESA · 1990—PRESENT'], n: ['Telescopio espacial Hubble', 'Hubble Space Telescope'],
          d: ['Observatorio espacial que ha estudiado planetas, estrellas, galaxias y otros fenómenos del universo durante décadas.', 'A space observatory that has studied planets, stars, galaxies and other phenomena for decades.'],
          f: ['Observa el cosmos desde la órbita terrestre.', 'It observes the cosmos from Earth orbit.'], x: 24, y: 30 },
        { k: 'ISS', a: ['COLABORACIÓN INTERNACIONAL · 1998—ACTUALIDAD', 'INTERNATIONAL COLLABORATION · 1998—PRESENT'], n: ['Estación Espacial Internacional', 'International Space Station'],
          d: ['Laboratorio orbital habitado donde equipos internacionales realizan experimentos y estudian cómo vivir y trabajar en el espacio.', 'An inhabited orbital laboratory where international teams run experiments and study how to live and work in space.'],
          f: ['Es uno de los mayores proyectos de cooperación científica internacional.', 'It is one of the largest international science cooperation projects.'], x: 77, y: 34 },
        { k: 'JWST', a: ['NASA / ESA / CSA · 2021—ACTUALIDAD', 'NASA / ESA / CSA · 2021—PRESENT'], n: ['Telescopio espacial James Webb', 'James Webb Space Telescope'],
          d: ['Observatorio diseñado para estudiar el universo principalmente en luz infrarroja, desde galaxias tempranas hasta atmósferas de exoplanetas.', 'An observatory designed to study the universe mainly in infrared light, from early galaxies to exoplanet atmospheres.'],
          f: ['Opera alrededor del punto de Lagrange L2, lejos de la Tierra.', 'It operates around the L2 Lagrange point, far from Earth.'], x: 66, y: 75 }
      ]
    },
    marte: {
      name: ['Marte', 'Mars'],
      kicker: ['PLANETA ROCOSO · EL PLANETA ROJO', 'ROCKY PLANET · THE RED PLANET'],
      desc: ['Un desierto planetario con volcanes gigantes, antiguos cauces y una historia que los robots exploran sobre y alrededor de su superficie.', 'A planetary desert with giant volcanoes, ancient riverbeds and a history that robots explore on and around its surface.'],
      ships: [
        { k: 'PERSEVERANCE', a: ['NASA · 2021—ACTUALIDAD', 'NASA · 2021—PRESENT'], n: ['Rover Perseverance', 'Perseverance rover'],
          d: ['Vehículo robótico que explora el cráter Jezero, estudia la geología marciana y recoge muestras para una posible campaña de retorno.', 'A robotic vehicle exploring Jezero crater, studying Martian geology and collecting samples for a possible return campaign.'],
          f: ['Llegó acompañado por el pequeño helicóptero Ingenuity.', 'It arrived together with the small Ingenuity helicopter.'], x: 25, y: 29 },
        { k: 'MRO', a: ['NASA · 2006—ACTUALIDAD', 'NASA · 2006—PRESENT'], n: ['Mars Reconnaissance Orbiter', 'Mars Reconnaissance Orbiter'],
          d: ['Orbitador que observa Marte en alta resolución, estudia minerales, hielo y cambios en la superficie, y retransmite comunicaciones de rovers.', 'An orbiter that observes Mars in high resolution, studies minerals, ice and surface changes, and relays rover communications.'],
          f: ['Sus cámaras han fotografiado lugares de aterrizaje y actividad en la superficie.', 'Its cameras have photographed landing sites and surface activity.'], x: 65, y: 74 }
      ]
    },
    jupiter: {
      name: ['Júpiter', 'Jupiter'],
      kicker: ['GIGANTE GASEOSO · EL MÁS GRANDE', 'GAS GIANT · THE LARGEST'],
      desc: ['El mayor planeta del sistema solar: tormentas gigantes, un campo magnético inmenso y decenas de lunas.', 'The largest planet in the solar system: giant storms, an immense magnetic field and dozens of moons.'],
      ships: [
        { k: 'GALILEO', a: ['NASA · 1989—2003', 'NASA · 1989—2003'], n: ['Galileo', 'Galileo'],
          d: ['Primera nave en orbitar Júpiter. Estudió el planeta y sus lunas durante ocho años.', 'First spacecraft to orbit Jupiter. It studied the planet and its moons for eight years.'],
          f: ['Terminó hundiéndose en la atmósfera de Júpiter para proteger a sus lunas.', 'It ended by plunging into Jupiter’s atmosphere to protect its moons.'], x: 25, y: 29 },
        { k: 'JUNO', a: ['NASA · LLEGÓ EN 2016', 'NASA · ARRIVED IN 2016'], n: ['Juno', 'Juno'],
          d: ['Orbitador polar que estudia la atmósfera, el campo magnético y el interior de Júpiter.', 'A polar orbiter studying Jupiter’s atmosphere, magnetic field and interior.'],
          f: ['Sus órbitas alargadas le permiten pasar muy cerca de las nubes del planeta.', 'Its elongated orbits let it pass very close to the planet’s clouds.'], x: 76, y: 32 },
        { k: 'EUROPA CLIPPER', a: ['NASA · 2024', 'NASA · 2024'], n: ['Europa Clipper', 'Europa Clipper'],
          d: ['Nave lanzada para estudiar la luna Europa y evaluar si bajo su hielo existen condiciones habitables.', 'A spacecraft launched to study the moon Europa and assess whether habitable conditions exist beneath its ice.'],
          f: ['Se espera que llegue al sistema de Júpiter en 2030.', 'It is expected to reach the Jupiter system in 2030.'], x: 65, y: 74 }
      ]
    },
    saturno: {
      name: ['Saturno', 'Saturn'],
      kicker: ['GIGANTE GASEOSO · UN MUNDO DE ANILLOS', 'GAS GIANT · A WORLD OF RINGS'],
      desc: ['Famoso por sus anillos de hielo y roca, y por lunas tan fascinantes como Titán y Encélado.', 'Famous for its rings of ice and rock, and for fascinating moons such as Titan and Enceladus.'],
      ships: [
        { k: 'PIONEER 11', a: ['NASA · 1973—1995', 'NASA · 1973—1995'], n: ['Pioneer 11', 'Pioneer 11'],
          d: ['Primera nave en sobrevolar Saturno, en 1979, abriendo el camino a las misiones posteriores.', 'First spacecraft to fly past Saturn, in 1979, paving the way for later missions.'],
          f: ['Descubrió el anillo F de Saturno.', 'It discovered Saturn’s F ring.'], x: 25, y: 29 },
        { k: 'CASSINI', a: ['NASA / ESA / ASI · 1997—2017', 'NASA / ESA / ASI · 1997—2017'], n: ['Cassini', 'Cassini'],
          d: ['Orbitó Saturno durante 13 años y estudió el planeta, sus anillos y lunas como Titán y Encélado.', 'It orbited Saturn for 13 years and studied the planet, its rings and moons such as Titan and Enceladus.'],
          f: ['Terminó su misión en 2017 hundiéndose en la atmósfera de Saturno.', 'It ended its mission in 2017 by plunging into Saturn’s atmosphere.'], x: 76, y: 32 },
        { k: 'HUYGENS', a: ['ESA · 2005', 'ESA · 2005'], n: ['Sonda Huygens', 'Huygens probe'],
          d: ['Sonda transportada por Cassini que descendió hasta Titán, la mayor luna de Saturno.', 'A probe carried by Cassini that descended to Titan, Saturn’s largest moon.'],
          f: ['Fue el primer aterrizaje en un cuerpo del sistema solar exterior.', 'It was the first landing on a body in the outer solar system.'], x: 65, y: 74 }
      ]
    },
    urano: {
      name: ['Urano', 'Uranus'],
      kicker: ['GIGANTE HELADO · EL PLANETA INCLINADO', 'ICE GIANT · THE TILTED PLANET'],
      desc: ['Gira prácticamente de lado y está rodeado de anillos oscuros y delgados. Solo una nave lo ha visitado.', 'It spins almost on its side and is surrounded by dark, thin rings. Only one spacecraft has visited it.'],
      ships: [
        { k: 'VOYAGER 2', a: ['NASA · LANZADA EN 1977 · SOBREVUELO 1986', 'NASA · LAUNCHED 1977 · FLYBY 1986'], n: ['Voyager 2', 'Voyager 2'],
          d: ['Única nave que ha visitado Urano, en su sobrevuelo de enero de 1986.', 'The only spacecraft to have visited Uranus, in its January 1986 flyby.'],
          f: ['Descubrió diez lunas nuevas y dos anillos.', 'It discovered ten new moons and two rings.'], x: 25, y: 29 },
        { k: 'HUBBLE', a: ['NASA / ESA · 1990—ACTUALIDAD', 'NASA / ESA · 1990—PRESENT'], n: ['Telescopio espacial Hubble', 'Hubble Space Telescope'],
          d: ['Ha seguido la atmósfera, las estaciones y las auroras de Urano desde la órbita terrestre.', 'It has followed Uranus’s atmosphere, seasons and auroras from Earth orbit.'],
          f: ['Ayudó a descubrir lunas pequeñas del planeta.', 'It helped discover small moons of the planet.'], x: 76, y: 32 },
        { k: 'JWST', a: ['NASA / ESA / CSA · 2021—ACTUALIDAD', 'NASA / ESA / CSA · 2021—PRESENT'], n: ['Telescopio espacial James Webb', 'James Webb Space Telescope'],
          d: ['Captó en infrarrojo los anillos y la atmósfera de Urano con un detalle sin precedentes.', 'It captured Uranus’s rings and atmosphere in infrared with unprecedented detail.'],
          f: ['Su imagen de 2023 mostró 11 de los 13 anillos conocidos.', 'Its 2023 image showed 11 of the 13 known rings.'], x: 65, y: 74 }
      ]
    },
    neptuno: {
      name: ['Neptuno', 'Neptune'],
      kicker: ['GIGANTE HELADO · EL MÁS DISTANTE', 'ICE GIANT · THE MOST DISTANT'],
      desc: ['El planeta más lejano del Sol, con vientos supersónicos y tormentas oscuras. Solo una nave lo ha visitado.', 'The planet farthest from the Sun, with supersonic winds and dark storms. Only one spacecraft has visited it.'],
      ships: [
        { k: 'VOYAGER 2', a: ['NASA · LANZADA EN 1977 · SOBREVUELO 1989', 'NASA · LAUNCHED 1977 · FLYBY 1989'], n: ['Voyager 2', 'Voyager 2'],
          d: ['Única nave que ha visitado Neptuno, en agosto de 1989.', 'The only spacecraft to have visited Neptune, in August 1989.'],
          f: ['Descubrió la Gran Mancha Oscura y géiseres en su luna Tritón.', 'It discovered the Great Dark Spot and geysers on its moon Triton.'], x: 25, y: 29 },
        { k: 'HUBBLE', a: ['NASA / ESA · 1990—ACTUALIDAD', 'NASA / ESA · 1990—PRESENT'], n: ['Telescopio espacial Hubble', 'Hubble Space Telescope'],
          d: ['Sigue los cambios de las nubes y de las manchas oscuras de Neptuno.', 'It tracks changes in Neptune’s clouds and dark spots.'],
          f: ['Ha mostrado que las manchas oscuras aparecen y desaparecen con los años.', 'It has shown that the dark spots appear and vanish over the years.'], x: 76, y: 32 },
        { k: 'JWST', a: ['NASA / ESA / CSA · 2021—ACTUALIDAD', 'NASA / ESA / CSA · 2021—PRESENT'], n: ['Telescopio espacial James Webb', 'James Webb Space Telescope'],
          d: ['Fotografió los anillos de Neptuno en infrarrojo con una nitidez que no se veía desde Voyager 2.', 'It photographed Neptune’s rings in infrared with a clarity not seen since Voyager 2.'],
          f: ['Su imagen de 2022 mostró anillos que no se observaban con claridad desde 1989.', 'Its 2022 image showed rings not clearly observed since 1989.'], x: 65, y: 74 }
      ]
    }
  };

  // Misiones adicionales. Los vehículos de superficie se señalan en el cuerpo visitado;
  // sondas de sobrevuelo y telescopios se identifican como tales, sin simular un aterrizaje.
  const extra = (k, place, year, es, en, reasonEs, reasonEn, findEs, findEn, factEs, factEn, x, y, kind='surface') => ({
    k, a: [`NASA · ${year}`, `NASA · ${year}`], n:[k,k], d:[es,en],
    why:[reasonEs,reasonEn], discoveries:[findEs,findEn], f:[factEs,factEn], x,y,kind
  });
  MUNDOS.marte.ships.push(
    extra('OPPORTUNITY','marte','2004—2018','Rover de exploración geológica que recorrió Marte durante más de catorce años.','A geological rover that explored Mars for more than fourteen years.','Fue enviado a buscar señales de agua antigua.','It was sent to search for evidence of ancient water.','Encontró minerales y rocas que revelan la acción pasada del agua.','It found minerals and rocks shaped by water in the distant past.','Su misión prevista era de solo 90 soles marcianos.','Its planned mission was only 90 Martian sols.',20,66),
    extra('INGENUITY','marte','2020—2024','Pequeño helicóptero robótico que demostró el vuelo controlado en Marte.','A small robotic helicopter that demonstrated powered flight on Mars.','Viajó con Perseverance para probar el vuelo en una atmósfera muy tenue.','It traveled with Perseverance to test flight in a very thin atmosphere.','Realizó 72 vuelos y abrió nuevas posibilidades para explorar otros mundos.','It completed 72 flights, opening new possibilities for exploring other worlds.','Fue la primera aeronave en lograr vuelo propulsado y controlado en otro planeta.','It was the first aircraft to achieve powered, controlled flight on another planet.',78,66),
    extra('MARS PATHFINDER','marte','1996—1997','Misión que llevó a Marte una plataforma de aterrizaje y al pequeño rover Sojourner.','A mission that delivered a lander and the small Sojourner rover to Mars.','Probó una forma económica de aterrizar y explorar la superficie marciana.','It tested a lower-cost way to land and explore the Martian surface.','Transmitió imágenes, mediciones del clima y análisis de rocas.','It returned images, weather measurements and rock analyses.','Sojourner fue el primer rover en desplazarse por Marte.','Sojourner was the first rover to drive on Mars.',52,76)
  );
  MUNDOS.luna = {name:['La Luna','The Moon'], kicker:['SATÉLITE NATURAL','NATURAL SATELLITE'],desc:['Explora las huellas de la exploración humana y robótica lunar.','Explore the traces of human and robotic lunar exploration.'],ships:[
    extra('SURVEYOR 3','luna','1967','Sonda robótica que aterrizó suavemente en la Luna.','A robotic spacecraft that soft-landed on the Moon.','Investigó el suelo lunar antes de las misiones tripuladas.','It studied lunar soil before crewed missions.','Fotografió y excavó el regolito lunar.','It photographed and dug into lunar regolith.','Los astronautas del Apollo 12 recuperaron piezas de Surveyor 3.','Apollo 12 astronauts retrieved parts of Surveyor 3.',22,35),
    extra('APOLLO 11 · EAGLE','luna','1969','Módulo lunar Eagle, que llevó a los primeros seres humanos a la superficie lunar.','Eagle lunar module, which carried the first humans to the Moon’s surface.','Demostrar que era posible aterrizar humanos y regresar a salvo.','To demonstrate that humans could land and return safely.','Neil Armstrong y Buzz Aldrin exploraron la superficie y recogieron muestras.','Neil Armstrong and Buzz Aldrin explored the surface and collected samples.','Eagle aterrizó en el Mar de la Tranquilidad.','Eagle landed in the Sea of Tranquility.',70,32)
  ]};
  MUNDOS.jupiter.ships.push(extra('PIONEER 10','jupiter','1972—2003','Sonda pionera en atravesar el cinturón de asteroides y sobrevolar Júpiter.','Pioneering probe that crossed the asteroid belt and flew past Jupiter.','Estudiar Júpiter y el entorno del sistema solar exterior.','To study Jupiter and the outer solar system.','Obtuvo imágenes y mediciones del planeta y su radiación.','It returned images and measurements of the planet and its radiation.','No aterrizó en Júpiter: continuó su trayectoria hacia el espacio interestelar.','It never landed on Jupiter: it continued toward interstellar space.',48,67,'flyby'));
  // Estos destinos no son planetas. Se presentan como archivos accesibles desde el explorador.
  MUNDOS.asteroides = {name:['Asteroides','Asteroids'],kicker:['CUERPOS MENORES','SMALL BODIES'],desc:['Misiones a Eros, Vesta y Ceres.','Missions to Eros, Vesta and Ceres.'],ships:[
    extra('NEAR SHOEMAKER','asteroides','1996—2001','Primera nave en orbitar un asteroide cercano a la Tierra, Eros.','First spacecraft to orbit a near-Earth asteroid, Eros.','Estudiar la composición y estructura de Eros.','To study the composition and structure of Eros.','Cartografió Eros y terminó posándose en su superficie.','It mapped Eros and ultimately touched down on its surface.','Su aterrizaje no era el objetivo principal original.','Landing was not its original primary objective.',32,40),
    extra('DAWN','asteroides','2007—2018','Sonda que exploró Vesta y el planeta enano Ceres.','Probe that explored Vesta and dwarf planet Ceres.','Investigar los orígenes del sistema solar a través de dos cuerpos primitivos.','To investigate solar-system origins through two early bodies.','Reveló la geología de Vesta y depósitos brillantes en Ceres.','It revealed Vesta’s geology and bright deposits on Ceres.','Fue la primera nave en orbitar dos cuerpos extraterrestres distintos.','It was the first spacecraft to orbit two different extraterrestrial bodies.',70,65,'orbiter')
  ]};
  MUNDOS.espacio = {name:['Espacio profundo','Deep space'],kicker:['OBSERVATORIO ESPACIAL','SPACE OBSERVATORY'],desc:['Telescopios que observan estrellas lejanas.','Telescopes observing distant stars.'],ships:[
    extra('KEPLER / K2','espacio','2009—2018','Telescopio espacial dedicado a buscar planetas alrededor de otras estrellas.','Space telescope dedicated to finding planets around other stars.','Medir pequeñas disminuciones de brillo estelar producidas por tránsitos planetarios.','To measure small dips in starlight caused by planetary transits.','Ayudó a descubrir miles de exoplanetas y candidatos.','It helped discover thousands of exoplanets and candidates.','K2 fue la misión extendida después de fallas en ruedas de reacción.','K2 was the extended mission after reaction-wheel failures.',50,50,'telescope')
  ]};
  MUNDOS.saturno.ships.find(s=>s.k==='CASSINI').why=['Estudiar Saturno, sus anillos y sus lunas durante años.','To study Saturn, its rings and its moons for years.'];
  MUNDOS.saturno.ships.find(s=>s.k==='CASSINI').discoveries=['Investigó los géiseres de Encélado y los lagos de Titán.','It investigated Enceladus’s plumes and Titan’s lakes.'];

  const KEEP = ['OPPORTUNITY','INGENUITY','CASSINI','PIONEER 10','NEAR SHOEMAKER','SURVEYOR 3','APOLLO 11 · EAGLE'];
  const MUNDOS_ORIGINAL = Object.fromEntries(Object.entries(MUNDOS).map(([k,w]) => [k,w.ships.slice()]));
  Object.values(MUNDOS).forEach(w => { w.ships = w.ships.filter(sh => KEEP.includes(sh.k)); });
  // Contexto histórico adicional: no se suma al pasaporte de las siete naves.
  const context = (world, key, kind, why, discoveries, fact, source) => {
    const original = MUNDOS_ORIGINAL[world].find(s => s.k === key);
    MUNDOS[world].ships.push({...original, kind, why, discoveries, f:fact, source, x:50, y:50});
  };
  context('mercurio','MESSENGER','orbiter',['Cartografiar Mercurio y estudiar su composición y campo magnético.','Map Mercury and study its composition and magnetic field.'],['Confirmó hielo de agua en depósitos polares.','Confirmed water ice in polar deposits.'],['Terminó con un impacto en Mercurio el 30 de abril de 2015.','Its mission ended with an impact on Mercury on April 30, 2015.'],'https://science.nasa.gov/mission/messenger/');
  context('venus','MAGELLAN','orbiter',['Cartografiar Venus usando radar a través de las nubes.','Map Venus using radar through its clouds.'],['Reveló la geología y el relieve de Venus.','Revealed Venus’s geology and surface features.'],['Se destruyó al entrar en la atmósfera en 1994; no queda una nave intacta en la superficie.','It was destroyed entering the atmosphere in 1994; no intact lander remains on the surface.'],'https://science.nasa.gov/mission/magellan/');
  context('urano','VOYAGER 2','flyby',['Estudiar de cerca Urano, sus lunas y anillos en 1986.','Study Uranus, its moons and rings up close in 1986.'],['Descubrió diez lunas y dos anillos.','Discovered ten moons and two rings.'],['Sobrevuelo histórico: no aterrizó ni quedó en Urano. NASA la clasifica como misión extendida.','Historical flyby: it did not land or remain at Uranus. NASA lists it as an extended mission.'],'https://science.nasa.gov/mission/voyager/voyager-2/');
  context('neptuno','VOYAGER 2','flyby',['Investigar Neptuno y Tritón durante el sobrevuelo de 1989.','Investigate Neptune and Triton during the 1989 flyby.'],['Observó la Gran Mancha Oscura y actividad en Tritón.','Observed the Great Dark Spot and activity on Triton.'],['Sobrevuelo histórico: siguió hacia el espacio interestelar, no se abandonó en Neptuno.','Historical flyby: it continued toward interstellar space, not abandoned at Neptune.'],'https://science.nasa.gov/mission/voyager/voyager-2/');
  MUNDOS.tierra.ships.push({...extra('EXPLORER 1','tierra','1958—1970','Primer satélite estadounidense puesto con éxito en órbita.','First successfully launched U.S. satellite.','Medir la radiación cerca de la Tierra.','Measure radiation near Earth.','Sus datos contribuyeron al descubrimiento de los cinturones de Van Allen.','Its data contributed to the discovery of the Van Allen belts.','Dejó de transmitir en 1958 y se destruyó al reentrar en 1970.','It stopped transmitting in 1958 and burned up on reentry in 1970.',50,50,'orbiter'),source:'https://www.jpl.nasa.gov/missions/explorer-1/'});
  MUNDOS.marte.ships.forEach((sh, i) => { sh.x = [28, 72][i]; sh.y = [40, 62][i]; });
  MUNDOS.jupiter.ships[0].x = 50; MUNDOS.jupiter.ships[0].y = 55;
  MUNDOS.saturno.ships[0].x = 50; MUNDOS.saturno.ships[0].y = 55;
  // Se recuperan dos fichas de archivo sin modificar las 21 preguntas.
  context('asteroides','DAWN','orbiter',['Estudiar cómo se formaron Vesta y Ceres.','Study how Vesta and Ceres formed.'],['Reveló la geología de Vesta y los depósitos brillantes de Ceres.','Revealed Vesta’s geology and Ceres’ bright deposits.'],['Agotó la hidrazina en 2018 y permanece en órbita alrededor de Ceres.','It ran out of hydrazine in 2018 and remains in orbit around Ceres.'],'https://science.nasa.gov/mission/dawn/toolkit/end-of-mission/');
  context('espacio','KEPLER / K2','telescope',['Buscar planetas de otras estrellas mediante tránsitos.','Search for planets around other stars using transits.'],['Descubrió miles de exoplanetas.','Discovered thousands of exoplanets.'],['Agotó su combustible en 2018 y fue retirado en una órbita segura alrededor del Sol.','It ran out of fuel in 2018 and was retired in a safe orbit around the Sun.'],'https://science.nasa.gov/mission/kepler/');
  MUNDOS.asteroides.ships[0].x = 22; MUNDOS.asteroides.ships[0].y = 40;
  MUNDOS.asteroides.ships[1].x = 78; MUNDOS.asteroides.ships[1].y = 62;
  MUNDOS.luna.ships[0].x = 30; MUNDOS.luna.ships[0].y = 42; MUNDOS.luna.ships[1].x = 70; MUNDOS.luna.ships[1].y = 58;

  const UI = {
    close: ['Cerrar', 'Close'],
    prev: ['← ANTERIOR', '← PREVIOUS'],
    next: ['SIGUIENTE →', 'NEXT →'],
    fact: ['DATO CURIOSO', 'DID YOU KNOW'],
    mission: ['MISIÓN', 'MISSION'],
    know: ['Conocer', 'Learn about']
  };
  // Tipo de nave por clave [es, en]
  const TIPO = {
    'MARINER 10': ['Sonda de sobrevuelo', 'Flyby probe'], 'MESSENGER': ['Orbitador', 'Orbiter'],
    'BEPICOLOMBO': ['Misión de dos orbitadores', 'Two-orbiter mission'], 'MARINER 2': ['Sonda de sobrevuelo', 'Flyby probe'],
    'VENERA 7': ['Módulo de aterrizaje', 'Lander'], 'MAGELLAN': ['Orbitador de radar', 'Radar orbiter'],
    'HUBBLE': ['Telescopio espacial', 'Space telescope'], 'ISS': ['Estación orbital', 'Orbital station'],
    'JWST': ['Telescopio espacial', 'Space telescope'], 'PERSEVERANCE': ['Rover', 'Rover'],
    'MRO': ['Orbitador', 'Orbiter'], 'GALILEO': ['Orbitador', 'Orbiter'], 'JUNO': ['Orbitador polar', 'Polar orbiter'],
    'EUROPA CLIPPER': ['Sonda', 'Probe'], 'PIONEER 11': ['Sonda de sobrevuelo', 'Flyby probe'], 'CASSINI': ['Orbitador', 'Orbiter'],
    'HUYGENS': ['Sonda de descenso', 'Descent probe'], 'VOYAGER 2': ['Sonda de sobrevuelo', 'Flyby probe']
  };

  // Posiciones sobre el disco del planeta, en fracciones de su radio visible.
  const SPOTS = [[-.50, -.34], [.52, -.26], [.02, .46]];
  const FOV_HALF_TAN = Math.tan(Math.PI * .255 / 2);

  const lang = () => (document.documentElement.lang === 'en' ? 1 : 0);
  const tx = v => (Array.isArray(v) ? v[lang()] : v);

  // ---------- DOM ----------
  const layer = document.createElement('div');
  layer.className = 'xp-layer xp-idle';
  layer.setAttribute('data-lc-owned', '');
  layer.innerHTML = `
    <div class="xp-ships" id="xp-ships"></div><div class="xp-help" id="xp-help">Acerca la rueda del mouse para descubrir las misiones en la superficie</div><div class="xp-archive" id="xp-archive"><button type="button" data-world="luna">☾ Luna</button><button type="button" data-world="asteroides">✦ Asteroides</button><button type="button" data-world="espacio">✧ Espacio profundo</button></div>
    <aside class="xp-detail" id="xp-detail" aria-live="polite">
      <button type="button" class="xp-x" id="xp-x">✕</button>
      <div class="xp-d-head">
        <div class="xp-detail-art" id="xp-detail-art" aria-hidden="true"></div>
        <div>
          <span class="xp-kicker" id="xp-tag"></span>
          <h3 id="xp-ship-title"></h3>
        </div>
      </div>
      <div class="xp-chips" id="xp-chips"></div>
      <div class="xp-pages"><span id="xp-page-label"></span><p class="xp-desc" id="xp-ship-desc"></p><img id="xp-ship-image" class="xp-ship-image" alt="" hidden><p class="xp-image-hint" id="xp-image-hint"></p></div>
      <div class="xp-fact-box">
        <span class="xp-fact-label" id="xp-fact-label"></span>
        <p id="xp-ship-fact"></p>
      </div>
      <div class="xp-nav">
        <button type="button" class="xp-link" id="xp-prev"></button>
        <span class="xp-dots" id="xp-dots" aria-hidden="true"></span>
        <button type="button" class="xp-link" id="xp-next"></button>
      </div><button type="button" class="xp-quiz" id="xp-quiz" hidden>Responder preguntas →</button><div id="xp-quiz-host"></div>
    </aside>`;
  stage.appendChild(layer);

  const $ = id => layer.querySelector('#' + id);
  const shipsBox = $('xp-ships');
  function archiveLabels(){
    const names={luna:['☾ Luna','☾ Moon'],asteroides:['✦ Asteroides','✦ Asteroids'],espacio:['✧ Espacio profundo','✧ Deep space']};
    $('xp-archive').querySelectorAll('[data-world]').forEach(b=>{b.textContent=tx(names[b.dataset.world]);b.setAttribute('aria-pressed',String(current===b.dataset.world));});
  }
  let current = null, currentShip = null, page = 0, zoom = 0, geom = { radius: 1, dist: 10.5 };
  let projection = null;
  const isArchive = () => current === 'asteroides' || current === 'espacio';
  function markerVisibility(on) {
    layer.classList.toggle('xp-projection-visible', on);
    stage.classList.toggle('xp-markers-visible', on && !isArchive());
    if(current && !isArchive() && MUNDOS[current].ships.length){
      const hint=on?tx(['Selecciona un equipo para explorar su historia','Select a spacecraft to explore its story']):tx(['Acércate al planeta para descubrir las misiones','Zoom in to discover the missions']);
      if($('xp-help').textContent!==hint)$('xp-help').textContent=hint;
    }
  }

  const craftMarkup = () =>
    '<span class="xp-craft"><i class="xp-antenna"></i><i class="xp-wing xp-l"></i><i class="xp-wing xp-r"></i><i class="xp-core"></i><i class="xp-ping"></i></span>';

  // Radio visible del planeta en píxeles cuando la cámara ya llegó.
  function planetPx() {
    const h = stage.clientHeight || 500;
    const ang = Math.asin(Math.min(.99, geom.radius / geom.dist));
    return Math.tan(ang) / FOV_HALF_TAN * h / 2;
  }

  function layout() {
    if (!current) return;
    const buttons = [...shipsBox.children];
    if (!isArchive()) {
      const p = projection;
      const minRadius = buttons.length > 1 ? 42 : 24;
      if (!p || p.key !== current || !p.visible || p.radiusPx < minRadius) {
        markerVisibility(false);
        return;
      }
      const R = p.radiusPx;
      layer.style.setProperty('--xp-s', Math.min(1.1, Math.max(.62, R / 105)).toFixed(3));
      buttons.forEach((button,i) => {
        const ship = MUNDOS[current].ships[i];
        const sp = ship.x != null ? [(ship.x-50)/50,(ship.y-50)/50] : SPOTS[i%SPOTS.length];
        const x = p.x + sp[0]*R, y = p.y + sp[1]*R;
        // Un marcador que sale del área visible no queda flotando en el borde.
        button.hidden = x < 18 || x > p.width-18 || y < 18 || y > p.height-18;
        button.style.left = `${x.toFixed(2)}px`;
        button.style.top = `${y.toFixed(2)}px`;
        button.classList.toggle('xp-up', sp[1]<0);
      });
      markerVisibility(buttons.some(button=>!button.hidden));
      return;
    }
    // Los archivos sin cuerpo 3D mantienen su disposición anterior.
    const R = planetPx();
    layer.style.setProperty('--xp-s', Math.min(1.1, Math.max(.62,R/105)).toFixed(3));
    buttons.forEach((button,i)=>{
      const ship = MUNDOS[current].ships[i];
      const sp = ship.x != null ? [(ship.x-50)/50,(ship.y-50)/50] : SPOTS[i%SPOTS.length];
      button.hidden=false;
      button.style.left=`calc(50% + ${(sp[0]*R).toFixed(1)}px)`;
      button.style.top=`calc(50% + ${(sp[1]*R).toFixed(1)}px)`;
      button.classList.toggle('xp-up',sp[1]<0);
    });
  }

  function render() {
    const w = current && MUNDOS[current];
    if (!w) return;
    $('xp-fact-label').textContent = tx(UI.fact);
    $('xp-x').setAttribute('aria-label', tx(UI.close));
    $('xp-prev').textContent = tx(UI.prev);
    $('xp-next').textContent = tx(UI.next);
    shipsBox.innerHTML = '';
    w.ships.forEach((s, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'xp-ship' + (i === currentShip ? ' is-selected' : '');
      b.style.animationDelay = '0s';
      b.setAttribute('aria-label', `${tx(UI.know)} ${tx(s.n)}`);
      b.innerHTML = `<span class="xp-surface-icon">${s.kind==='flyby'?'🛰':s.kind==='telescope'?'🔭':s.kind==='orbiter'?'🛰':'📍'}</span><span class="xp-ship-name">${s.k}</span>`;
      b.addEventListener('click', () => (currentShip === i ? closeShip() : openShip(i)));
      shipsBox.appendChild(b);
    });
    $('xp-help').textContent = w.ships.length ? tx(['Selecciona un equipo para explorar su historia','Select a spacecraft to explore its story']) : tx(['No hay equipos de esta colección en este destino','No spacecraft from this collection at this destination']);
    layout();
    if (currentShip !== null) paintShip(); else layer.classList.remove('xp-ship-open');
  }

  function paintShip() {
    const w = MUNDOS[current];
    const s = w.ships[currentShip];
    const parts = tx(s.a).split(' · ');
    const agency = parts.shift();
    const years = parts.join(' · ');
    $('xp-tag').textContent = `${tx(w.name).toUpperCase()} · ${tx(UI.mission)} ${currentShip + 1}/${w.ships.length}`;
    $('xp-ship-title').textContent = tx(s.n);
    const chips = [TIPO[s.k] ? tx(TIPO[s.k]) : '', agency, years].filter(Boolean);
    $('xp-chips').innerHTML = chips.map((c, i) => `<span class="xp-chip${i === 0 ? ' xp-chip-main' : ''}"></span>`).join('');
    [...$('xp-chips').children].forEach((el, i) => { el.textContent = chips[i]; });
    const pages = [s.d, s.why || [ `Fue enviado para investigar ${tx(w.name)} y responder preguntas científicas.`, `It was sent to investigate ${tx(w.name)} and answer scientific questions.`], s.discoveries || s.f];
    $('xp-ship-desc').textContent = tx(pages[page]);
    $('xp-page-label').textContent = tx([['01 · ¿QUÉ ES?','01 · WHAT IS IT?'],['02 · ¿POR QUÉ FUE ENVIADO?','02 · WHY WAS IT SENT?'],['03 · DESCUBRIMIENTOS','03 · DISCOVERIES']][page]);
    $('xp-prev').textContent = page===0 ? tx(['← CERRAR','← CLOSE']) : tx(['← ANTERIOR','← PREVIOUS']);
    $('xp-next').textContent = page===2 ? tx(['FINALIZAR LECTURA','FINISH READING']) : tx(['SIGUIENTE →','NEXT →']);
    $('xp-dots').innerHTML = [0,1,2].map(i=>`<i class="${i===page?'on':''}"></i>`).join('');
    $('xp-quiz').hidden = true;
    $('xp-image-hint').textContent = '';
    if(s.source){const link=document.createElement('a');link.href=s.source;link.target='_blank';link.rel='noopener noreferrer';link.className='echo-aux-source';link.textContent=tx(['Contexto histórico · Fuente NASA ↗','Historical context · NASA source ↗']);$('xp-image-hint').append(link);}
    $('xp-ship-image').hidden = !s.image;
    if(s.image) $('xp-ship-image').src=s.image;
    $('xp-ship-fact').textContent = tx(s.f);
    $('xp-detail-art').innerHTML = craftMarkup();
    
    [...shipsBox.children].forEach((b, i) => b.classList.toggle('is-selected', i === currentShip));
    layer.classList.add('xp-ship-open');
  }

  function openShip(i) { const sh = MUNDOS[current].ships[i]; if (window.lcTeams && window.lcTeams.open(sh.k)) return; currentShip = i; page = 0; paintShip(); }
  function closeShip() {
    currentShip = null;
    layer.classList.remove('xp-ship-open');
    [...shipsBox.children].forEach(b => b.classList.remove('is-selected'));
  }
  function step(d) { if(d<0 && page===0){closeShip();return;} if(d>0 && page===2){closeShip();return;} page=Math.max(0,Math.min(2,page+d));paintShip(); }

  function openWorld(key, detail) {
    current = key;
    layer.classList.remove('xp-idle');
    archiveLabels();
    projection = null;
    layer.classList.toggle('xp-projected', !isArchive());
    markerVisibility(false);
    currentShip = null;
    geom = { radius: detail.radius || 1, dist: detail.dist || 10.5 };
    stage.classList.add('xp-active');
    zoom = 0; layer.classList.toggle('xp-zoomed',isArchive());
    layer.classList.remove('xp-open', 'xp-ship-open');
    render();
    void layer.offsetWidth;
    layer.classList.add('xp-open');
  }
  function closeWorld() {
    current = null; currentShip = null; projection = null;
    markerVisibility(false);
    layer.classList.remove('xp-projected');
    stage.classList.remove('xp-active');
    layer.classList.remove('xp-open', 'xp-ship-open','xp-zoomed');
    shipsBox.replaceChildren();
    layer.classList.add('xp-idle');
    archiveLabels();
  }

  // ---------- Conexión con el sistema solar ----------
  window.addEventListener('solar3d:focus', e => {
    const d = e.detail || {};
    if (d.key && MUNDOS[d.key]) openWorld(d.key, d); else closeWorld();
  });
  window.addEventListener('solar3d:projection',e=>{
    if(!current || isArchive() || e.detail.key!==current)return;
    projection=e.detail;
    layout();
  });
  $('xp-x').addEventListener('click', closeShip);
  $('xp-prev').addEventListener('click', () => step(-1));
  $('xp-next').addEventListener('click', () => step(1));
  $('xp-archive').addEventListener('click',e=>{
    const b=e.target.closest('[data-world]');if(!b)return;
    const key=b.dataset.world;
    if(key==='luna'){document.querySelector('[data-solar-planet="luna"]')?.click();return;}
    // El archivo no representa una superficie 3D: vuelve a la vista general.
    document.getElementById('solar3d-reset')?.click();
    openWorld(key,{radius:2,dist:7});
  });
  document.addEventListener('keydown', e => {
    if (!current || !document.getElementById('model-overlay').hidden || document.querySelector('.lct.on,#legacy-protocol[open]')) return;
    if (e.key === 'Escape') { if (currentShip !== null) closeShip(); else document.getElementById('solar3d-reset')?.click(); }
    else if (currentShip !== null && e.key === 'ArrowRight') step(1);
    else if (currentShip !== null && e.key === 'ArrowLeft') step(-1);
  });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(layout).observe(stage);
  archiveLabels();
  new MutationObserver(() => { archiveLabels(); if (current) render(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
