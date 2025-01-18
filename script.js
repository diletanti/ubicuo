  let numProf, arrProf, arrHorarios = [], arrAulas = [], arrOcup = [], diaSemana, sesionActual;
  const btnAhora = document.getElementById('btnAhora');
  const soundSwitch = document.getElementById('soundSwitch');
  let device = "pc";

  // comprueba si se trata de un móvil o un pc
  let userAgent = window.navigator.userAgent;
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(userAgent)) {
    device = "mobile";
  }


  /*--  ------ Obtención de las referencias al DOM  --------- */
  // ---------------- Aulas  -------------------
  let aula1A = document.getElementById("aula1A");
  let aula1B = document.getElementById("aula1B");
  let aula1C = document.getElementById("aula1C");
  let aula2A = document.getElementById("aula2A");
  let aula2B = document.getElementById("aula2B");
  let aula2C = document.getElementById("aula2C");
  let aula3A = document.getElementById("aula3A");
  let aula3B = document.getElementById("aula3B");
  let aula3C = document.getElementById("aula3C");
  let aula3D = document.getElementById("aula3D");
  let aula3Div = document.getElementById("aula3Div");
  let aula4A = document.getElementById("aula4A");
  let aula4B = document.getElementById("aula4B");
  let aula4C = document.getElementById("aula4C");
  let aula4D = document.getElementById("aula4D");
  let aula4Div = document.getElementById("aula4Div");
  let aula1BaA = document.getElementById("aula1BaA");
  let aula1BaB = document.getElementById("aula1BaB");
  let aula2BaA = document.getElementById("aula2BaA");
  let aula2BaB = document.getElementById("aula2BaB");
  let aulaFp = document.getElementById("aulaFp");
  let aula2Fp = document.getElementById("aula2Fp");
  let poli = document.getElementById("poli");
  let gym = document.getElementById("gym");
  let teat = document.getElementById("teat");
  let tecno = document.getElementById("tecno");
  let lab = document.getElementById("lab");
  let mus = document.getElementById("mus");
  let apo = document.getElementById("apo");
  let bib = document.getElementById("bib");
  let epv = document.getElementById("epv");
  let tic = document.getElementById("tic");
  let jard = document.getElementById("jard");

  // ---------------- Ocupantes  -------------------
  let aula1AP = document.getElementById("aula1AP");
  let aula1BP = document.getElementById("aula1BP");
  let aula1CP = document.getElementById("aula1CP");
  let aula2AP = document.getElementById("aula2AP");
  let aula2BP = document.getElementById("aula2BP");
  let aula2CP = document.getElementById("aula2CP");
  let aula3AP = document.getElementById("aula3AP");
  let aula3BP = document.getElementById("aula3BP");
  let aula3CP = document.getElementById("aula3CP");
  let aula3DP = document.getElementById("aula3DP");
  let aula3DivP = document.getElementById("aula3DivP");
  let aula4AP = document.getElementById("aula4AP");
  let aula4BP = document.getElementById("aula4BP");
  let aula4CP = document.getElementById("aula4CP");
  let aula4DP = document.getElementById("aula4DP");
  let aula4DivP = document.getElementById("aula4DivP");
  let aula1BaAP = document.getElementById("aula1BaAP");
  let aula1BaBP = document.getElementById("aula1BaBP");
  let aula2BaAP = document.getElementById("aula2BaAP");
  let aula2BaBP = document.getElementById("aula2BaBP");
  let aulaFpP = document.getElementById("aulaFpP");
  let aula2FpP = document.getElementById("aula2FpP");
  let poliP = document.getElementById("poliP");
  let gymP = document.getElementById("gymP");
  let teatP = document.getElementById("teatP");
  let tecnoP = document.getElementById("tecnoP");
  let labP = document.getElementById("labP");
  let musP = document.getElementById("musP");
  let apoP = document.getElementById("apoP");
  let bibP = document.getElementById("bibP");
  let epvP = document.getElementById("epvP");
  let ticP = document.getElementById("ticP");
  let jardP = document.getElementById("jardP");

  let salaP1 = document.getElementById("sala1P");
  let salaP2 = document.getElementById("sala2P");
  let salaP3 = document.getElementById("sala3P");
  let salaP4 = document.getElementById("sala4P");

  let rec1P = document.getElementById("rec1P");
  let rec2P = document.getElementById("rec2P");
  let rec3P = document.getElementById("rec3P");
  let rec4P = document.getElementById("rec4P");
  let rec5P = document.getElementById("rec5P");
  let rec6P = document.getElementById("rec6P");
  let rec7P = document.getElementById("rec7P");
  let rec8P = document.getElementById("rec8P");

  // ---------------- Grupos  -------------------
  let aula1AG = document.getElementById("aula1AG");
  let aula1BG = document.getElementById("aula1BG");
  let aula1CG = document.getElementById("aula1CG");
  let aula2AG = document.getElementById("aula2AG");
  let aula2BG = document.getElementById("aula2BG");
  let aula2CG = document.getElementById("aula2CG");
  let aula2DG = document.getElementById("aula2DG");
  let aula3AG = document.getElementById("aula3AG");
  let aula3BG = document.getElementById("aula3BG");
  let aula3CG = document.getElementById("aula3CG");
  let aula3DG = document.getElementById("aula3DG");
  let aula3DivG = document.getElementById("aula3DivG");
  let aula4AG = document.getElementById("aula4AG");
  let aula4BG = document.getElementById("aula4BG");
  let aula4CG = document.getElementById("aula4CG");
  let aula4DivG = document.getElementById("aula4DivG");
  let aula1BaAG = document.getElementById("aula1BaAG");
  let aula1BaBG = document.getElementById("aula1BaBG");
  let aula2BaAG = document.getElementById("aula2BaAG");
  let aula2BaBG = document.getElementById("aula2BaBG");
  let aulaFpG = document.getElementById("aulaFpG");
  let aula2FpG = document.getElementById("aula2FpG");
  let poliG = document.getElementById("poliG");
  let gymG = document.getElementById("gymG");
  let teatG = document.getElementById("teatG");
  let tecnoG = document.getElementById("tecnoG");
  let labG = document.getElementById("labG");
  let musG = document.getElementById("musG");
  let apoG = document.getElementById("apoG");
  let bibG = document.getElementById("bibG");
  let epvG = document.getElementById("epvG");
  let ticG = document.getElementById("ticG");
  let jardG = document.getElementById("jardG");

  const aulas = [
    aula1A, aula1B, aula1C, 
    aula2A, aula2B, aula2C,
    aula3A, aula3B, aula3C, aula3D, aula3Div, 
    aula4A, aula4B, aula4C, aula4D, aula4Div,
    aula1BaA, aula1BaB, aula2BaA, aula2BaB,
    aulaFp, aula2Fp, poli, gym, teat, tecno, lab, mus, apo, bib, epv, tic, jard,
    sala1P, sala2P, sala3P, sala4P, rec1P, rec2P, rec3P, rec4P, rec5P, rec6P, rec7P, rec8P
  ];

  const aulaP = [
    aula1AP, aula1BP, aula1CP, 
    aula2AP, aula2BP, aula2CP,
    aula3AP, aula3BP, aula3CP, aula3DP, aula3DivP, 
    aula4AP, aula4BP, aula4CP, aula4DP, aula4DivP,
    aula1BaAP, aula1BaBP, aula2BaAP, aula2BaBP,
    aulaFpP, aula2FpP, poliP, gymP, teatP, tecnoP, labP, musP, apoP, bibP, epvP, ticP, jardP,
    sala1P, sala2P, sala3P, sala4P, rec1P, rec2P, rec3P, rec4P, rec5P, rec6P, rec7P, rec8P
  ];
  
  const aulaG = [
    aula1AG, aula1BG, aula1CG, 
    aula2AG, aula2BG, aula2CG,
    aula3AG, aula3BG, aula3CG, aula3DG, aula3DivG,
    aula4AG, aula4BG, aula4CG, aula4DG, aula4DivG,
    aula1BaAG, aula1BaBG, aula2BaAG, aula2BaBG,
    aulaFpG, aula2FpG, poliG, gymG, teatG, tecnoG, labG, musG, 
    apoG, bibG, epvG, ticG, jardG
  ];




// Seleccionar elementos del DOM
const welcomePage = document.getElementById('welcomePage');
const mainInterface = document.getElementById('mainInterface');
const notification = document.getElementById('notification');
const dismissButton = document.getElementById('dismiss-btn');
const overlay = document.getElementById('overlay');

// Mostrar overlay inicialmente
overlay.classList.remove('hidden');

// Función para mostrar la notificación
function showNotification() {
  // Verificar si la notificación ya fue vista
  if (!localStorage.getItem('notificationDismissed')) {
    // Mostrar la notificación
    notification.classList.remove('hidden');
  } else {
    // Si ya fue vista, ocultar overlay
    overlay.classList.add('hidden');
  }
}

// Manejar la página de bienvenida
if (!localStorage.getItem('welcomeShown')) {
  // Mostrar página de bienvenida
  mainInterface.style.display = 'none';
  welcomePage.style.display = 'block';

  setTimeout(function () {
    // Ocultar página de bienvenida y mostrar la interfaz principal
    welcomePage.style.display = 'none';
    mainInterface.style.display = 'block';

    // Guardar en localStorage que se mostró la bienvenida
    localStorage.setItem('welcomeShown', 'true');

    // Mostrar la notificación después de la bienvenida
    showNotification();
  }, 3000); // 3 segundos
} else {
  // Si ya se mostró la bienvenida, directamente mostrar la notificación
  showNotification();
}

// Manejar el botón de la notificación
dismissButton.addEventListener('click', () => {
  // Ocultar notificación
  notification.classList.add('hidden');
  // Retirar overlay
  overlay.classList.add('hidden');
  // Registrar en localStorage que ya fue vista
  localStorage.setItem('notificationDismissed', 'true');
});




  cargaDatos();
  document.body.style.backgroundColor = "#444";
  obtenDiaYSesionActual();
  //console.log('diaSemana:', diaSemana, 'sesionActual:', sesionActual);
  pulsaBotonesActuales();
  actualizaOcupantes();
  estableceEscuchas();



  function cargaDatos(){
    // Carga del listado de profesores
    arrProf = [["", "Aguilera Gómez, Miguel Andrés", "Alonso Pérez, Rosa", "Astorga Morano, Purificación", "Atienza Martínez, M Huertas", "Bautista Florido, Pablo", "Bendala Azcárate, Enrique José", "Bueno Pérez, Norberto", "Carmona Bastida, Mª Soledad", "Carrasco Guerrero, María", "Cejas Cáceres, Vicente Manuel", "Contero Sañudo, María de la O", "Daza Riego, Juan Antonio", "De la Fuente Cals, Ricardo", "Domínguez García, Mª Salud", "Domínguez León, Sara", "Durán Ruiz, Ana María", "Escribano Zardoya, Rosa", "Escuder Vargas, Mª Dolores", "Espadas Cejas, Ernestina", "Flores Bélmez, Inmaculada", "García Álvarez, Encarnación", "García Martínez, Sonia", "García Sánchez, José Luis", "Girón Sopeña, Alfredo", "Gómez Romo, Alejandro", "Gómez Sánchez, Mª del Rocío", "Gómez Villalba, Cristóbal", "González Luna, Mª José", "González Redondo, Balbino", "Guerrero Doblas, Úrsula", "Hermoso Ruano, Antonio", "Herránz Mediano, Juan Carlos", "Herrera Sierra, Isidoro", "Huertas Fernández, Luis Carlos", "Ibáñez Sánchez, Francisco José", "Iglesias Mora, Isabel", "Izquierdo Robles, Álvaro Ernesto", "Jiménez Maqueda, Daniel", "Martínez Alfaro, Sonia", "Masegoza Jiménez, Mª Pilar", "Morales Martín, Rosario María", "Morón Rosa, José Antonio", "Moya Molina, Elena", "Ortega Molina, Vicente", "Paz Yepes, Javier", "Pérez Gómez, Mª Dolores", "Raposo Romero, Clara", "Romero León, María Reyes", "Romero Rosales, Mario", "Tejada Jiménez, María José", "Urosa, Beatriz"],["", "Agui", "Rosa A.", "Puri", "María H", "Pablo", "Enriq.B", "Norber", "Marisol", "MaríaC", "Vicen.C", "María O", "Daza", "Ricardo", "Salud", "Sara", "Ana D.", "RosaE", "Lola E.", "Ernest", "Inma", "Encarn", "SoniaG", "José L.", "Alfred", "Alejan", "Rocío", "Cristo", "Mª J. G.", "Balbino", "Úrsula", "Ant. H.", "Juan C.", "Isidoro", "Luis C.", "Fco. I.", "Isabel", "Álvaro", "Daniel", "SoniaM", "Pilar", "Rosar", "José A.", "Elena", "Vicen.O", "Javier", "Lola P.", "Clara", "Reyes", "Mario", "Mª J. T.", "Beatriz"]];

    // Carga del listado aulas
    arrAulas[0] = [[47, 35, 49, 0, 18, 43, 40], [18, 2, 6, 0, 19, 49, 43], [35, 2, 18, 0, 40, 19, 43], [19, 35, 40, 0, 27, 0, 47], [18, 5, 49, 0, 18, 43, 19]];
    arrAulas[1] = [[18, 46, 17, 0, 4, 47, 8], [8, 33, 4, 0, 47, 19, 17], [46, 33, 27, 0, 18, 4, 19], [18, 46, 8, 0, 19, 0, 4], [6, 19, 18, 0, 0, 0, 8]];
    arrAulas[2] = [[46, 26, 18, 0, 0, 4, 27], [46, 15, 47, 0, 18, 17, 4], [18, 15, 46, 0, 4, 47, 17], [17, 26, 18, 0, 51, 4, 6], [46, 0, 26, 0, 17, 0, 4]];
    arrAulas[3] = [[0, 47, 32, 0, 43, 41, 5], [47, 32, 38, 0, 31, 43, 13], [13, 0, 31, 0, 38, 32, 5], [43, 5, 32, 0, 38, 13, 0], [13, 43, 27, 0, 14, 41, 13]];
    arrAulas[4] = [[32, 33, 25, 0, 14, 38, 0], [33, 38, 32, 0, 25, 13, 31], [25, 13, 5, 0, 32, 36, 0], [31, 27, 5, 0, 13, 0, 5], [5, 25, 32, 0, 13, 5, 38]];
    arrAulas[5] = [[25, 0, 14, 0, 0, 31, 13], [0, 27, 13, 0, 38, 32, 25], [5, 25, 32, 0, 25, 31, 38], [32, 0, 17, 0, 5, 38, 13], [0, 32, 5, 0, 0, 13, 25]];
    arrAulas[6] = [[2, 25, 16, 0, 47, 40, 0], [16, 16, 39, 0, 37, 8, 5], [16, 5, 47, 0, 27, 39, 25], [8, 40, 37, 0, 39, 25, 0], [16, 0, 39, 0, 25, 40, 5]];
    arrAulas[7] = [[37, 14, 30, 0, 2, 16, 2], [37, 39, 14, 0, 4, 25, 8], [39, 16, 2, 0, 5, 25, 30], [16, 39, 27, 0, 25, 8, 0], [39, 39, 25, 0, 16, 14, 30]];
    arrAulas[8] = [[14, 30, 7, 0, 0, 19, 43], [14, 7, 19, 0, 30, 2, 0], [7, 27, 0, 0, 30, 43, 49], [37, 19, 7, 0, 0, 43, 43], [37, 14, 43, 0, 19, 49, 0]];
    arrAulas[9] = [[7, 48, 43, 0, 0, 2, 19], [48, 37, 35, 0, 43, 5, 19], [37, 14, 0, 0, 0, 7, 27], [7, 14, 43, 0, 14, 19, 49], [7, 48, 14, 0, 43, 19, 49]];
    arrAulas[10] = [[0, 40, 40, 0, 0, 8, 0], [35, 8, 8, 0, 35, 40, 40], [8, 8, 0, 0, 0, 40, 40], [40, 8, 35, 0, 8, 40, 0], [0, 35, 40, 0, 8, 8, 40]];
    arrAulas[11] = [[48, 18, 47, 0, 36, 10, 36], [38, 10, 18, 0, 36, 47, 49], [47, 38, 36, 0, 36, 49, 10], [27, 18, 51, 0, 49, 48, 10], [48, 18, 48, 0, 0, 38, 36]];
    arrAulas[12] = [[10, 16, 31, 0, 26, 35, 38], [10, 35, 16, 0, 28, 31, 36], [31, 35, 26, 0, 28, 38, 36], [35, 16, 10, 0, 35, 36, 38], [10, 16, 38, 0, 27, 36, 28]];
    arrAulas[13] = [[11, 42, 0, 0, 15, 36, 41], [0, 36, 42, 0, 39, 0, 2], [0, 41, 15, 0, 39, 2, 11], [13, 42, 39, 0, 2, 41, 36], [11, 42, 17, 0, 36, 39, 11]];
    arrAulas[14] = [[0, 7, 0, 0, 0, 39, 4], [11, 4, 7, 0, 41, 0, 0], [0, 39, 0, 0, 41, 0, 4], [11, 7, 4, 0, 41, 39, 41], [0, 7, 11, 0, 39, 4, 27]];
    arrAulas[15] = [[35, 10, 35, 0, 35, 48, 10], [21, 48, 48, 0, 10, 41, 10], [0, 48, 35, 0, 10, 10, 0], [51, 48, 48, 0, 10, 10, 22], [35, 10, 35, 0, 48, 48, 0]];
    arrAulas[16] = [[30, 32, 0, 0, 42, 49, 12], [32, 30, 0, 0, 49, 15, 12], [30, 42, 12, 0, 47, 26, 15], [30, 32, 42, 0, 15, 49, 12], [32, 49, 42, 0, 26, 27, 47]];
    arrAulas[17] = [[33, 3, 28, 0, 0, 12, 15], [3, 29, 33, 0, 15, 12, 28], [3, 12, 29, 0, 12, 28, 0], [33, 3, 28, 0, 29, 27, 15], [33, 29, 28, 0, 28, 12, 12]];
    arrAulas[18] = [[3, 17, 12, 0, 16, 15, 0], [34, 3, 30, 0, 16, 26, 47], [12, 30, 16, 0, 26, 15, 47], [3, 30, 26, 0, 17, 12, 0], [3, 26, 16, 0, 30, 17, 15]];
    arrAulas[19] = [[17, 12, 46, 0, 7, 28, 28], [27, 14, 15, 0, 7, 28, 41], [14, 46, 7, 0, 15, 12, 41], [14, 17, 46, 0, 28, 15, 28], [14, 46, 7, 0, 12, 28, 17]];
    arrAulas[20] = [[44, 44, 45, 0, 45, 11, 11], [45, 11, 1, 0, 17, 11, 11], [44, 44, 44, 0, 44, 44, 1], [45, 45, 1, 0, 1, 1, 1], [44, 45, 45, 0, 45, 44, 44]];
    arrAulas[21] = [[45, 45, 11, 0, 11, 1, 1], [44, 44, 44, 0, 44, 1, 1], [45, 45, 1, 0, 1, 1, 44], [44, 44, 45, 0, 45, 45, 45], [45, 44, 44, 0, 11, 11, 1]];
    arrAulas[22] = [[0, 0, 20, 0, 20, 20, 0], [0, 0, 20, 0, 20, 20, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 20, 0, 20, 20, 0], [0, 20, 0, 0, 20, 20, 0]];
    arrAulas[23] = [[24, 24, 24, 0, 24, 0, 20], [24, 0, 0, 0, 0, 0, 20], [24, 24, 0, 0, 20, 20, 20], [24, 24, 24, 0, 24, 24, 20], [24, 24, 24, 0, 24, 24, 0]];
    arrAulas[24] = [[0, 0, 0, 0, 41, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 41, 0, 0, 41, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 41, 0, 0]];
    arrAulas[25] = [[31, 31, 23, 0, 30, 34, 0], [31, 31, 2, 0, 34, 23, 23], [23, 31, 30, 0, 2, 23, 31], [0, 31, 0, 0, 23, 34, 2], [0, 34, 0, 0, 0, 0, 2]];
    arrAulas[26] = [[0, 0, 0, 0, 48, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 48, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
    arrAulas[27] = [[0, 0, 9, 0, 9, 9, 9], [0, 21, 0, 0, 0, 9, 9], [9, 9, 0, 0, 0, 0, 0], [0, 0, 9, 0, 0, 9, 9], [9, 9, 0, 0, 9, 9, 0]];
    arrAulas[28] = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
    arrAulas[29] = [[0, 0, 0, 0, 0, 17, 31], [0, 13, 36, 0, 0, 0, 0], [0, 29, 9, 0, 29, 17, 2], [0, 11, 13, 0, 9, 28, 40], [0, 0, 13, 0, 38, 15, 31]];
    arrAulas[30] = [[0, 6, 6, 0, 34, 6, 0], [6, 0, 37, 0, 6, 6, 0], [6, 37, 34, 0, 0, 0, 0], [0, 37, 0, 0, 0, 6, 0], [0, 6, 0, 0, 37, 0, 0]];
    arrAulas[31] = [[0, 2, 34, 0, 23, 0, 23], [2, 34, 0, 0, 0, 34, 34], [34, 34, 23, 0, 23, 0, 34], [0, 0, 0, 0, 0, 0, 23], [0, 0, 0, 0, 0, 0, 23]];
    arrAulas[32] = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
    arrAulas[33] = [[9, 9, 2, 0, 10, 7, 6], [4, 6, 11, 0, 8, 4, 6], [2, 7, 25, 0, 7, 5, 22], [5, 13, 14, 0, 4, 2, 8], [20, 13, 19, 0, 5, 18, 22]];
    arrAulas[34] = [[16, 11, 10, 0, 28, 14, 47], [7, 18, 21, 0, 9, 10, 15], [48, 23, 38, 0, 16, 27, 28], [39, 43, 16, 0, 40, 5, 25], [38, 37, 20, 0, 15, 25, 41]];
    arrAulas[35] = [[50, 28, 48, 0, 31, 23, 49], [30, 47, 31, 0, 11, 18, 32], [50, 47, 39, 0, 31, 30, 32], [46, 51, 19, 0, 43, 14, 27], [50, 38, 37, 0, 40, 30, 43]];
    arrAulas[36] = [[0, 0, 0, 0, 40, 0, 0], [0, 0, 0, 0, 13, 0, 0], [0, 0, 0, 0, 34, 34, 0], [0, 0, 0, 0, 48, 23, 0], [0, 0, 0, 0, 49, 0, 0]];
    arrAulas[37] = [[0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 8, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 4, 0, 0, 0], [0, 0, 0, 14, 0, 0, 0]];
    arrAulas[38] = [[0, 0, 0, 11, 0, 0, 0], [0, 0, 0, 15, 0, 0, 0], [0, 0, 0, 10, 0, 0, 0], [0, 0, 0, 8, 0, 0, 0], [0, 0, 0, 18, 0, 0, 0]];
    arrAulas[39] = [[0, 0, 0, 17, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0], [0, 0, 0, 12, 0, 0, 0], [0, 0, 0, 9, 0, 0, 0], [0, 0, 0, 19, 0, 0, 0]];
    arrAulas[40] = [[0, 0, 0, 20, 0, 0, 0], [0, 0, 0, 22, 0, 0, 0], [0, 0, 0, 23, 0, 0, 0], [0, 0, 0, 13, 0, 0, 0], [0, 0, 0, 25, 0, 0, 0]];
    arrAulas[41] = [[0, 0, 0, 28, 0, 0, 0], [0, 0, 0, 32, 0, 0, 0], [0, 0, 0, 31, 0, 0, 0], [0, 0, 0, 24, 0, 0, 0], [0, 0, 0, 27, 0, 0, 0]];
    arrAulas[42] = [[0, 0, 0, 30, 0, 0, 0], [0, 0, 0, 36, 0, 0, 0], [0, 0, 0, 34, 0, 0, 0], [0, 0, 0, 41, 0, 0, 0], [0, 0, 0, 37, 0, 0, 0]];
    arrAulas[43] = [[0, 0, 0, 45, 0, 0, 0], [0, 0, 0, 38, 0, 0, 0], [0, 0, 0, 46, 0, 0, 0], [0, 0, 0, 48, 0, 0, 0], [0, 0, 0, 43, 0, 0, 0]];
    arrAulas[44] = [[0, 0, 0, 49, 0, 0, 0], [0, 0, 0, 39, 0, 0, 0], [0, 0, 0, 47, 0, 0, 0], [0, 0, 0, 50, 0, 0, 0], [0, 0, 0, 49, 0, 0, 0]];


    // Carga de horarios
    arrHorarios[0] = [["", "", "", "GUA", "ETCP", "2FPA", "2FPA"], ["", "", "1FPA", "", "1FPA", "2FPA", "2FPA"], ["", "", "2FPA", "", "2FPA", "2FPA", "1FPA"], ["", "", "1FPA", "", "1FPA", "1FPA", "1FPA"], ["", "", "", "", "", "", "2FPA"]];
    arrHorarios[1] = [["3A", "2º", "GUA", "", "3BC", "3D", "3B"], ["2º", "1º", "2D", "", "", "3C", "4CD"], ["GUA", "1º", "3BC", "GUA", "3B", "4º", "3D"], ["", "", "", "", "4CD", "GUA", "3A"], ["", "", "", "", "", "", "3C"]];
    arrHorarios[2] = [["2BaA", "1BaB", "DIR", "", "ETCP", "", ""], ["1BaB", "2BaA", "", "", "", "", ""], ["1BaB", "", "", "", "", "", ""], ["2BaA", "1BaB", "", "", "", "", ""], ["2BaA", "", "", "", "", "", ""]];
    arrHorarios[3] = [["", "", "", "", "1B", "1B", "4D"], ["GUA", "4D", "1B", "", "1B", "GUA", "1C"], ["", "", "", "", "1C", "1B", "4D"], ["", "", "4D", "GUA", "GUA", "1C", "1B"], ["", "", "", "", "", "4D", "1C"]];
    arrHorarios[4] = [["", "", "", "", "", "", "2A"], ["", "", "", "", "", "2BaA", "3A"], ["2C", "3A", "2B", "", "2BaA", "GUA", "2A"], ["GUA", "2A", "2BaA", "", "2C", "GUA", "2B"], ["2B", "2BaA", "2C", "", "GUA", "2B", "3A"]];
    arrHorarios[5] = [["", "2º", "4º", "", "ETCP", "1BaA", "GUA"], ["2º", "GUA", "1A", "", "1BaA", "4º", "GUA"], ["4º", "", "", "", "", "", ""], ["", "", "", "", "", "1BaA", "1C"], ["1B", "1BaA", "", "", "", "", ""]];
    arrHorarios[6] = [["3D", "4BCD", "3C", "", "2ºBa", "GUA", ""], ["GUA", "3C", "4BCD", "", "2ºBa", "", ""], ["3C", "GUA", "2ºBa", "", "GUA", "3D", ""], ["3D", "4BCD", "3C", "", "", "", ""], ["3D", "4BCD", "2ºBa", "", "", "", ""]];
    arrHorarios[7] = [["", "", "", "", "", "3DIV", "1B"], ["1B", "3DIV", "3DIV", "GUA", "GUA", "3A", "3B"], ["3DIV", "3DIV", "", "", "", "", ""], ["3A", "3DIV", "1BaB", "GUA", "3DIV", "3B", "GUA"], ["", "", "", "", "3DIV", "3DIV", "1B"]];
    arrHorarios[8] = [["GUA", "GUA", "4º", "", "2C", "1C", "2B"], ["", "", "", "", "GUA", "4º", "1B"], ["4º", "2A", "1B", "", "", "", ""], ["", "", "2B", "GUA", "1A", "1A", "2A"], ["2C", "1A", "", "", "1B", "1C", ""]];
    arrHorarios[9] = [["4B", "4DIV", "GUA", "", "GUA", "4A", "4DIV"], ["4B", "4A", "", "", "4DIV", "GUA", "4DIV"], ["", "", "", "GUA", "4DIV", "4DIV", "4A"], ["", "", "4B", "", "4DIV", "4DIV", "4A"], ["4B", "4DIV", "", "", "", "", ""]];
    arrHorarios[10] = [["4C", "GUA", "2FPA", "GUA", "2FPA", "1FPA", "1FPA"], ["4D", "1FPA", "GUA", "", "GUA", "1FPA", "1FPA"], ["", "", "", "", "", "", "4C"], ["4D", "2B", "", "", "", "", ""], ["4C", "", "4D", "", "2FPA", "2FPA", "4C"]];
    arrHorarios[11] = [["", "2BaB", "2BaA", "", "ETCP", "1BaB", "1BaA"], ["", "", "", "", "", "1BaB", "1BaA"], ["2BaA", "1BaB", "1BaA", "GUA", "1ºBa", "2BaB", ""], ["", "", "", "", "", "2BaA", "1BaA"], ["", "", "", "", "2BaB", "1BaB", "1ºBa"]];
    arrHorarios[12] = [["", "", "", "", "", "", "2C"], ["", "2C", "2C", "", "GUA", "2B", "2A"], ["2A", "2B", "", "", "", "", ""], ["4AC", "GUA", "3B", "GUA", "2B", "2A", "2C"], ["2A", "GUA", "2A", "", "2B", "2C", "2A"]];
    arrHorarios[13] = [["3C", "3B", "2C", "", "2B", "GUA", ""], ["3C", "2BaB", "3B", "", "", "", ""], ["2BaB", "3D", "", "", "", "", ""], ["2BaB", "3D", "GUA", "", "3D", "GUA", ""], ["2BaB", "3C", "3D", "GUA", "2A", "3B", ""]];
    arrHorarios[14] = [["", "", "", "", "4DIV", "2BaA", "1BaB"], ["", "1º", "2BaB", "GUA", "1BaB", "1BaA", "GUA"], ["", "1º", "4DIV", "", "2BaB", "2BaA", "1BaA"], ["", "", "", "", "1BaA", "2BaB", "1BaB"], ["", "", "", "", "GUA", "1BaA", "2BaA"]];
    arrHorarios[15] = [["GUA", "4AB", "3A", "", "2BaA", "3B", ""], ["3A", "3A", "4AB", "GUA", "2BaA", "", ""], ["3A", "3B", "2BaA", "", "GUA", "", ""], ["3B", "4AB", "GUA", "", "", "", ""], ["3A", "4AB", "2BaA", "", "3B", "", ""]];
    arrHorarios[16] = [["2BaB", "2BaA", "1BaB", "GUA", "ETCP", "", ""], ["", "", "", "", "", "1C", "1BaB"], ["", "", "", "", "", "", "1C"], ["1C", "2BaB", "1BaB", "", "2BaA", "", ""], ["", "", "1BaB", "", "1C", "2BaA", "2BaB"]];
    arrHorarios[17] = [["1B", "4AB", "1C", "", "1A", "", ""], ["1A", "GUA", "4AB", "", "1C", "GUA", ""], ["1C", "", "1A", "", "1B", "", ""], ["1B", "4AB", "1C", "", "", "", ""], ["1A", "4AB", "1B", "GUA", "1A", "GUA", ""]];
    arrHorarios[18] = [["", "", "", "", "", "3C", "3D"], ["", "", "3C", "", "1A", "1B", "3D"], ["", "", "", "", "", "1A", "1B"], ["1A", "3C", "GUA", "", "1B", "3D", ""], ["", "1B", "GUA", "GUA", "3C", "3D", "1A"]];
    arrHorarios[19] = [["", "", "1BaA", "GUA", "1BaB", "2A", "3A"], ["", "", "1BaA", "", "3B", "3D", "3C"], ["", "", "", "", "3D", "2B", "1BaB"], ["", "", "2C", "", "3C", "2B", "3B"], ["GUA", "3A", "GUA", "", "2C", "2A", ""]];
    arrHorarios[20] = [["", "", "", "", "", "", ""], ["2BaA", "2C", "GUA", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""]];
    arrHorarios[21] = [["", "", "", "", "ETCP", "", ""], ["", "", "", "GUA", "", "", ""], ["", "", "", "", "", "", "GUA"], ["", "", "", "", "", "", "4DIV"], ["3DIV", "", "", "", "", "", "GUA"]];
    arrHorarios[22] = [["", "", "4A", "", "3AD", "GUA", "2BaA"], ["", "", "", "", "", "4A", "4ACD"], ["4A", "GUA", "3AD", "GUA", "1BaA", "4ACD", ""], ["", "", "", "", "4ACD", "GUA", "2BaA"], ["", "", "", "", "", "", "1BaA"]];
    arrHorarios[23] = [["4D", "1A", "1B", "", "1C", "", ""], ["4C", "", "", "", "", "", ""], ["1A", "4B", "", "", "", "", ""], ["4B", "1A", "4A", "GUA", "1C", "1B", ""], ["4D", "1C", "4C", "", "4A", "1B", ""]];
    arrHorarios[24] = [["2C", "3A", "2B", "", "", "", ""], ["", "", "", "", "2B", "3B", "2C"], ["2B", "2C", "GUA", "", "2C", "3B", "3A"], ["", "", "", "", "3B", "3A", "GUA"], ["", "2B", "3B", "GUA", "3A", "GUA", "2C"]];
    arrHorarios[25] = [["", "1C", "DIR", "", "4º", "", ""], ["", "", "", "", "", "2BaA", ""], ["", "", "4º", "", "2BaA", "1BaA", ""], ["", "1C", "2BaA", "", "", "", ""], ["", "2BaA", "1C", "", "1BaA", "", ""]];
    arrHorarios[26] = [["", "", "", "", "", "", "1C"], ["2ºBa", "2C", "", "", "", "", ""], ["", "3C", "1B", "", "3A", "GUA", "3D"], ["4AC", "2B", "3B", "", "1A", "1BaB", "GUA"], ["", "", "2A", "GUA", "4B", "1BaA", "4D"]];
    arrHorarios[27] = [["", "GUA", "1BaB", "GUA", "GUA", "2BaB", "2ºBa"], ["", "", "", "", "4B", "2ºBa", "1BaB"], ["", "", "", "", "4B", "1ºBa", "GUA"], ["", "", "1BaB", "", "2BaB", "1BaB", "2ºBa"], ["", "", "1BaB", "", "1ºBa", "2BaB", "4B"]];
    arrHorarios[28] = [["", "", "DIR", "", "ETCP", "", ""], ["", "1BaB", "", "", "", "", ""], ["", "3C", "1BaB", "", "3A", "", ""], ["", "", "", "", "1BaB", "", ""], ["", "1BaB", "", "", "", "", ""]];
    arrHorarios[29] = [["1BaA", "3C", "3B", "GUA", "3º", "", ""], ["GUA", "1BaA", "2BaA", "", "3C", "", ""], ["1BaA", "2BaA", "3º", "", "3C", "GUA", "3B"], ["1BaA", "2BaA", "", "", "", "", ""], ["", "", "", "", "2BaA", "GUA", "3B"]];
    arrHorarios[30] = [["2A", "2º", "4BC", "", "GUA", "2C", "1C"], ["2º", "1ABC", "GUA", "", "2A", "4BC", "2B"], ["4BC", "1ABC", "2A", "GUA", "GUA", "2C", "2B"], ["2B", "2C", "", "", "", "", ""], ["", "", "", "", "", "", "4D"]];
    arrHorarios[31] = [["2B", "1BaA", "2A", "", "", "", ""], ["1BaA", "2A", "2B", "GUA", "", "2C", "GUA"], ["", "", "2C", "", "2B", "2A", "GUA"], ["2C", "1BaA", "2A", "", "", "", ""], ["1BaA", "2C", "2B", "", "", "", ""]];
    arrHorarios[32] = [["1BaB", "2º", "DIR", "", "ETCP", "", ""], ["2º", "1ABC", "1BaB", "", "", "", ""], ["", "1ABC", "", "", "", "", ""], ["1BaB", "", "", "", "", "", ""], ["1BaB", "", "", "", "", "", ""]];
    arrHorarios[33] = [["", "", "4CD", "", "4º", "1BaA", ""], ["2ºBa", "1º", "", "", "1BaA", "4CD", "2ºBa"], ["4CD", "1º", "4º", "GUA", "GUA", "GUA", "2ºBa"], ["", "", "", "", "", "1BaA", ""], ["", "1BaA", "", "", "", "", ""]];
    arrHorarios[34] = [["1BaB", "1BaB", "2BaB", "", "2BaB", "4B", ""], ["1BaB", "4B", "1BaB", "", "2BaB", "", ""], ["1BaB", "2BaB", "2BaB", "", "", "", ""], ["1BaB", "1BaB", "2BaB", "", "4º B", "", ""], ["1BaB", "2BaB", "2BaB", "", "", "", ""]];
    arrHorarios[35] = [["", "", "", "", "4º", "4C", "4A"], ["", "4C", "1C", "GUA", "4A", "", "4B"], ["", "", "4º", "", "4A", "1C", "4B"], ["", "", "", "", "", "4B", "4C"], ["", "", "", "", "4C", "4B", "4A"]];
    arrHorarios[36] = [["3B", "", "", "", "", "", ""], ["3B", "3D", "2BaA", "", "3A", "", ""], ["3D", "2BaA", "", "", "", "", ""], ["3C", "2BaA", "3A", "", "", "", ""], ["3C", "GUA", "GUA", "GUA", "2BaA", "", ""]];
    arrHorarios[37] = [["", "", "", "", "", "2B", "4B"], ["4A", "2B", "2A", "GUA", "2C", "", ""], ["", "4A", "GUA", "", "2A", "4B", "2C"], ["", "", "", "", "2A", "2C", "4B"], ["GUA", "GUA", "4B", "", "4B", "4A", "2B"]];
    arrHorarios[38] = [["", "", "", "", "", "4D", ""], ["", "3B", "3A", "GUA", "4C", "", ""], ["3B", "4D", "GUA", "", "4C", "3A", ""], ["GUA", "3B", "4C", "", "3A", "4D", ""], ["3B", "3B", "3A", "", "4D", "4C", ""]];
    arrHorarios[39] = [["1A", "3DIV", "3DIV", "", "GUA", "3A", "1A"], ["", "", "", "", "", "3DIV", "3DIV"], ["", "", "", "", "1A", "3DIV", "3DIV"], ["3DIV", "3A", "1A", "", "GUA", "3DIV", "1A"], ["", "", "3DIV", "", "GUA", "3A", "3DIV"]];
    arrHorarios[40] = [["", "", "", "", "4º", "2BaB", "4C"], ["", "", "", "", "4D", "2BaB", "2ºBa"], ["", "4C", "4º", "", "4D", "1ºBa", "2ºBa"], ["", "", "", "GUA", "2BaB", "4C", "4D"], ["", "", "", "", "1ºBa", "2BaB", "GUA"]];
    arrHorarios[41] = [["", "4BCD", "DIR", "", "1BaA", "", ""], ["", "", "4BCD", "", "", "", ""], ["", "1BaA", "", "", "", "", ""], ["", "4BCD", "1BaA", "", "", "", ""], ["", "4BCD", "1BaA", "", "", "", ""]];
    arrHorarios[42] = [["", "", "3D", "", "2A", "1A", "3C"], ["", "", "", "", "3D", "2A", "1A"], ["", "", "", "", "", "3C", "1A"], ["2A", "GUA", "3D", "", "GUA", "3C", "3C"], ["", "2A", "3C", "GUA", "3D", "1A", "GUA"]];
    arrHorarios[43] = [["1FPA", "1FPA", "", "", "", "", ""], ["2FPA", "2FPA", "2FPA", "", "2FPA", "", ""], ["1FPA", "1FPA", "1FPA", "", "1FPA", "1FPA", "2FPA"], ["2FPA", "2FPA", "", "", "", "", ""], ["1FPA", "2FPA", "2FPA", "", "", "1FPA", "1FPA"]];
    arrHorarios[44] = [["2FPA", "2FPA", "1FPA", "GUA", "1FPA", "", ""], ["1FPA", "", "", "", "", "", ""], ["2FPA", "2FPA", "", "", "", "", ""], ["1FPA", "1FPA", "2FPA", "", "2FPA", "2FPA", "2FPA"], ["2FPA", "1FPA", "1FPA", "", "1FPA", "", ""]];
    arrHorarios[45] = [["1C", "1B", "2BaB", "", "", "", ""], ["1C", "", "", "", "", "", ""], ["1B", "2BaB", "1C", "GUA", "", "", ""], ["GUA", "1B", "2BaB", "", "", "", ""], ["1C", "2BaB", "", "", "", "", ""]];
    arrHorarios[46] = [["1A", "2º", "4º", "", "3º", "1B", "GUA"], ["2º", "GUA", "1C", "", "1B", "4º", "2ºBa"], ["4º", "GUA", "3º", "GUA", "1ºBa", "1C", "2ºBa"], ["", "", "", "", "", "", "1A"], ["", "", "", "", "", "", "1ºBa"]];
    arrHorarios[47] = [["4A", "3D", "GUA", "", "3º", "4DIV", ""], ["3D", "4DIV", "4DIV", "", "", "", ""], ["GUA", "4DIV", "3DIV", "", "", "", ""], ["", "4DIV", "4DIV", "GUA", "GUA", "4A", ""], ["4A", "3D", "4A", "", "4DIV", "4DIV", ""]];
    arrHorarios[48] = [["", "", "1A", "GUA", "ETCP", "1BaA", "GUA"], ["", "", "", "", "1BaA", "1A", "4A"], ["", "", "", "", "", "4A", "3C"], ["", "", "", "", "4A", "1BaA", "3D"], ["", "1BaA", "1A", "GUA", "GUA", "3C", "3D"]];
    arrHorarios[49] = [["GUA", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["GUA", "", "", "", "", "", ""], ["", "", "", "GUA", "", "", ""], ["GUA", "", "", "", "", "", ""]];
    arrHorarios[50] = [["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["4A", "GUA", "3B", "", "1A", "", ""], ["", "", "", "", "", "", ""]];

    // Carga de ocupación de aulas
    arrOcup[0] = [["Clara", "Fco. I.", "Mario", "", "Lola E.", "Elena", "Pilar"], ["Lola E.", "Rosa A.", "Enriq.B", "", "Ernest", "Mario", "Elena"], ["Fco. I.", "Rosa A.", "Lola E.", "", "Pilar", "Ernest", "Elena"], ["Ernest", "Fco. I.", "Pilar", "", "Cristo", "", "Clara"], ["Lola E.", "Pablo", "Mario", "", "Lola E.", "Elena", "Ernest"]];
    arrOcup[1] = [["Lola E.", "Lola P.", "RosaE", "", "MaríaH", "Clara", "Marisol"], ["Marisol", "Isidoro", "MaríaH", "", "Clara", "Ernest", "RosaE"], ["Lola P.", "Isidoro", "Cristo", "", "Lola E.", "MaríaH", "Ernest"], ["Lola E.", "Lola P.", "Marisol", "", "Ernest", "", "MaríaH"], ["Enriq.B", "Ernest", "Lola E.", "", "", "", "Marisol"]];
    arrOcup[2] = [["Lola P.", "Rocío", "Lola E.", "", "", "MaríaH", "Cristo"], ["Lola P.", "Sara", "Clara", "", "Lola E.", "RosaE", "MaríaH"], ["Lola E.", "Sara", "Lola P.", "", "MaríaH", "Clara", "RosaE"], ["RosaE", "Rocío", "Lola E.", "", "Beatriz", "MaríaH", "Enriq.B"], ["Lola P.", "", "Rocío", "", "RosaE", "", "MaríaH"]];
    arrOcup[3] = [["", "Clara", "Juan C.", "", "Elena", "Rosar", "Pablo"], ["Clara", "Juan C.", "Daniel", "", "Ant. H.", "Elena", "Ricardo"], ["Ricardo", "", "Ant. H.", "", "Daniel", "Juan C.", "Pablo"], ["Elena", "Pablo", "Juan C.", "", "Daniel", "Ricardo", ""], ["Ricardo", "Elena", "Cristo", "", "Salud", "Rosar", "Ricardo"]];
    arrOcup[4] = [["Juan C.", "Isidoro", "Alejan", "", "Salud", "Daniel", ""], ["Isidoro", "Daniel", "Juan C.", "", "Alejan", "Ricardo", "Ant. H."], ["Alejan", "Ricardo", "Pablo", "", "Juan C.", "Isabel", ""], ["Ant. H.", "Cristo", "Pablo", "", "Ricardo", "", "Pablo"], ["Pablo", "Alejan", "Juan C.", "", "Ricardo", "Pablo", "Daniel"]];
    arrOcup[5] = [["Alejan", "", "Salud", "", "", "Ant. H.", "Ricardo"], ["", "Cristo", "Ricardo", "", "Daniel", "Juan C.", "Alejan"], ["Pablo", "Alejan", "Juan C.", "", "Alejan", "Ant. H.", "Daniel"], ["Juan C.", "", "RosaE", "", "Pablo", "Daniel", "Ricardo"], ["", "Juan C.", "Pablo", "", "", "Ricardo", "Alejan"]];
    arrOcup[6] = [["Rosa A.", "Alejan", "Ana D.", "", "Clara", "Pilar", ""], ["Ana D.", "Ana D.", "SoniaM", "", "Álvaro", "Marisol", "Pablo"], ["Ana D.", "Pablo", "Clara", "", "Cristo", "SoniaM", "Alejan"], ["Marisol", "Pilar", "Álvaro", "", "SoniaM", "Alejan", ""], ["Ana D.", "", "SoniaM", "", "Alejan", "Pilar", "Pablo"]];
    arrOcup[7] = [["Álvaro", "Salud", "Úrsula", "", "Rosa A.", "Ana D.", "Rosa A."], ["Álvaro", "SoniaM", "Salud", "", "MaríaH", "Alejan", "Marisol"], ["SoniaM", "Ana D.", "Rosa A.", "", "Pablo", "Alejan", "Úrsula"], ["Ana D.", "SoniaM", "Cristo", "", "Alejan", "Marisol", ""], ["SoniaM", "SoniaM", "Alejan", "", "Ana D.", "Salud", "Úrsula"]];
    arrOcup[8] = [["Salud", "Úrsula", "Norber", "", "", "Ernest", "Elena"], ["Salud", "Norber", "Ernest", "", "Úrsula", "Rosa A.", ""], ["Norber", "Cristo", "", "", "Úrsula", "Elena", "Mario"], ["Álvaro", "Ernest", "Norber", "", "", "Elena", "Elena"], ["Álvaro", "Salud", "Elena", "", "Ernest", "Mario", ""]];
    arrOcup[9] = [["Norber", "Reyes", "Elena", "", "", "Rosa A.", "Ernest"], ["Reyes", "Álvaro", "Fco. I.", "", "Elena", "Pablo", "Ernest"], ["Álvaro", "Salud", "", "", "", "Norber", "Cristo"], ["Norber", "Salud", "Elena", "", "Salud", "Ernest", "Mario"], ["Norber", "Reyes", "Salud", "", "Elena", "Ernest", "Mario"]];
    arrOcup[10] = [["", "Pilar", "Pilar", "", "", "Marisol", ""], ["Fco. I.", "Marisol", "Marisol", "", "Fco. I.", "Pilar", "Pilar"], ["Marisol", "Marisol", "", "", "", "Pilar", "Pilar"], ["Pilar", "Marisol", "Fco. I.", "", "Marisol", "Pilar", ""], ["", "Fco. I.", "Pilar", "", "Marisol", "Marisol", "Pilar"]];
    arrOcup[11] = [["Reyes", "Lola E.", "Clara", "", "Isabel", "Vicen.C.", "Isabel"], ["Daniel", "Vicen.C.", "Lola E.", "", "Isabel", "Clara", "Mario"], ["Clara", "Daniel", "Isabel", "", "Isabel", "Mario", "Vicen.C."], ["Cristo", "Lola E.", "Beatriz", "", "Mario", "Reyes", "Vicen.C."], ["Reyes", "Lola E.", "Reyes", "", "", "Daniel", "Isabel"]];
    arrOcup[12] = [["Vicen.C.", "Ana D.", "Ant. H.", "", "Rocío", "Fco. I.", "Daniel"], ["Vicen.C.", "Fco. I.", "Ana D.", "", "Mª J. G.", "Ant. H.", "Isabel"], ["Ant. H.", "Fco. I.", "Rocío", "", "Mª J. G.", "Daniel", "Isabel"], ["Fco. I.", "Ana D.", "Vicen.C.", "", "Fco. I.", "Isabel", "Daniel"], ["Vicen.C.", "Ana D.", "Daniel", "", "Cristo", "Isabel", "Mª J. G."]];
    arrOcup[13] = [["María O", "José A.", "", "", "Sara", "Isabel", "Rosar"], ["", "Isabel", "José A.", "", "SoniaM", "", "Rosa A."], ["", "Rosar", "Sara", "", "SoniaM", "Rosa A.", "María O"], ["Ricardo", "José A.", "SoniaM", "", "Rosa A.", "Rosar", "Isabel"], ["María O", "José A.", "RosaE", "", "Isabel", "SoniaM", "María O"]];
    arrOcup[14] = [["", "Norber", "", "", "", "SoniaM", "MaríaH"], ["María O", "MaríaH", "Norber", "", "Rosar", "", ""], ["", "SoniaM", "", "", "Rosar", "", "MaríaH"], ["María O", "Norber", "MaríaH", "", "Rosar", "SoniaM", "Rosar"], ["", "Norber", "María O", "", "SoniaM", "MaríaH", "Cristo"]];
    arrOcup[15] = [["Fco. I.", "Vicen.C.", "Fco. I.", "", "Fco. I.", "Reyes", "Vicen.C."], ["Encarn", "Reyes", "Reyes", "", "Vicen.C.", "Rosar", "Vicen.C."], ["", "Reyes", "Fco. I.", "", "Vicen.C.", "Vicen.C.", ""], ["Beatriz", "Reyes", "Reyes", "", "Vicen.C.", "Vicen.C.", "SoniaG"], ["Fco. I.", "Vicen.C.", "Fco. I.", "", "Reyes", "Reyes", ""]];
    arrOcup[16] = [["Úrsula", "Juan C.", "", "", "José A.", "Mario", "Daza"], ["Juan C.", "Úrsula", "", "", "Mario", "Sara", "Daza"], ["Úrsula", "José A.", "Daza", "", "Clara", "Rocío", "Sara"], ["Úrsula", "Juan C.", "José A.", "", "Sara", "Mario", "Daza"], ["Juan C.", "Mario", "José A.", "", "Rocío", "Cristo", "Clara"]];
    arrOcup[17] = [["Isidoro", "Puri", "Mª J. G.", "", "", "Daza", "Sara"], ["Puri", "Balbino", "Isidoro", "", "Sara", "Daza", "Mª J. G."], ["Puri", "Daza", "Balbino", "", "Daza", "Mª J. G.", ""], ["Isidoro", "Puri", "Mª J. G.", "", "Balbino", "Cristo", "Sara"], ["Isidoro", "Balbino", "Mª J. G.", "", "Mª J. G.", "Daza", "Daza"]];
    arrOcup[18] = [["Puri", "RosaE", "Daza", "", "Ana D.", "Sara", ""], ["Luis C.", "Puri", "Úrsula", "", "Ana D.", "Rocío", "Clara"], ["Daza", "Úrsula", "Ana D.", "", "Rocío", "Sara", "Clara"], ["Puri", "Úrsula", "Rocío", "", "RosaE", "Daza", ""], ["Puri", "Rocío", "Ana D.", "", "Úrsula", "RosaE", "Sara"]];
    arrOcup[19] = [["RosaE", "Daza", "Lola P.", "", "Norber", "Mª J. G.", "Mª J. G."], ["Cristo", "Salud", "Sara", "", "Norber", "Mª J. G.", "Rosar"], ["Salud", "Lola P.", "Norber", "", "Sara", "Daza", "Rosar"], ["Salud", "RosaE", "Lola P.", "", "Mª J. G.", "Sara", "Mª J. G."], ["Salud", "Lola P.", "Norber", "", "Daza", "Mª J. G.", "RosaE"]];
    arrOcup[20] = [["Vicen.O.", "Vicen.O.", "Javier", "", "Javier", "María O", "María O"], ["Javier", "María O", "Agui", "", "RosaE", "María O", "María O"], ["Vicen.O.", "Vicen.O.", "Vicen.O.", "", "Vicen.O.", "Vicen.O.", "Agui"], ["Javier", "Javier", "Agui", "", "Agui", "Agui", "Agui"], ["Vicen.O.", "Javier", "Javier", "", "Javier", "Vicen.O.", "Vicen.O."]];
    arrOcup[21] = [["Javier", "Javier", "María O", "", "María O", "Agui", "Agui"], ["Vicen.O.", "Vicen.O.", "Vicen.O.", "", "Vicen.O.", "Agui", "Agui"], ["Javier", "Javier", "Agui", "", "Agui", "Agui", "Vicen.O."], ["Vicen.O.", "Vicen.O.", "Javier", "", "Javier", "Javier", "Javier"], ["Javier", "Vicen.O.", "Vicen.O.", "", "María O", "María O", "Agui"]];
    arrOcup[22] = [["", "", "Inma", "", "Inma", "Inma", ""], ["", "", "Inma", "", "Inma", "Inma", ""], ["", "", "", "", "", "", ""], ["", "", "Inma", "", "Inma", "Inma", ""], ["", "Inma", "", "", "Inma", "Inma", ""]];
    arrOcup[23] = [["Alfred", "Alfred", "Alfred", "", "Alfred", "", "Inma"], ["Alfred", "", "", "", "", "", "Inma"], ["Alfred", "Alfred", "", "", "Inma", "Inma", "Inma"], ["Alfred", "Alfred", "Alfred", "", "Alfred", "Alfred", "Inma"], ["Alfred", "Alfred", "Alfred", "", "Alfred", "Alfred", ""]];
    arrOcup[24] = [["", "", "", "", "Rosar", "", ""], ["", "", "", "", "", "", ""], ["", "", "Rosar", "", "", "Rosar", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "Rosar", "", ""]];
    arrOcup[25] = [["Ant. H.", "Ant. H.", "José L.", "", "Úrsula", "Luis C.", ""], ["Ant. H.", "Ant. H.", "Rosa A.", "", "Luis C.", "José L.", "José L."], ["José L.", "Ant. H.", "Úrsula", "", "Rosa A.", "José L.", "Ant. H."], ["", "Ant. H.", "", "", "José L.", "Luis C.", "Rosa A."], ["", "Luis C.", "", "", "", "", "Rosa A."]];
    arrOcup[26] = [["", "", "", "", "Reyes", "", ""], ["", "", "", "", "", "", ""], ["", "", "Reyes", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""]];
    arrOcup[27] = [["", "", "MaríaC", "", "MaríaC", "MaríaC", "MaríaC"], ["", "Encarn", "", "", "", "MaríaC", "MaríaC"], ["MaríaC", "MaríaC", "", "", "", "", ""], ["", "", "MaríaC", "", "", "MaríaC", "MaríaC"], ["MaríaC", "MaríaC", "", "", "MaríaC", "MaríaC", ""]];
    arrOcup[28] = [["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""]];
    arrOcup[29] = [["", "", "", "", "", "RosaE", "Ant. H."], ["", "Ricardo", "Isabel", "", "", "", ""], ["", "Balbino", "MaríaC", "", "Balbino", "RosaE", "Rosa A."], ["", "María O", "Ricardo", "", "MaríaC", "Mª J. G.", "Pilar"], ["", "", "Ricardo", "", "Daniel", "Sara", "Ant. H."]];
    arrOcup[30] = [["", "Enriq.B", "Enriq.B", "", "Luis C.", "Enriq.B", ""], ["Enriq.B", "", "Álvaro", "", "Enriq.B", "Enriq.B", ""], ["Enriq.B", "Álvaro", "Luis C.", "", "", "", ""], ["", "Álvaro", "", "", "", "Enriq.B", ""], ["", "Enriq.B", "", "", "Álvaro", "", ""]];
    arrOcup[31] = [["", "Rosa A.", "Luis C.", "", "José L.", "", "José L."], ["Rosa A.", "Luis C.", "", "", "", "Luis C.", "Luis C."], ["Luis C.", "Luis C.", "José L.", "", "José L.", "", "Luis C."], ["", "", "", "", "", "", "José L."], ["", "", "", "", "", "", "José L."]];
    arrOcup[32] = [["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""]];
  }



  function obtenDiaYSesionActual() {
    let ahora = new Date();
    diaSemana = ahora.getDay() - 1;
    if (diaSemana == -1) diaSemana = 7;
    let horaActual = ahora.getHours();
    let minutosActual = ahora.getMinutes();
    let minutosActuales = horaActual * 60 + minutosActual;

    if(minutosActuales >= (8 * 60) && minutosActuales < (9 * 60)){
      sesionActual = 0;
    }else if(minutosActuales >= (9 * 60) && minutosActuales < (10 * 60)){
      sesionActual = 1;
    }else if(minutosActuales >= (10 * 60) && minutosActuales < (11 * 60)){
      sesionActual = 2;
    }else if(minutosActuales >= (11 * 60) && minutosActuales < (11 * 60 + 30)){
      sesionActual = 3;
    }else if(minutosActuales >= (11 * 60 + 30) && minutosActuales < (12 * 60 + 30)){
      sesionActual = 4;
    }else if(minutosActuales >= (12 * 60 + 30) && minutosActuales < (13 * 60 + 30)){
      sesionActual = 5;
    }else if(minutosActuales >= (13 * 60 + 30) && minutosActuales < (14 * 60 + 30)){
      sesionActual = 6;
    }else{
      sesionActual = 7;
    }
    // --------------- Fuerza día y sesión actual. Temporal, borrar -------------------
    //sesionActual = 1;
    //diaSemana = 1;
  }


  function pulsaBotonesActuales() {
    if (diaSemana < 5) {
      let btnNav1 = 'btnDia' + diaSemana;
      let botonNav1 = document.getElementById(btnNav1);
      botonNav1.classList.add('pulsado');
    }
    if (sesionActual < 7) {
      let btnNav3 = 'btnSes' + sesionActual;
      let botonNav3 = document.getElementById(btnNav3);
      botonNav3.classList.add('pulsado');
    }
  }


  function actualizaOcupantes() {
    if(sesionActual!=7 && diaSemana < 5){
      // Relleno de ocupantes
      aulaP.forEach((aulaP, index) => {
        aulaP.innerText = arrProf[1][arrAulas[index][diaSemana][sesionActual]];
      });
      // Relleno de grupos
      aulaG.forEach((grupo, index) => {
        numProf = arrAulas[index][diaSemana][sesionActual];
        //console.log(grupo, numProf);
        if (numProf != 0) {
            grupo.innerText = arrHorarios[numProf - 1][diaSemana][sesionActual];
        } else {
          grupo.innerText = '';
        }
      });
    } else {
      // Vaciar el contenido de cada grupo
      aulaP.forEach((aulaP) => {
        aulaP.innerText = ''; // Vaciar el contenido de cada ocupante
      });

      aulaG.forEach((grupo) => {
        grupo.innerText = ''; // Vaciar el contenido de cada grupo
      });
    }
  }





  function estableceEscuchas() {
    aulas.forEach((aula, index) => {
      aula.addEventListener("click", function() {

        if(!soundSwitch.checked){ //el switch está seleccionado para profesores
          numProf = arrAulas[index][diaSemana][sesionActual];
          if(diaSemana < 5 && sesionActual < 7){
            if(numProf != 0) {
              playSound('wetSound');
              showSecondary(numProf);
            }
          }
        } else if (index < 33){ // guardias y recreos no son aulas
          playSound('wetSound');
          showTerciaria(index);
        }
      });
    });
  }


  function restauraBotonera(nav) {
    // Despresiona todos los botones del nav solicitado
    const botones = document.querySelectorAll(`.${nav} button`);
    botones.forEach(boton => {
      boton.classList.remove('pulsado');
    });
  }

  // ---------- Funciones llamadas desde botones --------------------

  function cambiaDia(valor) {
    btnAhora.disabled = false;
    restauraBotonera('nav1');
    const botonClickeado = document.getElementById('btnDia' + valor);
    botonClickeado.classList.add('pulsado');
    diaSemana = valor;
    actualizaOcupantes();
    document.body.style.backgroundColor = "#557cb3";
  }
  
  function cambiaSesion(valor) {
    btnAhora.disabled = false;
    restauraBotonera('nav3');
    const botonClickeado = document.getElementById('btnSes' + valor);
    botonClickeado.classList.add('pulsado');
    sesionActual = valor;
    actualizaOcupantes();
    document.body.style.backgroundColor = "#557cb3";
  }

  function ahora() {
    playSound('wetSound');
    btnAhora.disabled = true;
    obtenDiaYSesionActual();
    restauraBotonera('nav1');
    restauraBotonera('nav3');
    pulsaBotonesActuales();
    actualizaOcupantes();
    document.body.style.backgroundColor = "#444";
  }

  function showListado() {
    // Oculta la interfaz actual y muestra la del listado
    playSound('wetSound');
    document.getElementById('mainInterface').style.display = 'none';
    document.getElementById('secondaryInterface').style.display = 'none';
    document.getElementById('listadoInterface').style.display = 'block';
    document.body.style.width = '100vw';

    // Selecciona el elemento <ul> en el DOM
    const miLista = document.getElementById('miLista');

    // Accedemos a la primera fila del array (índice 0)
    const primeraFila = arrProf[0];
    // Limpia la lista antes de agregar nuevos elementos
    miLista.innerHTML = '';

    primeraFila.slice(1).forEach((elemento, index) => {
        const li = document.createElement('li');
        li.className = "list-item"; // Añade la clase CSS aquí
        li.textContent = elemento;
        // Agrega un evento onclick que llama a showHorario con el índice
        li.onclick = function() {
          playSound('wetSound');
          showSecondary(index + 1);
        };
        miLista.appendChild(li);
    });
  }


    function filtrarLista() {
      // Obtener el valor del input de búsqueda
      let input = document.getElementById('filtroInput');
      let filtro = input.value.toUpperCase(); // Convertir a mayúsculas para evitar problemas de mayúsculas/minúsculas
      let ul = document.getElementById("miLista");
      let li = ul.getElementsByTagName('li');

      // Iterar sobre todos los elementos li de la lista y ocultar los que no coinciden con la búsqueda
      for (let i = 0; i < li.length; i++) {
        let txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filtro) > -1) {
          li[i].style.display = ""; // Mostrar el elemento
        } else {
          li[i].style.display = "none"; // Ocultar el elemento
        }
      }
    }



  function showSecondary(numProf) {
    // Oculta la interfaz actual y muestra la de horarios
    document.getElementById('mainInterface').style.display = 'none';
    document.getElementById('listadoInterface').style.display = 'none';
    document.getElementById('terciariaInterface').style.display = 'none';
    document.getElementById('secondaryInterface').style.display = 'block';
    document.body.style.width = '100vw';


    // Aplica ancho a tabla según dispositivo
    let tabla_horario = document.getElementById('tabla1');
    if (device == "mobile") {
      // Es un móvil
      tabla_horario.style.width = '90vw';
      tabla_horario.style.marginLeft = 'auto';
      tabla_horario.style.marginRight = 'auto';
    } else {
      // Es un pc
      tabla_horario.style.width = '70vh';
      tabla_horario.style.marginLeft = 'auto';
      tabla_horario.style.marginRight = 'auto';
    }
    


    document.getElementById('nombre').innerText = arrProf[0][numProf];

    document.getElementById('lun0').innerText = arrHorarios[numProf - 1][0][0];
    document.getElementById('mar0').innerText = arrHorarios[numProf - 1][1][0];
    document.getElementById('mie0').innerText = arrHorarios[numProf - 1][2][0];
    document.getElementById('jue0').innerText = arrHorarios[numProf - 1][3][0];
    document.getElementById('vie0').innerText = arrHorarios[numProf - 1][4][0];

    document.getElementById('lun1').innerText = arrHorarios[numProf - 1][0][1];
    document.getElementById('mar1').innerText = arrHorarios[numProf - 1][1][1];
    document.getElementById('mie1').innerText = arrHorarios[numProf - 1][2][1];
    document.getElementById('jue1').innerText = arrHorarios[numProf - 1][3][1];
    document.getElementById('vie1').innerText = arrHorarios[numProf - 1][4][1];

    document.getElementById('lun2').innerText = arrHorarios[numProf - 1][0][2];
    document.getElementById('mar2').innerText = arrHorarios[numProf - 1][1][2];
    document.getElementById('mie2').innerText = arrHorarios[numProf - 1][2][2];
    document.getElementById('jue2').innerText = arrHorarios[numProf - 1][3][2];
    document.getElementById('vie2').innerText = arrHorarios[numProf - 1][4][2];

    document.getElementById('lun3').innerText = arrHorarios[numProf - 1][0][3];
    document.getElementById('mar3').innerText = arrHorarios[numProf - 1][1][3];
    document.getElementById('mie3').innerText = arrHorarios[numProf - 1][2][3];
    document.getElementById('jue3').innerText = arrHorarios[numProf - 1][3][3];
    document.getElementById('vie3').innerText = arrHorarios[numProf - 1][4][3];

    document.getElementById('lun4').innerText = arrHorarios[numProf - 1][0][4];
    document.getElementById('mar4').innerText = arrHorarios[numProf - 1][1][4];
    document.getElementById('mie4').innerText = arrHorarios[numProf - 1][2][4];
    document.getElementById('jue4').innerText = arrHorarios[numProf - 1][3][4];
    document.getElementById('vie4').innerText = arrHorarios[numProf - 1][4][4];

    document.getElementById('lun5').innerText = arrHorarios[numProf - 1][0][5];
    document.getElementById('mar5').innerText = arrHorarios[numProf - 1][1][5];
    document.getElementById('mie5').innerText = arrHorarios[numProf - 1][2][5];
    document.getElementById('jue5').innerText = arrHorarios[numProf - 1][3][5];
    document.getElementById('vie5').innerText = arrHorarios[numProf - 1][4][5];

    document.getElementById('lun6').innerText = arrHorarios[numProf - 1][0][6];
    document.getElementById('mar6').innerText = arrHorarios[numProf - 1][1][6];
    document.getElementById('mie6').innerText = arrHorarios[numProf - 1][2][6];
    document.getElementById('jue6').innerText = arrHorarios[numProf - 1][3][6];
    document.getElementById('vie6').innerText = arrHorarios[numProf - 1][4][6];

    marcarCeldasVacias();

    // Identifica el recuadro correspondiente al día y la sesión actuales
    const dias = ['lun', 'mar', 'mie', 'jue', 'vie'];  // Mapear el día de la semana a los IDs en el HTML
    const diaID = dias[diaSemana];  // Obtener el prefijo del día basado en la variable diaSemana
    const recuadroID = diaID + sesionActual;  // Construir el ID del recuadro
    console.log(recuadroID);
    
    // Aplica la animación de parpadeo al recuadro correspondiente
    if(diaSemana < 5 && sesionActual < 7){
      document.getElementById(recuadroID).classList.add('blink');
    }
  }


  function showTerciaria(index) {
    // Oculta la interfaz actual y muestra la de horarios
    document.getElementById('mainInterface').style.display = 'none';
    document.getElementById('listadoInterface').style.display = 'none';
    document.getElementById('secondaryInterface').style.display = 'none';
    document.getElementById('terciariaInterface').style.display = 'block';
    document.body.style.width = '100vw';

    // Aplica ancho a tabla según dispositivo
    let tabla_horario = document.getElementById('tabla2');
    if (device == "mobile") {
      // Es un móvil
      tabla_horario.style.width = '90vw';
      tabla_horario.style.marginLeft = 'auto';
      tabla_horario.style.marginRight = 'auto';
    } else {
      // Es un pc
      tabla_horario.style.width = '70vh';
      tabla_horario.style.marginLeft = 'auto';
      tabla_horario.style.marginRight = 'auto';
    }

    let arrEspacios = [
      '1º A', '1º B', '1º C', 
      '2º A', '2º B', '2º C', 
      '3º A', '3º B', '3º C', '3º D', '3º DIV',
      '4º A', '4º B', '4º C', '4º D', '4º DIV', 
      '1º Bach A', '1º Bach B', '2º Bach A', '2º Bach B', 
      '1º FP', '2º FP', 
      'Polideportivo', 'Patio', 'Teatro', 'Tecnología', 'Laboratorio', 'Música', 
      'Aula de apoyo', 'Biblioteca', 'Aula de plástica', 'Aula TIC', 'Jardinería'
    ];

    document.getElementById('espacio').innerText = arrEspacios[index];

    document.getElementById('lun-0').innerText = arrOcup[index][0][0];
    document.getElementById('mar-0').innerText = arrOcup[index][1][0];
    document.getElementById('mie-0').innerText = arrOcup[index][2][0];
    document.getElementById('jue-0').innerText = arrOcup[index][3][0];
    document.getElementById('vie-0').innerText = arrOcup[index][4][0];

    document.getElementById('lun-1').innerText = arrOcup[index][0][1];
    document.getElementById('mar-1').innerText = arrOcup[index][1][1];
    document.getElementById('mie-1').innerText = arrOcup[index][2][1];
    document.getElementById('jue-1').innerText = arrOcup[index][3][1];
    document.getElementById('vie-1').innerText = arrOcup[index][4][1];

    document.getElementById('lun-2').innerText = arrOcup[index][0][2];
    document.getElementById('mar-2').innerText = arrOcup[index][1][2];
    document.getElementById('mie-2').innerText = arrOcup[index][2][2];
    document.getElementById('jue-2').innerText = arrOcup[index][3][2];
    document.getElementById('vie-2').innerText = arrOcup[index][4][2];

    document.getElementById('lun-3').innerText = arrOcup[index][0][3];
    document.getElementById('mar-3').innerText = arrOcup[index][1][3];
    document.getElementById('mie-3').innerText = arrOcup[index][2][3];
    document.getElementById('jue-3').innerText = arrOcup[index][3][3];
    document.getElementById('vie-3').innerText = arrOcup[index][4][3];

    document.getElementById('lun-4').innerText = arrOcup[index][0][4];
    document.getElementById('mar-4').innerText = arrOcup[index][1][4];
    document.getElementById('mie-4').innerText = arrOcup[index][2][4];
    document.getElementById('jue-4').innerText = arrOcup[index][3][4];
    document.getElementById('vie-4').innerText = arrOcup[index][4][4];

    document.getElementById('lun-5').innerText = arrOcup[index][0][5];
    document.getElementById('mar-5').innerText = arrOcup[index][1][5];
    document.getElementById('mie-5').innerText = arrOcup[index][2][5];
    document.getElementById('jue-5').innerText = arrOcup[index][3][5];
    document.getElementById('vie-5').innerText = arrOcup[index][4][5];

    document.getElementById('lun-6').innerText = arrOcup[index][0][6];
    document.getElementById('mar-6').innerText = arrOcup[index][1][6];
    document.getElementById('mie-6').innerText = arrOcup[index][2][6];
    document.getElementById('jue-6').innerText = arrOcup[index][3][6];
    document.getElementById('vie-6').innerText = arrOcup[index][4][6];

    marcarCeldasVacias();

    // Identifica el recuadro correspondiente al día y la sesión actuales
    const dias = ['lun-', 'mar-', 'mie-', 'jue-', 'vie-'];  // Mapear el día de la semana a los IDs en el HTML
    const diaID = dias[diaSemana];  // Obtener el prefijo del día basado en la variable diaSemana
    const recuadroID = diaID + sesionActual;  // Construir el ID del recuadro
    console.log(recuadroID);
    
    // Aplica la animación de parpadeo al recuadro correspondiente
    if(diaSemana < 5 && sesionActual < 7){
      document.getElementById(recuadroID).classList.add('blink');
    }
  }





  function marcarCeldasVacias() {
    // Selecciona todas las celdas del horario
    const celdas = document.querySelectorAll('.cell');
    // Borra efecto blink de todas las celdas
    celdas.forEach(cell => cell.classList.remove('blink'));
    // Itera sobre cada celda
    celdas.forEach(function(celda) {
      // Si la celda está vacía
      if (celda.innerText.trim() === "") {
        // Agrega la clase 'empty'
        celda.classList.add('gris');
      } else {
        // En caso contrario, quita la clase 'empty' si por alguna razón estaba presente
        celda.classList.remove('gris');
      }
    });
  }

/* function marcarCeldasVacias() {
  // Selecciona todas las celdas del horario
  const celdas = document.querySelectorAll('.cell');

  // Itera sobre cada celda
  celdas.forEach(celda => {
    const isEmpty = celda.innerText.trim() === ""; // Comprueba si la celda está vacía
    celda.classList.toggle('gris', isEmpty); // Añade o quita la clase 'gris'
    celda.classList.remove('blink'); // Borra la clase 'blink' en todas las celdas
  });
} */


  function showMain() {
    // Oculta la interfaz secundaria y muestra la principal
    document.getElementById('listadoInterface').style.display = 'none';
    document.getElementById('secondaryInterface').style.display = 'none';
    document.getElementById('terciariaInterface').style.display = 'none';
    document.getElementById('mainInterface').style.display = 'block';
    document.body.style.width = '117vh';
  }

  function togglePiso() {
      const pisoSuperior = document.getElementById('piso_superior');
      const toggleButton = document.getElementById('toggleButton');
      
      // Verificar si el piso superior está subido o bajado
      if (pisoSuperior.style.marginBottom === '23vh') {
          // Si está subido, lo bajamos
          pisoSuperior.style.marginBottom = '10vh';
          toggleButton.textContent = 'SUBIR';
      } else {
          // Si está bajado, lo subimos
          pisoSuperior.style.marginBottom = '23vh';
          toggleButton.textContent = 'BAJAR';
      }
  }

  // Sonido
  function playSound(sonido) {
    const sound = document.getElementById(sonido);
    sound.play();
  }

  // Sonido para el switch button
  soundSwitch.addEventListener("change", function() {
    var sound = document.getElementById("beep");
    sound.play();
  });



  // Movimiento de paralaje del piso superior
  if (device == "mobile") {
      // Es un dispositivo móvil, ocultamos el toggleButton
      const toggleButton = document.getElementById("toggleButton");
      toggleButton.style.display = "none";
      // Movimiento de paralaje del piso superior
      const pisoSuperior = document.querySelector('#piso_superior');
      window.addEventListener('scroll', () => {
        const desplazHorizontal = window.scrollX;
        // Calcula el desplazamiento vertical basado en el scroll horizontal
        const scaleFactor = 0.0135; // Factor de escala para ajustar la intensidad del movimiento
        const desplazVertical = -desplazHorizontal * scaleFactor; // Movimiento lineal
        pisoSuperior.style.transform = `translate(0vh, ${desplazVertical}vh)`; // Aplica transformación
      });
  } else {
     // Es un PC, no ejecutar el código
  }



  // --------------- MENÚ LATERAL ------------------------------

  // Selecciona el menú y el botón
  var menu = document.getElementById('menu');
  var btnMenu = document.getElementById('btnMenu');
  var mainContent = document.getElementById('mainContent');

  // Añadir un evento de clic al botón para abrir o cerrar el menú
  btnMenu.addEventListener('click', function() {
    event.stopPropagation(); // Detenemos la propagación del clic
    // para que no se confunda con el clic fuera del menú para cerrarlo
    menu.classList.toggle('open'); // Alterna la clase 'open' para mostrar/ocultar el menú
  });

  function cierraMenu() {
    menu.classList.remove('open');
  }
  // Cerrar el menú al hacer clic en cualquier opción del menú
  /* var menuItems = menu.querySelectorAll('li');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      menu.classList.remove('open');
    });
  }); */


  // Detectar clic fuera del menú lateral
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);

    // Si el clic fue fuera del menú y el menú está abierto, lo cerramos
    if (!isClickInsideMenu && menu.classList.contains('open')) {
      playSound('wetSound');
      menu.classList.remove('open');
    }
  });



// --------------- VENTANA MODAL ------------------------------
// Obtener el modal
var modal4 = document.getElementById("modal-incidencias");
var modal5 = document.getElementById("modal-reservas");
var modal6 = document.getElementById("modal-ocupacion");
var modal7 = document.getElementById("modal-mas-acciones");

// Obtener el elemento que abre el modal
var btnIncidencias = document.querySelector("#menu ul li:nth-child(4)");
var btnReservas = document.querySelector("#menu ul li:nth-child(5)");
var btnOcupacion = document.querySelector("#menu ul li:nth-child(6)");
var btnMasAcciones = document.querySelector("#menu ul li:nth-child(7)");

// Abre 'Incidencias TIC'
btnIncidencias.onclick = function() {
  playSound('wetSound');
  modal4.style.display = "block";
}
// Abre 'Reservas'
btnReservas.onclick = function() {
  playSound('wetSound');
  modal5.style.display = "block";
}
// Abre 'Ocupación'
btnOcupacion.onclick = function() {
  playSound('wetSound');
  modal6.style.display = "block";
}
// Abre 'Más acciones'
btnMasAcciones.onclick = function() {
  playSound('wetSound');
  modal7.style.display = "block";
  /*const modalOptions = document.querySelector('.modal-opciones');*/
  /*modalOptions.classList.add('show');*/
}
// Cuando el usuario hace clic en <- se cierra el modal
function cerrarVentana() {
  modal4.style.display = "none";
  modal5.style.display = "none";
  modal6.style.display = "none";
  modal7.style.display = "none";
}
