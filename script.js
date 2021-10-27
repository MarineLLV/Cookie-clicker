// --------------------------Variables -------------------------------------

var target = document.getElementById("target1");
var tree = document.getElementById("tree");
var numberClick =
  localStorage.getItem("numberClickCookies") == null
    ? 0
    : localStorage.getItem("numberClickCookies");
var test = false;
var multiplicateur = document.getElementById("multiplicateur");
var bees = document.getElementById("bees");
var multiplyOwned = document.getElementById("multiplyOwned");
var beesOwned = document.getElementById("beesOwned");
var affichprixmulti = document.getElementById("prix");
var wateringCansOwned = document.getElementById("wateringCansOwned");
// valeur de la multiplication
var click =
  localStorage.getItem("clicks") == null ? 1 : localStorage.getItem("clicks");

// ----------------------------Fonction -------------------------------------
dissappear(multiplicateur);

function dissappear(element) {
  element.disabled = true;
}

function appear(element) {
  element.disabled = false;
}

// --------------------------- SetInterval check disabled----------------------

// le setinterval vérifie toutes les 100 mili la condition numerClick par rapport aux paliers et autorise affichage de multiplicateur
var setIntervalCheck = setInterval(() => {
  if (numberClick >= palier) {
    appear(multiplicateur);
  } else {
    dissappear(multiplicateur);
  }
}, 100);

// ----------------------------------------------------------------------------
//When you click the button, increase the variable storing the score by 1, then display the current score inside the label.
//affichage de 0 au lieu de null

target.innerText = numberClick;

//---------------------- COMPTEUR DE CLIQUE---------------------------------
tree.addEventListener("click", () => {
  numberClick = parseInt(numberClick) + parseInt(click);
  target.innerText = numberClick;
  localStorage.setItem("numberClickCookies", numberClick);
  localStorage.setItem("clicks", click);
});

//-------------------------- MULTIPLICATEUR------------------------------------------------------------------------------
// Add another button which will act as a multiplier. When called this button will permanently multiply the number of points per click, by two for example.

// condition pr que la valeur de prix multi et palier
var prixMulti =
  localStorage.getItem("prixMultiCookie") == null
    ? 20
    : localStorage.getItem("prixMultiCookie");
var palier =
  localStorage.getItem("palierCookie") == null
    ? 100
    : localStorage.getItem("palierCookie");
var numberMulti =
  localStorage.getItem("numberClickMulti") == null
    ? 0
    : localStorage.getItem("numberClickMulti");
multiplyOwned.innerText = numberMulti;

multiplicateur.addEventListener("click", () => {
  palier = palier * 2;
  prixMulti = prixMulti * 2;
  localStorage.setItem("palierCookie", palier);
  localStorage.setItem("prixMultiCookie", prixMulti);
  //affichprixmulti.innerText=palier; //afficher nouveau prix ds bouton

  multiplyOwned.innerText = ++numberMulti; // injection ds le html de la valeur de nombre de click sur multiplicateur
  localStorage.setItem("numberClickMulti", numberMulti); //// injection ds le cookie de la valeur de nombre de click sur multiplicateur
  click = localStorage.getItem("clicks") * 2;
  numberClick = numberClick - prixMulti;
  target.innerText = numberClick;
});

//------------------------------------ AUTO CLIQUEUR------------------------------------------------------------
// clique automatique tous les  secondes  de 10 cliques

// variable nbre de click de l'auto + si null =0 sinon est égal au cookie auto
var numberClickAuto =
  localStorage.getItem("numberAuto") == null
    ? 0
    : localStorage.getItem("numberAuto");

// écrit dans le html le resultat du nbre de click Auto
wateringCansOwned.innerText = numberClickAuto;

document.getElementById("wateringCan").addEventListener("click", () => {
  // implémente numberClickAuto à chaque click
  wateringCansOwned.innerText = ++numberClickAuto;
  // crée un cookie numberAuto par rapport aux nombres de click
  localStorage.setItem("numberAuto", numberClickAuto);

  var time = 0;

  function clikauto() {
    time++;
    document.getElementById("wateringCan").click;
    console.log("ça marche");
    if (time > 10) {
      clearInterval(setInterval1);
    }
  }

  var setInterval1 = setInterval(clikauto, 500); // clique tte les 0.5 sec
});

//------------------------------------ AUTO CLIQUEUR------------------------------------------------------------
// clique automatique tous les x secondes

// -------------------------BONUS------------------------------------------
// boost le score par 200 pour cent
// variable nbre de click du bonus + si null =0 sinon est égal au cookie bonus
var numberClickBonus =
  localStorage.getItem("numberBonus") == null
    ? 0
    : localStorage.getItem("numberBonus");
// écrit dans le html le resultat du nbre de click bonus
beesOwned.innerText = numberClickBonus;
bees.addEventListener("click", () => {
  // implémente numberClickBonus à chaque click
  beesOwned.innerText = ++numberClickBonus;
  // crée un cookie numberBonus par rapport aux nombres de click
  localStorage.setItem("numberBonus", numberClickBonus);
  // Condition pour acheter le bonus
  /*if (numberClick > valeur à définir) {
      fait apparaître le bouton
      // Multiplier le nombre de clics par 200%
      numberClick * 2
      // Pendant une durée de 30s
      setinterval
      // Afficher le timer à l'écran
      document.appendchild 
  } else {
      disappear()
  }*/
});

// -----------------------------achat----------------------------------

// Variables Prix a créer qui sera injecter ds le bouton

//le prix sera multiplier par numberMulti  : 1 *numberMulti/10 qd le bouton multiplication se disabled et injecter ds le bouton
// si nbre multi = 30 alors multiprixprix = mutltiprix*nbredeclick et bien bouton disabled. qd nbre muilti est zero multiprix est egal a multiprix
/*
if (numberMulti = 30 ){ prixMulti = numberMulti*numberClick ;dissappear(); }

*/
