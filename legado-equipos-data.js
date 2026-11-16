/* Texto completo de las fichas (PDF 6_Misiones). s = [¿Qué es?, ¿Por qué?, Descubrimientos]; cada uno [es, en]. "\n" = párrafo, "• " = viñeta. */
window.LC_TEAMS = (() => {
  const q = (es, en, o, a, w) => ({ q: [es, en], o, a, w });
  return {
  'APOLLO 11 · EAGLE': { n: 'Apollo 11 · Eagle', tag: ['MÓDULO LUNAR · 16 JUL 1969', 'LUNAR MODULE · 16 JUL 1969'],
    s: [[
`El módulo lunar (LM) “Eagle” fue el primer vehículo tripulado que aterrizó en la Luna. Llevó a Neil Armstrong y Buzz Aldrin, quienes fueron los primeros humanos en caminar sobre su superficie.
Era una nave de dos etapas: la de descenso (con el motor de aterrizaje y cuatro patas) y la de ascenso (la cabina de los astronautas, que despegó de la Luna para volver al módulo de mando).
Llevaba además el EASEP (Early Apollo Scientific Experiments Package), un conjunto de experimentos que se dejaron en la superficie; se describe como el antecesor de los paquetes ALSEP de misiones posteriores.
Datos básicos: lanzado el 16 de julio de 1969 en un cohete Saturn V desde Cabo Cañaveral. Masa de 15 103 kg. Financiado por la NASA (Oficina de Vuelos Espaciales Tripulados, EE. UU.).`,
`The “Eagle” lunar module (LM) was the first crewed vehicle to land on the Moon. It carried Neil Armstrong and Buzz Aldrin, the first humans to walk on its surface.
It was a two-stage craft: the descent stage (with the landing engine and four legs) and the ascent stage (the astronauts’ cabin, which lifted off the Moon to return to the command module).
It also carried the EASEP (Early Apollo Scientific Experiments Package), a set of experiments left on the surface; it is described as the forerunner of the ALSEP packages of later missions.
Basic facts: launched on 16 July 1969 on a Saturn V rocket from Cape Canaveral. Mass of 15,103 kg. Funded by NASA (Office of Manned Space Flight, USA).`],[
`Fue enviado para llevar a dos astronautas a la superficie lunar y devolverlos al módulo de mando, donde esperaba Michael Collins.
Todo esto con el objetivo de hacer ciencia en la Luna: desplegar instrumentos, tomar fotografías y recoger muestras.`,
`It was sent to take two astronauts to the lunar surface and return them to the command module, where Michael Collins waited.
All of this with the goal of doing science on the Moon: deploying instruments, taking photographs and collecting samples.`],[
`Como tal no hay resultados detallados, pero como logro se cuenta con el primer alunizaje tripulado, el 20 de julio de 1969, en el Mar de la Tranquilidad, y los primeros pasos humanos en la Luna.
Recolección de 21,55 kg de roca y suelo lunar, incluidas dos muestras de núcleo, además de un experimento de viento solar.
Instrumentos del EASEP:
• Un sismómetro pasivo para medir la actividad sísmica y la estructura de la corteza y el interior lunar.
• Un detector de polvo lunar para medir cuánto polvo se acumulaba y el daño por radiación a las celdas solares.
• Un reflector láser (LRRR) que se usa para medir distancias con láser.
Resultado del EASEP: funcionó con normalidad aunque las temperaturas superaron en 30 °C el máximo previsto. Sin embargo, dejó de aceptar comandos el 27 de agosto de 1969, en su segundo día lunar.
Su legado: fue el antecesor de los paquetes ALSEP de misiones posteriores.
Fuente: NASA, Apollo Lunar Modules (NSSDCA).`,
`There are no detailed results as such, but its achievements include the first crewed Moon landing on 20 July 1969, in the Sea of Tranquility, and the first human steps on the Moon.
Collection of 21.55 kg of lunar rock and soil, including two core samples, plus a solar wind experiment.
EASEP instruments:
• A passive seismometer to measure seismic activity and the structure of the lunar crust and interior.
• A lunar dust detector to measure how much dust accumulated and the radiation damage to solar cells.
• A laser ranging retroreflector (LRRR) used to measure distances with lasers.
EASEP result: it worked normally even though temperatures exceeded the expected maximum by 30 °C. However, it stopped accepting commands on 27 August 1969, in its second lunar day.
Its legacy: it was the forerunner of the ALSEP packages of later missions.
Source: NASA, Apollo Lunar Modules (NSSDCA).`]],
    qs: [
      q('Eres ingeniero. El Eagle debe bajar a la Luna y luego volver a subir con dos astronautas. ¿Cómo lo resolvieron?', 'You are an engineer. Eagle must descend to the Moon and then lift off again with two astronauts. How did they solve it?', [['Con una nave de dos etapas: una para aterrizar y otra para despegar', 'With a two-stage craft: one to land and one to take off'], ['Con una sola pieza que aterrizaba y despegaba entera', 'With a single piece that landed and took off whole'], ['Con un cohete aparte que recogía a los astronautas', 'With a separate rocket that picked up the astronauts']], 0,
        ['La etapa de descenso tenía el motor y cuatro patas. La de ascenso era la cabina que despegó para volver con Collins, en el módulo de mando. Un cohete Saturn V lo lanzó desde la Tierra.', 'The descent stage had the engine and four legs. The ascent stage was the cabin that lifted off to rejoin Collins in the command module. A Saturn V rocket launched it from Earth.']),
      q('Armstrong y Aldrin pisaron la Luna mientras Collins los esperaba en órbita. ¿Para qué bajaron?', 'Armstrong and Aldrin walked on the Moon while Collins waited in orbit. Why did they go down?', [['Para buscar agua líquida', 'To look for liquid water'], ['Para construir una base permanente', 'To build a permanent base'], ['Para hacer ciencia: desplegar instrumentos, tomar fotos y recoger muestras', 'To do science: deploy instruments, take photos and collect samples']], 2,
        ['Recogieron 21,55 kg de roca y suelo lunar, incluidas dos muestras de núcleo.', 'They collected 21.55 kg of lunar rock and soil, including two core samples.']),
      q('Aldrin despliega un paquete de experimentos. Uno de sus instrumentos “siente” los temblores de la Luna. ¿Cuál es?', 'Aldrin deploys an experiment package. One of its instruments “feels” the Moon’s tremors. Which one?', [['El reflector láser', 'The laser reflector'], ['El sismómetro pasivo', 'The passive seismometer'], ['El detector de polvo', 'The dust detector']], 1,
        ['El sismómetro medía la actividad sísmica y la estructura de la corteza y el interior lunar. El detector de polvo medía cuánto se acumulaba, y el reflector láser servía para medir distancias.', 'The seismometer measured seismic activity and the structure of the lunar crust and interior. The dust detector measured how much accumulated, and the laser reflector was used to measure distances.'])] },

  'SURVEYOR 3': { n: 'Surveyor 3', tag: ['SONDA LUNAR · 17 ABR 1967', 'LUNAR LANDER · 17 APR 1967'],
    s: [[
`Surveyor 3 fue una sonda no tripulada (lander) de la NASA, diseñada y gestionada por NASA/JPL (EE. UU.). Fue la segunda de la serie Surveyor en lograr un aterrizaje suave en la Luna.
Pesaba unos 998 kg y se lanzó el 17 de abril de 1967 en un cohete Atlas Centaur desde Cabo Cañaveral.
Llevaba dos instrumentos: una cámara de TV y un brazo muestreador de superficie. Fue la primera de la serie en llevar un instrumento para tomar muestras: el brazo alcanzaba 1,5 m de distancia y cavaba hasta 18 cm de profundidad.
Fuente: NASA Science, Surveyor 3.`,
`Surveyor 3 was an uncrewed NASA lander, designed and managed by NASA/JPL (USA). It was the second of the Surveyor series to achieve a soft landing on the Moon.
It weighed about 998 kg and launched on 17 April 1967 on an Atlas Centaur rocket from Cape Canaveral.
It carried two instruments: a TV camera and a surface sampling arm. It was the first of the series to carry a sampling instrument: the arm reached 1.5 m and dug up to 18 cm deep.
Source: NASA Science, Surveyor 3.`],[
`El objetivo era hacer un aterrizaje suave en la Luna, por lo que se presenta como un vuelo de ingeniería. Con ello se buscaba comprobar si la superficie lunar aguantaba el peso de un módulo lunar Apollo.
Esto la convierte en una misión de preparación para enviar humanos a la Luna.`,
`The goal was to make a soft landing on the Moon, so it is presented as an engineering flight. It aimed to check whether the lunar surface could bear the weight of an Apollo lunar module.
This makes it a preparation mission for sending humans to the Moon.`],[
`El suelo lunar es bastante firme. Con el brazo, la sonda cavó 4 trincheras, hizo 4 pruebas de carga y 13 pruebas de impacto. Los científicos concluyeron que el suelo tenía una consistencia parecida a la arena húmeda, con una resistencia de unos 0,7 kg/cm², suficiente para sostener un módulo Apollo.
Se obtuvieron 6 326 fotografías del entorno. La primera transmisión empezó menos de una hora después de aterrizar.
Una prueba de exposición real: en noviembre de 1969, los astronautas del Apollo 12 recuperaron la cámara y el brazo muestreador para estudiar los efectos de casi dos años y medio en la superficie lunar.
Dato extra: al descender, unas rocas muy reflectantes confundieron el radar y el motor no se apagó a tiempo; la sonda rebotó dos veces (a 10 m y a 3 m de altura) antes de posarse. Aun así, la misión salió bien.
Estado hoy: sin contacto desde el 4 de mayo de 1967, dos días después de que empezara la noche lunar.
Su mensaje al universo: “El suelo de la Luna es firme: pueden venir.”`,
`The lunar soil is quite firm. With the arm, the probe dug 4 trenches, ran 4 load tests and 13 impact tests. Scientists concluded the soil had a consistency similar to wet sand, with a strength of about 0.7 kg/cm², enough to support an Apollo module.
6,326 photographs of the surroundings were obtained. The first transmission began less than an hour after landing.
A real exposure test: in November 1969, Apollo 12 astronauts retrieved the camera and sampling arm to study the effects of almost two and a half years on the lunar surface.
Extra fact: during descent, highly reflective rocks confused the radar and the engine did not shut off in time; the probe bounced twice (at 10 m and 3 m high) before settling. Even so, the mission succeeded.
Status today: no contact since 4 May 1967, two days after the lunar night began.
Its message to the universe: “The Moon’s ground is firm: you can come.”`]],
    qs: [
      q('Surveyor 3 fue la primera sonda de su serie con un instrumento para tomar muestras. ¿Cuál era?', 'Surveyor 3 was the first probe of its series with a sampling instrument. What was it?', [['Un sismómetro', 'A seismometer'], ['Un brazo muestreador', 'A sampling arm'], ['Un pequeño rover', 'A small rover']], 1, ['El brazo alcanzaba 1,5 m de distancia y cavaba hasta 18 cm de profundidad.', 'The arm reached 1.5 m and dug up to 18 cm deep.']),
      q('Antes de enviar astronautas, la NASA necesitaba saber algo del suelo lunar. ¿Qué era?', 'Before sending astronauts, NASA needed to know something about the lunar soil. What was it?', [['Si el suelo era lo bastante firme', 'Whether the soil was firm enough'], ['Si el suelo tenía agua congelada bajo la superficie', 'Whether the soil had frozen water below the surface'], ['Si el suelo era demasiado caliente para pisarlo', 'Whether the soil was too hot to walk on']], 0, ['Con el brazo cavó 4 trincheras, hizo 4 pruebas de carga y 13 pruebas de impacto. Concluyeron que el suelo era como arena húmeda, con una resistencia de unos 0,7 kg/cm².', 'With the arm it dug 4 trenches and ran 4 load and 13 impact tests. They concluded the soil was like wet sand, with a strength of about 0.7 kg/cm².']),
      q('Al descender, unas rocas muy reflectantes confundieron el radar. ¿Qué pasó?', 'During descent, highly reflective rocks confused the radar. What happened?', [['Rebotó dos veces antes de posarse', 'It bounced twice before settling'], ['Aterrizó de golpe y la cámara quedó inservible', 'It crashed down and the camera was ruined'], ['Se desvió y aterrizó lejos de la zona prevista', 'It drifted and landed far from the planned area']], 0, ['Rebotó a 10 m y a 3 m de altura, y aun así la misión salió bien. Obtuvo 6 326 fotografías.', 'It bounced at 10 m and 3 m high, and the mission still succeeded. It returned 6,326 photographs.'])] },

  'NEAR SHOEMAKER': { n: 'NEAR Shoemaker', tag: ['SONDA A UN ASTEROIDE · 17 FEB 1996', 'ASTEROID PROBE · 17 FEB 1996'],
    s: [[
`NEAR (Near Earth Asteroid Rendezvous) fue una sonda de la NASA que cumplió tres funciones: pasar cerca de un asteroide (flyby), orbitarlo y aterrizar en él. Fue la primera nave en orbitar un asteroide y también la primera en aterrizar en uno.
Fue la primera misión del programa Discovery, de proyectos planetarios de bajo costo (menos de unos 150 millones de dólares de los años 90), elegidos por concurso y liderados por un investigador principal.
Datos básicos: gestionada por NASA / GSFC / APL (EE. UU.), con una masa de 805 kg, lanzada el 17 de febrero de 1996 en un cohete Delta desde Cabo Cañaveral. Fue la primera en usar celdas solares como fuente de energía más allá de la órbita de Marte. Se rebautizó NEAR Shoemaker en 2000, en honor al geólogo Eugene M. Shoemaker (1928-1997).
Instrumentos: cámara multiespectral, magnetómetro, espectrómetro de infrarrojo cercano, espectrómetro de rayos X/gamma, altímetro láser y un experimento de radio y gravimetría.`,
`NEAR (Near Earth Asteroid Rendezvous) was a NASA probe with three jobs: fly close to an asteroid (flyby), orbit it and land on it. It was the first spacecraft to orbit an asteroid and also the first to land on one.
It was the first mission of the Discovery program, low-cost planetary projects (under about 150 million 1990s dollars), chosen by competition and led by a principal investigator.
Basic facts: managed by NASA / GSFC / APL (USA), mass of 805 kg, launched on 17 February 1996 on a Delta rocket from Cape Canaveral. It was the first to use solar cells as a power source beyond Mars’s orbit. It was renamed NEAR Shoemaker in 2000, honoring geologist Eugene M. Shoemaker (1928–1997).
Instruments: multispectral camera, magnetometer, near-infrared spectrometer, X-ray/gamma-ray spectrometer, laser altimeter and a radio science/gravity experiment.`],[
`Su objetivo principal era encontrarse con el asteroide 433 Eros, un asteroide de tipo S a unos 355 millones de km de la Tierra, y reunir datos sobre:
• Sus propiedades físicas.
• Sus minerales.
• Su forma y relieve (morfología).
• La distribución de masa en su interior.
• Su campo magnético.
Como objetivo previo, debía hacer un sobrevuelo del asteroide Mathilde.`,
`Its main goal was to rendezvous with asteroid 433 Eros, an S-type asteroid about 355 million km from Earth, and gather data on:
• Its physical properties.
• Its minerals.
• Its shape and relief (morphology).
• The distribution of mass inside it.
• Its magnetic field.
As a prior objective, it had to fly by asteroid Mathilde.`],[
`Mathilde (1997): en un sobrevuelo de 25 minutos fotografió el 60 % del asteroide. Resultó estar cubierto de cráteres y ser menos denso de lo que se creía.
Eros (primer sobrevuelo, 1998): descubrió que era más pequeño de lo esperado, con dos cráteres medianos, una larga cresta superficial y una densidad parecida a la de la corteza terrestre.
Eros (órbita, 2000-2001): comprobó que no tiene campo magnético, cartografió más del 70 % de su superficie con el espectrómetro infrarrojo y obtuvo datos importantes sobre su interior.
Volumen de datos: devolvió unas 10 veces más datos de los planeados, incluidas 160 000 imágenes.
Final de la misión: aterrizó el 12 de febrero de 2001, a unos 6,4 km/h, cerca de una zona llamada Himeros. No estaba diseñada para aterrizar, pero sobrevivió y transmitió datos durante unas dos semanas. El último contacto fue el 28 de febrero de 2001: no resistió el frío extremo (unos -173 °C). Un intento de contactarla en diciembre de 2002 no tuvo éxito.
Fue la primera vez que una nave estadounidense fue la primera en aterrizar en un cuerpo celeste, tras los éxitos soviéticos en la Luna, Marte y Venus.
También hubo un contratiempo: un motor falló en diciembre de 1998 y la llegada a Eros se retrasó cerca de un año.
Fuente: NASA Science, NEAR Shoemaker.`,
`Mathilde (1997): in a 25-minute flyby it photographed 60% of the asteroid. It turned out to be covered in craters and less dense than believed.
Eros (first flyby, 1998): it found Eros smaller than expected, with two medium craters, a long surface ridge and a density similar to Earth’s crust.
Eros (orbit, 2000–2001): it showed Eros has no magnetic field, mapped over 70% of its surface with the infrared spectrometer and obtained important data on its interior.
Data volume: it returned about 10 times more data than planned, including 160,000 images.
End of mission: it landed on 12 February 2001, at about 6.4 km/h, near an area called Himeros. It was not designed to land, but it survived and transmitted data for about two weeks. Last contact was on 28 February 2001: it could not withstand the extreme cold (about -173 °C). An attempt to contact it in December 2002 failed.
It was the first time a US spacecraft was first to land on a celestial body, after Soviet successes on the Moon, Mars and Venus.
There was also a setback: an engine failed in December 1998 and arrival at Eros was delayed by nearly a year.
Source: NASA Science, NEAR Shoemaker.`]],
    qs: [
      q('NEAR fue una sonda de bajo costo, la primera del programa Discovery. ¿Qué logró que ninguna nave había hecho?', 'NEAR was a low-cost probe, the first of the Discovery program. What did it achieve that no spacecraft had done?', [['Aterrizar en Marte', 'Land on Mars'], ['Orbitar un asteroide y aterrizar en él', 'Orbit an asteroid and land on it'], ['Volar en otro planeta', 'Fly on another planet']], 1, ['Fue la primera nave en orbitar un asteroide y también la primera en aterrizar en uno.', 'It was the first spacecraft to orbit an asteroid and also the first to land on one.']),
      q('Su objetivo principal era encontrarse con un asteroide a unos 355 millones de km de la Tierra. ¿Cuál?', 'Its main goal was to meet an asteroid about 355 million km from Earth. Which one?', [['Ceres', 'Ceres'], ['Vesta', 'Vesta'], ['433 Eros', '433 Eros']], 2, ['Antes sobrevoló el asteroide Mathilde. Sus instrumentos le permitieron cartografiar más del 70 % de Eros y comprobar que no tiene campo magnético.', 'Before that it flew by asteroid Mathilde. Its instruments let it map over 70% of Eros and confirm it has no magnetic field.']),
      q('El 12 de febrero de 2001, NEAR se acerca a Eros a unos 6,4 km/h. No fue diseñada para aterrizar. ¿Qué pasó?', 'On 12 February 2001, NEAR approaches Eros at about 6.4 km/h. It was not designed to land. What happened?', [['Sobrevivió y transmitió datos durante unas dos semanas', 'It survived and transmitted data for about two weeks'], ['El impacto dañó sus instrumentos y quedó en silencio a los pocos minutos', 'The impact damaged its instruments and it fell silent within minutes'], ['Rebotó varias veces y se alejó de Eros sin poder volver a acercarse', 'It bounced several times and drifted away from Eros, unable to return']], 0, ['Devolvió unas 10 veces más datos de los planeados, incluidas 160 000 imágenes.', 'It returned about 10 times more data than planned, including 160,000 images.'])] },

  'PIONEER 10': { n: 'Pioneer 10', tag: ['SONDA DE SOBREVUELO · 2 MAR 1972', 'FLYBY PROBE · 2 MAR 1972'],
    s: [[
`Pioneer 10 fue una sonda de sobrevuelo (flyby) de la NASA y la primera misión de la agencia a los planetas exteriores.
Datos básicos: gestionada por NASA / ARC (EE. UU.), con una masa de 258 kg, lanzada el 2 de marzo de 1972 en un cohete Atlas Centaur desde Cabo Cañaveral.
Energía: dos generadores nucleares (RTG SNAP-19) que daban unos 140 W durante el encuentro con Júpiter. Fue la primera nave en usar energía eléctrica totalmente nuclear.
Instrumentos: 11 en total, entre ellos un fotopolarímetro de imágenes, un magnetómetro, un radiómetro infrarrojo, un analizador de plasma, un fotómetro ultravioleta, detectores de partículas y de meteoroides.
Primicias: fue la primera nave en cruzar el cinturón de asteroides, en pasar junto a Júpiter y en viajar más allá de Marte. También fue la primera colocada en una trayectoria de escape del sistema solar y el primer objeto humano en cruzar la órbita de Neptuno.`,
`Pioneer 10 was a NASA flyby probe and the agency’s first mission to the outer planets.
Basic facts: managed by NASA / ARC (USA), mass of 258 kg, launched on 2 March 1972 on an Atlas Centaur rocket from Cape Canaveral.
Power: two nuclear generators (RTG SNAP-19) that gave about 140 W during the Jupiter encounter. It was the first spacecraft to use fully nuclear electric power.
Instruments: 11 in total, including an imaging photopolarimeter, a magnetometer, an infrared radiometer, a plasma analyzer, an ultraviolet photometer, and particle and meteoroid detectors.
Firsts: it was the first spacecraft to cross the asteroid belt, to pass Jupiter and to travel beyond Mars. It was also the first placed on a solar-system escape trajectory and the first human-made object to cross Neptune’s orbit.`],[
`Su objetivo oficial era sobrevolar Júpiter, y se diseñó para una misión de 21 meses. Con ello, la NASA abría el camino a los planetas exteriores.
Su vuelo también sirvió para probar si una nave podía atravesar el cinturón de asteroides y la zona de radiación de Júpiter.`,
`Its official goal was to fly past Jupiter, and it was designed for a 21-month mission. With it, NASA opened the road to the outer planets.
Its flight also served to test whether a spacecraft could cross the asteroid belt and Jupiter’s radiation zone.`],[
`Cinturón de asteroides: lo cruzó entre julio de 1972 y febrero de 1973; encontró menos impactos de lo esperado y midió la intensidad de la luz zodiacal.
Tormenta solar: junto con Pioneer 9, registró en agosto de 1972 detalles de una de las tormentas solares más violentas de las que se tenía registro.
Júpiter: su mayor aproximación fue el 4 de diciembre de 1973, a unos 130 354 km, a unos 126 000 km/h. Entró en la magnetosfera de Júpiter y obtuvo unas 500 imágenes de su atmósfera, con la Gran Mancha Roja visible; eran mejores que las que se podían obtener desde la Tierra.
Lunas: fotografió Calisto, Ganímedes y Europa. Fue la primera nave en obtener imágenes de cerca de Ganímedes.
Magnetismo: con sus datos, los científicos identificaron plasma en el campo magnético de Júpiter. Al cruzar la órbita de Saturno (1976), vio que la enorme cola magnética de Júpiter, de casi 800 millones de km, llegaba hasta allí.
Final de la misión: superó con creces su vida prevista y funcionó más de 30 años. El contacto rutinario terminó el 31 de marzo de 1997 por razones de presupuesto. La última señal llegó el 23 de enero de 2003, desde 12,23 mil millones de km, y tardó 11 h 20 min en llegar; su fuente de energía se había debilitado demasiado. Un último intento de contacto, en marzo de 2006, falló.
Sigue viajando en dirección a la estrella Aldebarán, a la que llegaría en unos 2 millones de años. Lleva una placa de aluminio con dibujos de un hombre y una mujer, del sistema solar y de su ubicación respecto a 14 púlsares, por si la encuentra vida inteligente.
El único objetivo que no cumplió fue por falsos comandos provocados por la intensa radiación de Júpiter.
Fuente: NASA Science, Pioneer 10.`,
`Asteroid belt: it crossed it between July 1972 and February 1973; it found fewer impacts than expected and measured the intensity of zodiacal light.
Solar storm: together with Pioneer 9, in August 1972 it recorded details of one of the most violent solar storms on record.
Jupiter: closest approach was on 4 December 1973, at about 130,354 km, at about 126,000 km/h. It entered Jupiter’s magnetosphere and obtained about 500 images of its atmosphere, with the Great Red Spot visible; they were better than any obtainable from Earth.
Moons: it photographed Callisto, Ganymede and Europa. It was the first spacecraft to obtain close-up images of Ganymede.
Magnetism: with its data, scientists identified plasma in Jupiter’s magnetic field. Crossing Saturn’s orbit (1976), it saw that Jupiter’s enormous magnetic tail, almost 800 million km long, reached that far.
End of mission: it far exceeded its planned life and worked for more than 30 years. Routine contact ended on 31 March 1997 for budget reasons. The last signal arrived on 23 January 2003, from 12.23 billion km away, and took 11 h 20 min to arrive; its power source had weakened too much. One last attempt at contact, in March 2006, failed.
It keeps travelling toward the star Aldebaran, which it would reach in about 2 million years. It carries an aluminum plaque with drawings of a man and a woman, of the solar system and of its location relative to 14 pulsars, in case intelligent life finds it.
The only objective it did not meet was due to false commands caused by Jupiter’s intense radiation.
Source: NASA Science, Pioneer 10.`]],
    qs: [
      q('Pioneer 10 fue la primera misión de la NASA a los planetas exteriores. Muy lejos del Sol, ¿qué usaba para tener electricidad?', 'Pioneer 10 was NASA’s first mission to the outer planets. Far from the Sun, what did it use for electricity?', [['Grandes paneles solares', 'Large solar panels'], ['Baterías de un solo uso', 'Single-use batteries'], ['Dos generadores nucleares (RTG)', 'Two nuclear generators (RTG)']], 2, ['Daban unos 140 W durante el encuentro con Júpiter. Fue la primera nave con energía eléctrica totalmente nuclear.', 'They gave about 140 W during the Jupiter encounter. It was the first spacecraft with fully nuclear electric power.']),
      q('Debía cruzar el cinturón de asteroides y llegar a Júpiter. ¿Cuál era su objetivo oficial?', 'It had to cross the asteroid belt and reach Jupiter. What was its official goal?', [['Orbitar Júpiter para estudiarlo durante varios años', 'Orbit Jupiter to study it for several years'], ['Aterrizar en Ganímedes, la luna más grande de Júpiter', 'Land on Ganymede, Jupiter’s largest moon'], ['Pasar volando muy cerca de Júpiter para fotografiarlo y seguir su camino', 'Fly very close past Jupiter to photograph it and continue on its way']], 2, ['Al cruzar el cinturón de asteroides encontró menos impactos de lo esperado. En Júpiter obtuvo unas 500 imágenes, con la Gran Mancha Roja visible.', 'Crossing the asteroid belt it found fewer impacts than expected. At Jupiter it obtained about 500 images, with the Great Red Spot visible.']),
      q('Se diseñó para una misión de 21 meses. ¿Cuánto tiempo funcionó?', 'It was designed for a 21-month mission. How long did it work?', [['Cinco años', 'Five years'], ['Más de 30 años', 'More than 30 years'], ['Los 21 meses exactos', 'Exactly 21 months']], 1, ['Su última señal llegó el 23 de enero de 2003, desde 12,23 mil millones de km, y tardó 11 h 20 min en llegar.', 'Its last signal arrived on 23 January 2003, from 12.23 billion km away, and took 11 h 20 min to arrive.'])] },

  'INGENUITY': { n: 'Ingenuity', tag: ['HELICÓPTERO MARCIANO · 30 JUL 2020', 'MARS HELICOPTER · 30 JUL 2020'],
    s: [[
`Ingenuity fue un helicóptero de la NASA que viajó a Marte pegado al vientre del rover Perseverance; despegó desde el cráter Jezero.
Datos técnicos: pesaba 1,8 kg (unos 0,68 kg en Marte, por la menor gravedad) y sus aspas medían casi 1,2 m de punta a punta. Se alimentaba con un panel solar que cargaba baterías de iones de litio, lo justo para un vuelo de 90 segundos por día marciano.
Cronología: lanzado el 30 de julio de 2020, aterrizó en Marte el 18 de febrero de 2021.
Operó en una atmósfera con menos del 1 % de la densidad de la terrestre.`,
`Ingenuity was a NASA helicopter that travelled to Mars attached to the belly of the Perseverance rover; it took off from Jezero crater.
Technical data: it weighed 1.8 kg (about 0.68 kg on Mars, due to lower gravity) and its blades spanned almost 1.2 m tip to tip. It was powered by a solar panel charging lithium-ion batteries, just enough for a 90-second flight per Martian day.
Timeline: launched on 30 July 2020, it landed on Mars on 18 February 2021.
It operated in an atmosphere with less than 1% of Earth’s density.`],[
`Con el objetivo de demostrar el primer vuelo propulsado en Marte.
• Se diseñó como una demostración de tecnología: no más de 5 vuelos de prueba en 30 días.
• Su misión inicial no era hacer ciencia, sino comprobar que volar en Marte era posible.`,
`With the goal of demonstrating the first powered flight on Mars.
• It was designed as a technology demonstration: no more than 5 test flights in 30 days.
• Its initial mission was not to do science, but to prove that flying on Mars was possible.`],[
`Más que descubrimientos científicos, Ingenuity logró hitos de ingeniería que abrieron una nueva forma de explorar:
• Primer vuelo propulsado y controlado en otro planeta (19 de abril de 2021), llamado “el momento de los hermanos Wright”.
• 72 vuelos en casi 3 años, muy por encima de los 5 previstos. Acumuló 128,8 minutos de vuelo y 17 km recorridos, con una altitud máxima de 24 m y una velocidad máxima de 10 m/s.
• Prueba de que se puede volar en una atmósfera muy delgada.
• Explorador aéreo del rover: su misión se amplió a una “demostración de operaciones” en la que mostró terreno interesante para Perseverance, por ejemplo la región de Séítah, y detectó el equipo con el que Perseverance aterrizó.
• Fase final: vuelos experimentales para conocer los límites aerodinámicos del vehículo.
• Legado: abrió el camino a futuros exploradores aéreos; se menciona la misión SkyFall, que enviaría helicópteros de nueva generación a Marte para explorar posibles sitios de aterrizaje humano y buscar hielo de agua bajo la superficie.
Final de la misión: voló por última vez el 18 de enero de 2024 y la misión se dio por completada el 25 de enero de 2024.
Fuente: NASA Science, Ingenuity Mars Helicopter.`,
`More than scientific discoveries, Ingenuity achieved engineering milestones that opened a new way of exploring:
• First powered, controlled flight on another planet (19 April 2021), called “the Wright brothers moment”.
• 72 flights in almost 3 years, far above the 5 planned. It accumulated 128.8 minutes of flight and 17 km traveled, with a maximum altitude of 24 m and a top speed of 10 m/s.
• Proof that flight is possible in a very thin atmosphere.
• Aerial scout for the rover: its mission was extended to an “operations demonstration” in which it showed interesting terrain to Perseverance, such as the Séítah region, and spotted the gear with which Perseverance landed.
• Final phase: experimental flights to learn the vehicle’s aerodynamic limits.
• Legacy: it paved the way for future aerial explorers; the SkyFall mission is mentioned, which would send next-generation helicopters to Mars to explore possible human landing sites and look for subsurface water ice.
End of mission: it flew for the last time on 18 January 2024 and the mission was declared complete on 25 January 2024.
Source: NASA Science, Ingenuity Mars Helicopter.`]],
    qs: [
      q('Ingenuity debe volar en una atmósfera con menos del 1 % del aire de la Tierra. ¿De dónde saca energía?', 'Ingenuity must fly in an atmosphere with less than 1% of Earth’s air. Where does it get its energy?', [['De un panel solar que carga baterías', 'From a solar panel that charges batteries'], ['De un generador nuclear', 'From a nuclear generator'], ['De un cable conectado al rover', 'From a cable connected to the rover']], 0, ['Esa carga alcanzaba para un vuelo de unos 90 segundos por día marciano.', 'That charge was enough for a flight of about 90 seconds per Martian day.']),
      q('¿Qué debía demostrar el pequeño helicóptero?', 'What was the little helicopter meant to prove?', [['Que había vida en Marte', 'That there was life on Mars'], ['Que Marte tiene terremotos', 'That Mars has quakes'], ['El primer vuelo propulsado en otro planeta', 'The first powered flight on another planet']], 2, ['Era una demostración de tecnología, con no más de 5 vuelos de prueba en 30 días. El 19 de abril de 2021 lo logró, un momento llamado “el momento de los hermanos Wright”.', 'It was a technology demonstration, with no more than 5 test flights in 30 days. On 19 April 2021 it succeeded, a moment called “the Wright brothers moment”.']),
      q('Se esperaban 5 vuelos. ¿Cuántos hizo?', '5 flights were expected. How many did it make?', [['12', '12'], ['72', '72'], ['5', '5']], 1, ['Acumuló 128,8 minutos de vuelo y 17 km, y además sirvió de explorador aéreo para el rover Perseverance.', 'It accumulated 128.8 minutes of flight and 17 km, and also served as an aerial scout for the Perseverance rover.'])] },

  'OPPORTUNITY': { n: 'Opportunity', tag: ['ROVER · 7 JUL 2003', 'ROVER · 7 JUL 2003'],
    s: [[
`Opportunity fue un rover (vehículo explorador) de la NASA en Marte, gemelo de Spirit. Juntos formaron la misión Mars Exploration Rover (MER), gestionada por NASA / JPL (EE. UU.).
Datos técnicos: el rover pesaba 185 kg y tenía el tamaño de un carrito de golf, siete veces más pesado que Sojourner. La nave completa pesaba 1 062 kg.
Lanzado el 7 de julio de 2003 en un cohete Delta desde Cabo Cañaveral.
Instrumentos: cámaras panorámicas y de navegación, espectrómetro térmico (Mini-TES), espectrómetro Mössbauer, espectrómetro de rayos X (APXS), imanes para recoger polvo, cámara microscópica y una herramienta para raspar rocas (RAT). Los últimos cinco iban en un brazo robótico.`,
`Opportunity was a NASA rover (exploration vehicle) on Mars, twin of Spirit. Together they formed the Mars Exploration Rover (MER) mission, managed by NASA / JPL (USA).
Technical data: the rover weighed 185 kg and was the size of a golf cart, seven times heavier than Sojourner. The complete spacecraft weighed 1,062 kg.
Launched on 7 July 2003 on a Delta rocket from Cape Canaveral.
Instruments: panoramic and navigation cameras, thermal spectrometer (Mini-TES), Mössbauer spectrometer, X-ray spectrometer (APXS), magnets to collect dust, a microscopic camera and a rock abrasion tool (RAT). The last five were on a robotic arm.`],[
`Sus objetivos eran estudiar sitios de Marte donde las condiciones pudieron ser favorables para la vida, y buscar rocas y suelos que dieran pistas de actividad pasada del agua.
Cada rover aterrizó en lados opuestos del planeta, en zonas sospechosas de haber sido afectadas por agua líquida.
Se diseñó para durar 90 soles (días marcianos, unos tres meses terrestres) y recorrer unos 1 000 m.`,
`Its goals were to study sites on Mars where conditions may have been favorable for life, and to look for rocks and soils that gave clues to past water activity.
Each rover landed on opposite sides of the planet, in areas suspected of having been affected by liquid water.
It was designed to last 90 sols (Martian days, about three Earth months) and travel about 1,000 m.`],[
`Evidencia de que Marte pudo haber sostenido vida microbiana, según el resumen de la página.
• “Heat Shield Rock” (enero de 2005): una roca del tamaño de una pelota de baloncesto, cerca de su escudo térmico, que resultó ser un meteorito de hierro y níquel.
• Marquette Island: distinta de cualquier roca o meteorito marciano conocido. Parecía venir de las profundidades de la corteza y de un lugar lejano.
• Solander Point: un contacto entre una capa de roca formada en condiciones de agua ácida y otra más antigua de ambiente “más neutro”.
• Perseverance Valley: el investigador principal, Steve Squyres, dijo que los científicos estaban confiados en que era un cauce tallado por fluido y con agua involucrada.
Hitos y récords: pasó por Eagle, Endurance, Victoria y Endeavour (un cráter de 22 km). Rompió los récords de distancia de la Luna: superó al rover del Apollo 17 y al Lunokhod 2. Fue el primero en superar la distancia de un maratón en otro mundo (42,195 km). Condujo la pendiente más empinada de un rover en Marte (32°). En 2010 superó el récord de Viking 1 de operación continua en Marte.
Final de la misión: superó 60 veces su vida prevista y recorrió 45,16 km. Dejó de comunicarse durante una tormenta de polvo global en 2018: la última señal fue el 10 de junio de 2018. La NASA declaró el fin de la misión el 13 de febrero de 2019. Su lugar de descanso final fue Perseverance Valley.
Novedad reciente: su récord de distancia lo superó el rover Perseverance el 11 de octubre de 2026.
Fuente: NASA Science, Opportunity MER-B.`,
`Evidence that Mars could have sustained microbial life, according to the page’s summary.
• “Heat Shield Rock” (January 2005): a basketball-sized rock near its heat shield that turned out to be an iron-nickel meteorite.
• Marquette Island: unlike any known Martian rock or meteorite. It seemed to come from deep in the crust and from a faraway place.
• Solander Point: a contact between a rock layer formed in acidic-water conditions and an older one from a “more neutral” environment.
• Perseverance Valley: principal investigator Steve Squyres said scientists were confident it was a channel carved by fluid, with water involved.
Milestones and records: it passed Eagle, Endurance, Victoria and Endeavour (a 22 km crater). It broke the Moon distance records: it surpassed the Apollo 17 rover and Lunokhod 2. It was the first to exceed marathon distance on another world (42.195 km). It drove the steepest slope of any rover on Mars (32°). In 2010 it beat Viking 1’s record for continuous operation on Mars.
End of mission: it outlived its planned life 60 times over and traveled 45.16 km. It stopped communicating during a global dust storm in 2018: the last signal was on 10 June 2018. NASA declared the mission over on 13 February 2019. Its final resting place was Perseverance Valley.
Recent news: its distance record was surpassed by the Perseverance rover on 11 October 2026.
Source: NASA Science, Opportunity MER-B.`]],
    qs: [
      q('Eres ingeniero de la misión. Opportunity debe sobrevivir en Marte sin enchufes. ¿De dónde saca su energía?', 'You are a mission engineer. Opportunity must survive on Mars with no outlets. Where does it get its energy?', [['De un generador nuclear', 'From a nuclear generator'], ['De paneles solares', 'From solar panels'], ['De combustible que se recarga cada año', 'From fuel that is refilled every year']], 1, ['Funcionaba con energía solar. Guarda este dato, porque será su mayor amenaza.', 'It ran on solar power. Remember this, because it will be its greatest threat.']),
      q('Opportunity raspa una roca con su herramienta especial y analiza lo que hay dentro. ¿Qué busca?', 'Opportunity scrapes a rock with its special tool and analyzes what is inside. What is it looking for?', [['Señales de que en esa zona hubo agua líquida hace mucho tiempo', 'Signs that liquid water existed in that area long ago'], ['Señales de que bajo la superficie hay volcanes que podrían despertar', 'Signs that there are volcanoes below the surface that could awaken'], ['Señales de que la roca llegó de otro planeta tras un choque', 'Signs that the rock arrived from another planet after an impact']], 0, ['Sus instrumentos buscaban rocas y suelos que revelaran actividad pasada del agua. Aterrizó en una zona sospechosa de haber sido afectada por agua.', 'Its instruments sought rocks and soils that revealed past water activity. It landed in an area suspected of having been affected by water.']),
      q('En 2018, una tormenta de polvo global cubre Marte. ¿Qué le pasa a Opportunity?', 'In 2018, a global dust storm covers Mars. What happens to Opportunity?', [['Pierde energía solar y deja de comunicarse', 'It loses solar power and stops communicating'], ['Una roca la aplasta', 'A rock crushes it'], ['Los controladores la apagan a propósito', 'Controllers shut it down on purpose']], 0, ['Superó 60 veces su vida prevista y recorrió 45,16 km, más que cualquier otro vehículo fuera de la Tierra durante años.', 'It outlived its planned life 60 times over and traveled 45.16 km, more than any other vehicle off Earth for years.'])] },

  'CASSINI': { n: 'Cassini-Huygens', tag: ['ORBITADOR DE SATURNO · 15 OCT 1997', 'SATURN ORBITER · 15 OCT 1997'],
    s: [[
`Cassini fue una nave robótica de la NASA (orbitador y sonda) enviada a estudiar Saturno, sus anillos y sus lunas heladas “con un detalle sin precedentes”; se describe como uno de los esfuerzos más ambiciosos de la exploración planetaria.
Fue la primera nave en orbitar Saturno, empezó su estudio detallado en 2004 y permaneció en el sistema de Saturno 13 años.
Cronología: lanzada el 15 de octubre de 1997. Su fin, llamado “Gran Final” (Grand Finale), fue el 15 de septiembre de 2017.`,
`Cassini was a robotic NASA spacecraft (orbiter and probe) sent to study Saturn, its rings and its icy moons “in unprecedented detail”; it is described as one of the most ambitious efforts in planetary exploration.
It was the first spacecraft to orbit Saturn, began its detailed study in 2004 and stayed in the Saturn system for 13 years.
Timeline: launched on 15 October 1997. Its end, called the “Grand Finale”, came on 15 September 2017.`],[
`Para estudiar el sistema de Saturno: el planeta, sus anillos y sus lunas.
Solo se habían tenido breves vistazos de lo que había en Saturno; Cassini hizo el primer estudio profundo y de cerca.`,
`To study the Saturn system: the planet, its rings and its moons.
Only brief glimpses of Saturn had been had before; Cassini made the first deep, close-up study.`],[
`• Titán: un mundo con ríos de metano que desembocan en un mar de metano, y con química “prebiótica” interesante.
• Encélado: chorros de hielo y gas que salen de un océano de agua líquida y que podría tener ingredientes para la vida. Cassini reveló que Encélado tiene “esencialmente todos los ingredientes necesarios para la vida”.
• Imagen “El día que la Tierra sonrió”: el 19 de julio de 2013, Cassini entró en la sombra de Saturno y fotografió el planeta, siete de sus lunas, sus anillos interiores y, al fondo, la Tierra.
Al final de la misión Cassini había gastado casi todo su combustible, y los operadores la hicieron caer a propósito en Saturno para que sus lunas siguieran “prístinas” y se pudieran explorar en el futuro, sobre todo Encélado y Titán.
Legado: impulsó el giro hacia la exploración de los “mundos océano”. Sus lecciones se aplican a Europa Clipper, que usa un diseño de órbitas derivado de la forma en que Cassini exploró Saturno. Futuras misiones a Urano y Neptuno podrían usar un enfoque parecido.
Estado hoy: sin misión desde el 15 de septiembre de 2017.
Fuente: NASA Science, Cassini-Huygens.`,
`• Titan: a world with methane rivers that flow into a methane sea, and with interesting “prebiotic” chemistry.
• Enceladus: jets of ice and gas coming from a liquid-water ocean that could hold ingredients for life. Cassini revealed that Enceladus has “essentially all the ingredients needed for life”.
• Image “The Day the Earth Smiled”: on 19 July 2013, Cassini entered Saturn’s shadow and photographed the planet, seven of its moons, its inner rings and, in the background, Earth.
At the end of the mission Cassini had used nearly all its fuel, and operators deliberately plunged it into Saturn so its moons would stay “pristine” and could be explored in the future, especially Enceladus and Titan.
Legacy: it drove the shift toward exploring “ocean worlds”. Its lessons apply to Europa Clipper, which uses an orbit design derived from how Cassini explored Saturn. Future missions to Uranus and Neptune could use a similar approach.
Status today: no mission since 15 September 2017.
Source: NASA Science, Cassini-Huygens.`]],
    qs: [
      q('Antes de Cassini solo se habían tenido breves vistazos de Saturno. ¿Qué logro tuvo?', 'Before Cassini only brief glimpses of Saturn had been had. What did it achieve?', [['Aterrizó en uno de sus anillos', 'It landed on one of its rings'], ['Fue la primera nave en orbitar Saturno', 'It was the first spacecraft to orbit Saturn'], ['Midió el planeta desde la Tierra', 'It measured the planet from Earth']], 1, ['Empezó su estudio detallado en 2004 y permaneció 13 años en el sistema de Saturno.', 'It began its detailed study in 2004 and stayed 13 years in the Saturn system.']),
      q('Cassini descubrió chorros de hielo y gas que salen de un océano de agua líquida. ¿En qué luna?', 'Cassini discovered jets of ice and gas coming from a liquid-water ocean. On which moon?', [['Titán', 'Titan'], ['Encélado', 'Enceladus'], ['La Luna de la Tierra', 'Earth’s Moon']], 1, ['Encélado podría tener ingredientes para la vida. Titán, en cambio, tiene ríos que desembocan en un mar de metano.', 'Enceladus could have ingredients for life. Titan, by contrast, has rivers that flow into a methane sea.']),
      q('Casi sin combustible, los operadores hicieron caer a Cassini en Saturno. ¿Por qué?', 'Almost out of fuel, operators sent Cassini into Saturn. Why?', [['Para que sus lunas se mantuvieran limpias y se pudieran explorar en el futuro', 'So its moons would stay clean and could be explored in the future'], ['Para estudiar de cerca el interior de Saturno antes de apagarse', 'To study Saturn’s interior up close before shutting down'], ['Para evitar que chocara con los anillos y los dañara', 'To keep it from hitting the rings and damaging them']], 0, ['Se protegían sobre todo Encélado y Titán.', 'Enceladus and Titan were the main moons being protected.'])] }
  };
})();
