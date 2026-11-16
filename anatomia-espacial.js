/* Expansión autónoma: no modifica modelos ni funciones originales. */
(() => {
  "use strict";
  const COORDS = {
  "opportunity": {
    "solar": {
      "position": "-0.82000m 0.67980m -0.35000m",
      "normal": "0.00001 1.00000 0.00001"
    },
    "camera": {
      "position": "-0.12560m 1.54002m 0.40060m",
      "normal": "-0.00034 -0.00028 1.00000"
    },
    "antenna": {
      "position": "0.72000m 0.84007m -0.19728m",
      "normal": "0.00000 0.34202 0.93969"
    },
    "arm": {
      "position": "0.15007m 0.41000m 0.49976m",
      "normal": "-0.26914 -0.00000 0.96310"
    },
    "wheel": {
      "position": "0.61054m 0.13000m 0.60000m",
      "normal": "0.99998 0.00116 0.00645"
    },
    "body": {
      "position": "-0.27646m 0.45000m -0.00000m",
      "normal": "-1.00000 0.00000 0.00000"
    }
  },
  "cassini": {
    "dish": {
      "position": "1.06243m 1.96429m 0.89859m",
      "normal": "-0.34864 0.88599 -0.30573"
    },
    "huygens": {
      "position": "1.80206m -1.09999m 0.10011m",
      "normal": "0.99850 0.00613 0.05440"
    },
    "rtg": {
      "position": "-1.24422m -2.35965m 1.77946m",
      "normal": "0.00000 0.00000 1.00000"
    },
    "boom": {
      "position": "0.00000m 1.43299m -7.30000m",
      "normal": "-0.00000 1.00000 0.00000"
    },
    "engine": {
      "position": "0.13377m -3.25408m -0.18218m",
      "normal": "0.06975 -0.99620 -0.05220"
    },
    "bus": {
      "position": "-0.53409m -1.10202m 1.23647m",
      "normal": "-0.37670 0.40454 0.83334"
    }
  },
  "near-shoemaker": {
    "dish": {
      "position": "0.36000m 1.13000m 0.25000m",
      "normal": "0.00000 1.00000 0.00000"
    },
    "solar": {
      "position": "1.85000m 0.75800m 0.00000m",
      "normal": "0.00000 1.00000 0.00000"
    },
    "body": {
      "position": "0.75000m -0.10000m 0.00000m",
      "normal": "1.00000 0.00000 0.00000"
    },
    "instruments": {
      "position": "0.43000m -1.29000m 0.35000m",
      "normal": "0.00000 -1.00000 0.00000"
    },
    "magnetometer": {
      "position": "0.00000m 1.43000m 0.00000m",
      "normal": "0.00000 1.00000 0.00000"
    }
  },
  "pioneer-10": {
    "dish": {
      "position": "0.62000m 0.25000m -0.95000m",
      "normal": "0.00000 0.00000 -1.00000"
    },
    "rtg": {
      "position": "1.98000m 1.24000m 0.60000m",
      "normal": "0.00000 1.00000 0.00000"
    },
    "boom": {
      "position": "0.00000m -6.70000m 0.00000m",
      "normal": "0.00000 -1.00000 0.00000"
    },
    "body": {
      "position": "0.40000m -0.20000m 0.72000m",
      "normal": "0.00000 0.00000 1.00000"
    }
  },
  "ingenuity": {
    "solar": {
      "position": "0.04000m 0.47963m 0.12000m",
      "normal": "0.00000 1.00000 0.00000"
    },
    "rotors": {
      "position": "0.15706m 0.42607m 0.38190m",
      "normal": "-0.24912 0.96132 0.11748"
    },
    "legs": {
      "position": "0.22162m 0.08846m 0.22464m",
      "normal": "0.71654 0.69100 0.09534"
    },
    "body": {
      "position": "0.07847m 0.18000m 0.00000m",
      "normal": "1.00000 0.00000 0.00000"
    },
    "camera": {
      "position": "0.04500m 0.12317m 0.02000m",
      "normal": "0.00000 -1.00000 0.00000"
    }
  },
  "apollo-11": {
  "antenna": {
    "position": "-1.42770m 3.78499m 0.39492m",
    "normal": "-0.21991 0.67973 0.69972"
  },
  "windows": {
    "position": "-0.43000m 2.83000m 1.05700m",
    "normal": "0.00000 0.00000 1.00000"
  },
  "ascent": {
    "position": "0.83103m 3.10101m 0.65046m",
    "normal": "0.82956 0.51848 0.20739"
  },
  "hatch": {
    "position": "0.00000m 2.39000m 1.12450m",
    "normal": "0.00000 0.00000 1.00000"
  },
  "ladder": {
    "position": "0.00000m 1.15000m 2.01650m",
    "normal": "0.00000 0.00000 1.00000"
  },
  "descent": {
    "position": "1.06872m 1.35000m 1.00872m",
    "normal": "0.70711 0.00000 0.70711"
  },
  "landing": {
    "position": "2.36000m 0.17000m 0.10000m",
    "normal": "0.00000 1.00000 0.00000"
  },
  "engine": {
    "position": "0.27617m 0.35699m 0.27617m",
    "normal": "0.60921 -0.50767 0.60921"
  },
  "docking": {
    "position": "0.18000m 3.58000m -0.16000m",
    "normal": "0.00000 1.00000 0.00000"
  }
},
  "surveyor-3": {
  "solar": {
    "position": "0.27000m 2.84118m 0.47192m",
    "normal": "0.00000 0.86603 0.50000"
  },
  "antenna": {
    "position": "0.45000m 2.38658m -0.29848m",
    "normal": "0.00000 0.29237 0.95630"
  },
  "camera": {
    "position": "0.36000m 1.91000m 0.62000m",
    "normal": "0.00000 0.00000 1.00000"
  },
  "body": {
    "position": "-0.52000m 1.12000m 0.65000m",
    "normal": "0.00000 0.00000 1.00000"
  },
  "landing": {
    "position": "-0.00000m 0.18500m 2.15000m",
    "normal": "-0.00000 1.00000 0.00000"
  },
  "engine": {
    "position": "0.58890m 0.46000m -0.34000m",
    "normal": "-0.00000 -1.00000 -0.00000"
  },
  "sampler": {
    "position": "2.04000m 0.22250m 1.12000m",
    "normal": "0.00000 1.00000 0.00000"
  },
  "omni": {
    "position": "-1.49463m 1.68500m -0.74497m",
    "normal": "-0.13728 0.98561 0.09867"
  },
  "radar": {
    "position": "-0.28000m 0.54000m 0.16000m",
    "normal": "0.00000 -1.00000 0.00000"
  }
}
};
  const DATA = {
    opportunity: {source:'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/',parts:[
      ['camera','Mástil de cámaras','Camera mast','Pancam y Navcam captaban panoramas y ayudaban a elegir rutas seguras. El mástil también daba una perspectiva elevada al rover.','Pancam and Navcam captured panoramas and helped choose safe routes. The mast also gave the rover an elevated viewpoint.','Permitía estudiar capas de roca y el paisaje sin acercarse a todos los objetivos.','It helped scientists study rock layers and the landscape without approaching every target.'],
      ['solar','Paneles solares','Solar arrays','Convertían la luz solar en electricidad para los sistemas del rover y la recarga de sus baterías.','They converted sunlight into electricity for the rover systems and battery charging.','El polvo acumulado y las tormentas podían reducir drásticamente la energía disponible.','Accumulated dust and dust storms could drastically reduce available power.'],
      ['antenna','Antena de alta ganancia','High-gain antenna','Permitía la comunicación por radio dirigida hacia la Tierra cuando había visibilidad adecuada.','It enabled directional radio communication with Earth when the geometry allowed it.','Transmitía datos científicos y recibía instrucciones para las siguientes operaciones.','It transmitted scientific data and received instructions for future operations.'],
      ['arm','Brazo robótico (IDD)','Robotic arm (IDD)','Acercaba instrumentos a las rocas y al suelo, como el espectrómetro APXS, el microscopio y la herramienta de abrasión.','It positioned tools such as APXS, the microscopic imager and the rock abrasion tool against rocks and soil.','El análisis de minerales ayudó a reconstruir la historia del agua en Marte.','Mineral analysis helped reconstruct the history of water on Mars.'],
      ['wheel','Ruedas y suspensión','Wheels and suspension','Seis ruedas y una suspensión rocker-bogie facilitaban el desplazamiento por terreno irregular.','Six wheels and a rocker-bogie suspension enabled travel over uneven terrain.','La movilidad permitió explorar diferentes afloramientos y cráteres.','Mobility made it possible to investigate different outcrops and craters.']
    ]},
    cassini: {source:'https://science.nasa.gov/mission/cassini/spacecraft/cassini-orbiter/',parts:[
      ['dish','Antena de alta ganancia','High-gain antenna','El gran reflector parabólico concentraba las señales de radio para comunicarse con la Tierra y también apoyaba observaciones de radar.','The large parabolic reflector concentrated radio signals for communication with Earth and also supported radar observations.','El radar ayudó a cartografiar la superficie de Titán a través de su atmósfera.','Radar helped map Titan’s surface through its atmosphere.'],
      ['huygens','Sonda Huygens','Huygens probe','La sonda de la ESA se separó de Cassini y descendió por la atmósfera de Titán en enero de 2005.','The ESA probe separated from Cassini and descended through Titan’s atmosphere in January 2005.','Transmitió mediciones e imágenes de este mundo durante su descenso y después de aterrizar.','It transmitted measurements and images during its descent and after landing.'],
      ['rtg','Generadores RTG','RTG generators','Tres generadores convertían el calor del decaimiento radiactivo en electricidad, sin depender de paneles solares.','Three generators converted heat from radioactive decay into electricity without relying on solar panels.','Suministraron energía a los instrumentos y sistemas durante la exploración de Saturno.','They powered instruments and systems during the exploration of Saturn.'],
      ['boom','Brazo del magnetómetro','Magnetometer boom','El mástil alejaba sensores magnéticos del cuerpo de la nave para reducir interferencias de sus sistemas eléctricos.','The boom placed magnetic sensors away from the spacecraft body to reduce interference from its electrical systems.','Contribuyó al estudio del campo magnético y el entorno de Saturno.','It contributed to the study of Saturn’s magnetic field and environment.'],
      ['engine','Propulsión principal','Main propulsion','Los motores principales realizaban maniobras importantes para ajustar la trayectoria y la órbita de la nave.','The main engines performed major maneuvers to adjust the spacecraft trajectory and orbit.','Una maniobra de inserción orbital permitió que Cassini se convirtiera en un orbitador de Saturno.','An orbit insertion maneuver allowed Cassini to become a Saturn orbiter.']
    ]},
  "near-shoemaker": {
    "source": "https://science.nasa.gov/mission/near-shoemaker/",
    "parts": [
      [
        "dish",
        "Antena de alta ganancia",
        "High-gain antenna",
        "El reflector dirigía las señales de radio hacia la Tierra para enviar información y recibir órdenes.",
        "The reflector directed radio signals toward Earth to send data and receive commands.",
        "El seguimiento de la señal también ayudó a estudiar la gravedad de Eros.",
        "Radio tracking also helped study the gravity of Eros."
      ],
      [
        "solar",
        "Paneles solares",
        "Solar arrays",
        "Cuatro paneles suministraban electricidad a la nave y sus instrumentos.",
        "Four solar arrays supplied electricity to the spacecraft and its instruments.",
        "NEAR demostró la viabilidad de usar energía solar más allá de la órbita de Marte.",
        "NEAR demonstrated that solar power was viable beyond the orbit of Mars."
      ],
      [
        "body",
        "Cuerpo octogonal",
        "Octagonal spacecraft body",
        "Protegía la electrónica y alojaba el sistema de propulsión que permitía ajustar la trayectoria.",
        "It protected electronics and housed the propulsion system used to adjust the trajectory.",
        "Las maniobras hicieron posible orbitar y finalmente descender sobre Eros.",
        "The maneuvers enabled the spacecraft to orbit and ultimately descend onto Eros."
      ],
      [
        "instruments",
        "Plataforma de instrumentos",
        "Science instrument deck",
        "La cubierta inferior alojaba instrumentos como la cámara multiespectral, espectrómetros y el telémetro láser.",
        "The lower deck housed instruments such as the multispectral imager, spectrometers and laser rangefinder.",
        "Permitieron estudiar la forma, composición y superficie del asteroide.",
        "They helped study the asteroid’s shape, composition and surface."
      ],
      [
        "magnetometer",
        "Magnetómetro (zona superior)",
        "Magnetometer (upper area)",
        "Montado en la alimentación de la antena, medía el campo magnético del entorno.",
        "Mounted on the antenna feed, it measured the magnetic field of the surroundings.",
        "Ayudó a investigar las propiedades magnéticas de Eros.",
        "It helped investigate the magnetic properties of Eros."
      ]
    ]
  },
  "pioneer-10": {
    "source": "https://science.nasa.gov/mission/pioneer-10/",
    "parts": [
      [
        "dish",
        "Antena parabólica",
        "High-gain dish antenna",
        "Concentraba las señales de radio para comunicarse con la Tierra desde grandes distancias.",
        "It focused radio signals to communicate with Earth across great distances.",
        "Hizo posible transmitir observaciones de Júpiter y recibir comandos durante su viaje.",
        "It enabled transmission of Jupiter observations and reception of commands during the journey."
      ],
      [
        "rtg",
        "Generadores RTG",
        "RTG generators",
        "Cuatro generadores termoeléctricos convertían calor radiactivo en electricidad.",
        "Four radioisotope thermoelectric generators converted radioactive heat into electricity.",
        "Alimentaron la nave sin depender de la luz solar en el sistema solar exterior.",
        "They powered the spacecraft without relying on sunlight in the outer solar system."
      ],
      [
        "boom",
        "Brazo del magnetómetro",
        "Magnetometer boom",
        "Un mástil largo separaba el sensor magnético de la nave para reducir interferencias.",
        "A long boom separated the magnetic sensor from the spacecraft to reduce interference.",
        "Permitió estudiar el campo magnético de Júpiter y el entorno interplanetario.",
        "It enabled studies of Jupiter’s magnetic field and the interplanetary environment."
      ],
      [
        "body",
        "Compartimento de equipos",
        "Equipment compartment",
        "Alojaba sistemas electrónicos y de control, junto a la zona destinada a instrumentos científicos.",
        "It housed electronic and control systems alongside the science instrument area.",
        "Apoyó la operación de la primera nave que sobrevoló Júpiter.",
        "It supported operation of the first spacecraft to fly past Jupiter."
      ]
    ]
  },
  "ingenuity": {
    "source": "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/",
    "parts": [
      [
        "solar",
        "Panel solar",
        "Solar panel",
        "Recargaba las baterías de iones de litio utilizando la luz solar.",
        "It recharged lithium-ion batteries using sunlight.",
        "Permitió realizar vuelos y mantener los sistemas del helicóptero.",
        "It supported flights and operation of the helicopter systems."
      ],
      [
        "rotors",
        "Rotores contrarrotatorios",
        "Counter-rotating rotors",
        "Dos rotores giraban en sentidos opuestos para producir sustentación y compensar el torque.",
        "Two rotors spun in opposite directions to produce lift and counteract torque.",
        "Demostraron que era posible el vuelo motorizado en la tenue atmósfera de Marte.",
        "They demonstrated powered flight in the thin Martian atmosphere."
      ],
      [
        "legs",
        "Patas de aterrizaje",
        "Landing legs",
        "Cuatro patas ligeras sostenían el helicóptero y absorbían parte del impacto al aterrizar.",
        "Four lightweight legs supported the helicopter and absorbed part of the landing impact.",
        "Facilitaron aterrizajes repetidos en terreno marciano.",
        "They enabled repeated landings on Martian terrain."
      ],
      [
        "body",
        "Fuselaje y electrónica",
        "Fuselage and electronics",
        "El cuerpo aislado alojaba baterías, ordenador de vuelo y sistemas de control térmico.",
        "The insulated body housed batteries, flight computers and thermal control systems.",
        "Permitió el vuelo autónomo y la supervivencia durante noches frías.",
        "It enabled autonomous flight and survival through cold nights."
      ],
      [
        "camera",
        "Cámaras de navegación",
        "Navigation cameras",
        "Una cámara inferior observaba el suelo para guiar el vuelo; otra cámara capturaba imágenes del terreno.",
        "A downward-facing camera observed the ground for navigation; another camera captured terrain images.",
        "Las imágenes ayudaron a la navegación autónoma y a reconocer el terreno marciano.",
        "Images supported autonomous navigation and reconnaissance of Martian terrain."
      ]
    ]
  },
  "apollo-11": {
  "source": "https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/",
  "parts": [
    [
      "antenna",
      "Antena de comunicaciones",
      "Communications antenna",
      "La antena orientable de banda S transmitía voz, telemetría y comunicaciones con la Tierra.",
      "The steerable S-band antenna carried voice, telemetry and communications with Earth.",
      "Mantuvo el enlace con el control de misión durante el descenso y las operaciones lunares.",
      "It supported the link to mission control during descent and lunar operations."
    ],
    [
      "windows",
      "Ventanas triangulares",
      "Triangular windows",
      "Las dos ventanas delanteras permitían observar la superficie y evaluar el lugar de aterrizaje.",
      "The two forward windows enabled the crew to see the surface and assess the landing site.",
      "Ayudaron a Armstrong a elegir una zona de alunizaje segura.",
      "They helped Armstrong choose a safe landing area."
    ],
    [
      "ascent",
      "Etapa de ascenso",
      "Ascent stage",
      "La sección superior contenía la cabina presurizada y el sistema que despegó de la Luna.",
      "The upper section contained the pressurized cabin and the system that lifted off from the Moon.",
      "Permitió a Armstrong y Aldrin regresar a la órbita lunar y reunirse con Columbia.",
      "It enabled Armstrong and Aldrin to return to lunar orbit and reunite with Columbia."
    ],
    [
      "hatch",
      "Escotilla delantera",
      "Forward hatch",
      "La escotilla comunicaba la cabina con la plataforma exterior.",
      "The hatch connected the cabin to the exterior platform.",
      "Por ella salieron los astronautas para realizar la primera caminata lunar.",
      "The astronauts exited through it for the first lunar surface walk."
    ],
    [
      "ladder",
      "Escalera de acceso",
      "Access ladder",
      "La escalera sobre la pata delantera conectaba la plataforma con la superficie.",
      "The ladder on the forward landing leg connected the platform to the surface.",
      "Fue el camino que Armstrong utilizó antes de dar el primer paso sobre la Luna.",
      "Armstrong used it before taking the first step on the Moon."
    ],
    [
      "descent",
      "Etapa de descenso",
      "Descent stage",
      "La sección inferior contenía el motor de descenso, depósitos y equipos. Su aislamiento térmico ayudaba a controlar la temperatura.",
      "The lower section housed the descent engine, tanks and equipment. Its thermal insulation helped control temperature.",
      "Quedó en el Mar de la Tranquilidad cuando la etapa superior despegó.",
      "It remained in the Sea of Tranquility when the upper stage lifted off."
    ],
    [
      "landing",
      "Tren de aterrizaje",
      "Landing gear",
      "Cuatro patas con amortiguadores y platos distribuyeron las cargas del alunizaje.",
      "Four legs with shock-absorbing struts and footpads distributed landing loads.",
      "Dieron estabilidad al módulo sobre el suelo lunar.",
      "They stabilized the module on the lunar surface."
    ],
    [
      "engine",
      "Motor de descenso",
      "Descent engine",
      "El motor regulable proporcionó empuje para reducir la velocidad y controlar el descenso.",
      "The throttleable engine provided thrust to reduce speed and control descent.",
      "Hizo posible un alunizaje suave el 20 de julio de 1969.",
      "It made a soft lunar landing possible on July 20, 1969."
    ],
    [
      "docking",
      "Puerto de acoplamiento",
      "Docking port",
      "La interfaz superior permitía conectar el módulo lunar con el módulo de mando.",
      "The upper interface allowed the lunar module to connect with the command module.",
      "Permitió transferir a la tripulación y las muestras para el viaje de regreso a la Tierra.",
      "It enabled transfer of the crew and samples for the return to Earth."
    ]
  ]
},
  "surveyor-3": {
  "source": "https://science.nasa.gov/mission/surveyor-3/",
  "parts": [
    [
      "solar",
      "Panel solar",
      "Solar panel",
      "Las células solares convertían la luz del Sol en electricidad para recargar las baterías y alimentar la sonda.",
      "Solar cells converted sunlight to electricity to recharge batteries and power the lander.",
      "Sostuvo las operaciones científicas durante el día lunar.",
      "It sustained scientific operations during lunar daylight."
    ],
    [
      "antenna",
      "Antena de alta ganancia",
      "High-gain antenna",
      "La antena direccional plana permitía enviar datos a la Tierra mediante radio.",
      "The planar directional antenna enabled radio transmission of data to Earth.",
      "Facilitó el envío de imágenes y resultados de los experimentos lunares.",
      "It supported the transmission of lunar images and experimental results."
    ],
    [
      "camera",
      "Cámara de televisión",
      "Television camera",
      "Un sistema óptico con espejo orientable fotografiaba el terreno alrededor de la sonda.",
      "An optical system with a steerable mirror photographed the terrain around the lander.",
      "Surveyor 3 transmitió 6 326 imágenes; Apollo 12 recuperó la cámara en 1969.",
      "Surveyor 3 transmitted 6,326 images; Apollo 12 recovered the camera in 1969."
    ],
    [
      "body",
      "Compartimentos térmicos",
      "Thermal equipment compartments",
      "Las cajas protegían equipos electrónicos y ayudaban a regular su temperatura ante el ambiente lunar.",
      "The compartments protected electronics and helped regulate their temperature in the lunar environment.",
      "Mantener los sistemas en un intervalo térmico adecuado era esencial para operar sobre la Luna.",
      "Keeping systems within a suitable temperature range was essential for lunar operations."
    ],
    [
      "landing",
      "Patas y platos de aterrizaje",
      "Landing legs and footpads",
      "Tres patas con amortiguadores hidráulicos y platos deformables absorbían las cargas del contacto con el suelo.",
      "Three legs with hydraulic shock absorbers and crushable footpads absorbed touchdown loads.",
      "Ayudaron a estabilizar la sonda tras dos rebotes durante el alunizaje del 20 de abril de 1967.",
      "They helped stabilize the lander after two bounces during its April 20, 1967 landing."
    ],
    [
      "engine",
      "Motores vernier",
      "Vernier engines",
      "Tres motores de combustible líquido regulaban el empuje en la fase final del descenso. El retrocohete principal ya había sido descartado.",
      "Three liquid-propellant engines regulated thrust during final descent. The main retrorocket had already been jettisoned.",
      "El control del descenso permitió ensayar tecnologías necesarias para alunizajes posteriores.",
      "Descent control helped demonstrate technologies needed for later lunar landings."
    ],
    [
      "sampler",
      "Brazo excavador y pala",
      "Surface sampler and scoop",
      "Un brazo extensible manipulaba el regolito, excavaba zanjas y medía sus propiedades mecánicas.",
      "An extendable arm manipulated regolith, dug trenches and tested its mechanical properties.",
      "Los ensayos mostraron que el suelo podía soportar el peso de un módulo lunar Apollo.",
      "The tests showed that lunar soil could support the weight of an Apollo lunar module."
    ],
    [
      "omni",
      "Antena omnidireccional",
      "Omnidirectional antenna",
      "Las antenas de baja ganancia facilitaban el enlace de radio sin necesitar la alineación precisa de la antena principal.",
      "Low-gain antennas supported radio links without precise alignment of the main antenna.",
      "Proporcionaban una vía de comunicación durante las distintas fases de la misión.",
      "They provided a communications path during different mission phases."
    ],
    [
      "radar",
      "Radar de descenso",
      "Descent radar",
      "El radar medía altura y velocidad respecto a la superficie lunar para guiar el descenso.",
      "Radar measured altitude and velocity relative to the lunar surface to guide descent.",
      "En Surveyor 3 las reflexiones del terreno confundieron el radar y retrasaron el apagado de los motores.",
      "On Surveyor 3, terrain reflections confused the radar and delayed engine shutdown."
    ]
  ]
}
  };
  const LABELS={
    es:{title:'ANATOMÍA ESPACIAL 360°',on:'Marcas: activadas',off:'Marcas: ocultas',spin:'Pausar giro',play:'Reanudar giro',progress:'Componentes descubiertos',intro:'Explora la ingeniería',instructions:'Selecciona un círculo rojo sobre la nave o un componente de la lista. Puedes seguir girando y acercando el modelo en todo momento.',function:'FUNCIÓN',impact:'IMPORTANCIA CIENTÍFICA',source:'Referencia oficial NASA ↗',adjust:'Ajustar posición de una marca',adjustHelp:'Selecciona un componente y activa el ajuste. Pulsa sobre la pieza del modelo para registrar su nueva posición en este navegador. Arrastrar no cambia la marca.',adjustStart:'Colocar marca seleccionada',adjustCancel:'Cancelar ajuste',reset:'Restaurar marcas originales',selected:'Marca actualizada.',miss:'No se detectó una superficie. Inténtalo otra vez.',ready:'Pulsa sobre la superficie de la pieza.',load:'Esperando que cargue el modelo 3D…',failed:'No se pudo cargar el modelo original. Revisa la ruta del GLB y la conexión a la biblioteca del visor.',completed:'¡Has explorado todos los componentes!',list:'Componentes',resetProgress:'Reiniciar recorrido',choose:'Selecciona un componente primero.',approx:'Marcas iniciales aproximadas: puedes ajustarlas sobre la pieza.',surveyorReconstruction:'Recreación educativa simplificada basada en documentación de NASA y Smithsonian; no es un GLB oficial ni un escaneo.',reconstruction:'Recreación educativa simplificada; no es el modelo original de Sketchfab ni un modelo oficial NASA.'},
    en:{title:'SPACECRAFT ANATOMY 360°',on:'Markers: on',off:'Markers: hidden',spin:'Pause rotation',play:'Resume rotation',progress:'Components discovered',intro:'Explore the engineering',instructions:'Select a red marker on the spacecraft or a component in the list. You can still rotate and zoom the model at any time.',function:'FUNCTION',impact:'SCIENTIFIC IMPORTANCE',source:'Official NASA reference ↗',adjust:'Adjust marker position',adjustHelp:'Select a component and enable adjustment. Click the part on the model to save its new position in this browser. Dragging does not move the marker.',adjustStart:'Place selected marker',adjustCancel:'Cancel adjustment',reset:'Restore original markers',selected:'Marker updated.',miss:'No surface detected. Try again.',ready:'Click the surface of the part.',load:'Waiting for the 3D model to load…',failed:'The original model could not load. Check the GLB path and viewer library connection.',completed:'You explored every component!',list:'Components',resetProgress:'Restart exploration',choose:'Select a component first.',approx:'Approximate initial markers: adjust them on the part if needed.',surveyorReconstruction:'Simplified educational reconstruction based on NASA and Smithsonian documentation; not an official GLB or a scan.',reconstruction:'Simplified educational reconstruction; not the original Sketchfab model or an official NASA model.'}
  };
  const viewer=document.getElementById('focus-model'), overlay=document.getElementById('model-overlay');
  if(!viewer||!overlay)return;
  const stage=viewer.closest('.model-stage');if(!stage)return;
  const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
  function button(cls,fn){const b=el('button',cls);b.type='button';b.addEventListener('click',fn);return b;}
  const tools=el('div','lca-tools'), panel=el('aside','lca-panel');
  for(const n of [tools,panel]){n.hidden=true;n.setAttribute('data-lc-owned','');}
  const kicker=el('span','lca-kicker');
  const toggle=button('',()=>{showMarks=!showMarks;refreshMarkers();updateLabels();});
  const spin=button('',()=>{viewer.toggleAttribute('auto-rotate',!viewer.hasAttribute('auto-rotate'));updateLabels();});
  const restart=button('',()=>{if(!key)return;seen[key].clear();selected=null;adjusting=false;message='';refreshMarkers();renderPanel();});
  tools.append(kicker,toggle,spin,restart);
  const label=el('p','lca-label'), count=el('p','lca-muted'), bar=el('div','lca-progress'), fill=el('span');bar.append(fill);bar.setAttribute('role','progressbar');bar.setAttribute('aria-valuemin','0');
  const list=el('div','lca-component-list');const detail=el('div','lca-detail');detail.setAttribute('aria-live','polite');
  const source=el('a');source.target='_blank';source.rel='noopener noreferrer';
  const notice=el('p','lca-notice');notice.setAttribute('role','status');
  const config=el('details');const summary=el('summary');const help=el('p','lca-muted');const actions=el('div','lca-cal-actions');
  const adjust=button('',()=>{if(!selected){message='choose';updateLabels();return;}adjusting=!adjusting;message=adjusting?'ready':'';if(adjusting)viewer.removeAttribute('auto-rotate');refreshMarkers();updateLabels();});
  const reset=button('',()=>{if(!key)return;overrides[key]={};save();for(const part of DATA[key].parts)updatePoint(part[0]);adjusting=false;message='';refreshMarkers();updateLabels();});
  actions.append(adjust,reset);config.append(summary,help,actions);panel.append(label,count,bar,list,detail,source,notice,config);stage.append(tools,panel);
  let key=null, selected=null,showMarks=true, priorRotate=false, adjusting=false, message='',loaded=false, pointer=null;
  const seen=Object.fromEntries(Object.keys(DATA).map(id=>[id,new Set()]));let overrides={};try{overrides=JSON.parse(localStorage.getItem('lc-anatomy-v1')||'{}')||{};}catch(_){}
  function save(){try{localStorage.setItem('lc-anatomy-v1',JSON.stringify(overrides));}catch(_){}}
  const lang=()=>document.documentElement.lang==='en'?'en':'es', T=()=>LABELS[lang()], en=()=>lang()==='en';
  function recognizer(){if(overlay.hidden||viewer.hidden)return null;const src=(viewer.getAttribute('src')||'').split(/[?#]/)[0].toLowerCase();const match=src.match(/(?:^|\/)([^/]+)\.glb$/);return match&&Object.hasOwn(DATA,match[1])?match[1]:null;}
  function markerFor(id){return viewer.querySelector('.lca-marker[data-part="'+id+'"]');}
  function point(id){const candidate=overrides[key]?.[id];return candidate&&typeof candidate.position==='string'&&typeof candidate.normal==='string'?candidate:COORDS[key][id];}
  function updatePoint(id){const b=markerFor(id),p=point(id);if(!b||!p)return;b.dataset.position=p.position;b.dataset.normal=p.normal;if(typeof viewer.updateHotspot==='function')viewer.updateHotspot({name:b.slot,position:p.position,normal:p.normal});}
  function choose(id){if(!key)return;selected=id;seen[key].add(id);adjusting=false;message='';viewer.removeAttribute('auto-rotate');refreshMarkers();renderPanel();}
  function refreshMarkers(){if(!key)return;for(const [i,part] of DATA[key].parts.entries()){const b=markerFor(part[0]);if(!b)continue;b.hidden=!showMarks||adjusting||!loaded;b.setAttribute('aria-pressed',String(selected===part[0]));b.setAttribute('aria-label',`${i+1}. ${part[en()?2:1]}`);b.title=part[en()?2:1];}}
  function updateLabels(){if(!key)return;const t=T();kicker.textContent=t.title;toggle.textContent=showMarks?t.on:t.off;toggle.setAttribute('aria-pressed',String(showMarks));spin.textContent=viewer.hasAttribute('auto-rotate')?t.spin:t.play;restart.textContent=t.resetProgress;summary.textContent=t.adjust;help.textContent=t.adjustHelp;adjust.textContent=adjusting?t.adjustCancel:t.adjustStart;adjust.setAttribute('aria-pressed',String(adjusting));adjust.disabled=!loaded;reset.textContent=t.reset;label.textContent=t.progress;notice.textContent=message?t[message]:(!loaded?t.load:(key==='surveyor-3'?t.surveyorReconstruction:key==='apollo-11'?t.reconstruction: (['near-shoemaker','pioneer-10'].includes(key)?t.approx:'')));source.textContent=t.source;refreshMarkers();}
  function renderPanel(){if(!key)return;const t=T(), parts=DATA[key].parts, n=seen[key].size;updateLabels();count.textContent=`${n} / ${parts.length}${n===parts.length?' · '+t.completed:''}`;bar.setAttribute('aria-label',t.progress);bar.setAttribute('aria-valuemax',parts.length);bar.setAttribute('aria-valuenow',n);fill.style.width=(100*n/parts.length)+'%';list.replaceChildren();list.setAttribute('aria-label',t.list);
    for(const [i,part] of parts.entries()){const b=button('',()=>choose(part[0]));b.setAttribute('aria-pressed',String(selected===part[0]));b.append(el('span','lca-num',i+1),el('span','',part[en()?2:1]));if(seen[key].has(part[0]))b.append(el('span','lca-seen','✓'));list.append(b);}
    const part=parts.find(x=>x[0]===selected);detail.replaceChildren();if(part){detail.append(el('h3','',part[en()?2:1]),el('p','lca-label',t.function),el('p','',part[en()?4:3]),el('p','lca-label',t.impact),el('p','',part[en()?6:5]));}else{detail.append(el('h3','',t.intro),el('p','',t.instructions));}source.href=DATA[key].source;
  }
  function removeMarkers(){viewer.querySelectorAll('.lca-marker').forEach(b=>b.remove());}
  function deactivate(){if(!key)return;removeMarkers();viewer.toggleAttribute('auto-rotate',priorRotate);tools.hidden=panel.hidden=true;stage.classList.remove('lc-anatomy-active');key=null;selected=null;adjusting=false;message='';pointer=null;}
  function sync(){const next=recognizer();if(next===key)return;deactivate();if(!next)return;key=next;selected=null;showMarks=true;loaded=false;priorRotate=viewer.hasAttribute('auto-rotate');tools.hidden=panel.hidden=false;stage.classList.add('lc-anatomy-active');
    for(const [i,part] of DATA[key].parts.entries()){const p=point(part[0]),b=button('lca-marker',event=>{event?.stopPropagation?.();choose(part[0]);});b.slot='hotspot-lca-'+key+'-'+part[0];b.dataset.part=part[0];b.dataset.position=p.position;b.dataset.normal=p.normal;b.dataset.visibilityAttribute='lca-visible';b.setAttribute('data-lc-owned','');b.textContent=i+1;b.hidden=true;viewer.append(b);}
    // `load` is authoritative; for an already cached model, the load event still fires after src changes.
    renderPanel();
  }
  viewer.addEventListener('load',()=>{sync();if(key){loaded=true;message='';refreshMarkers();updateLabels();}});
  viewer.addEventListener('error',()=>{if(key){loaded=false;message='failed';updateLabels();}});
  viewer.addEventListener('pointerdown',e=>{pointer=adjusting?{x:e.clientX,y:e.clientY}:null;});
  viewer.addEventListener('click',e=>{if(!adjusting||!selected||!loaded||!pointer||e.target.closest('.lca-marker'))return;const d=Math.hypot(e.clientX-pointer.x,e.clientY-pointer.y);pointer=null;if(d>6)return;const hit=viewer.positionAndNormalFromPoint?.(e.clientX,e.clientY);if(!hit){message='miss';updateLabels();return;}overrides[key]??={};overrides[key][selected]={position:hit.position.toString(),normal:hit.normal.toString()};save();updatePoint(selected);adjusting=false;message='selected';refreshMarkers();updateLabels();});
  new MutationObserver(sync).observe(viewer,{attributes:true,attributeFilter:['src','hidden']});new MutationObserver(sync).observe(overlay,{attributes:true,attributeFilter:['hidden']});new MutationObserver(()=>{if(key)renderPanel();}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});sync();
})();
