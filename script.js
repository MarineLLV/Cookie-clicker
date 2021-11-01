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
// val du multiplicateur
var autoClickbtn = document.getElementById("autoclickbtn");

var afficherpalierBonus = document.getElementById("level2");

var afficherprixDuBonus = document.getElementById("price2");

// ----------------------------Fonction -------------------------------------

function dissappear(element) {
  element.disabled = true;
}

function appear(element) {
  element.disabled = false;
}

dissappear(multiplicateur);
dissappear(autoClickbtn);

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
// Add another button which will act as a multiplier. When called this button will permanently multiply the number of points
// per click, by two for example.

// condition pr que la valeur de prix multi et palier
var level = document.getElementById("level");

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
// affichage du prix de la mutliplication
affichprixmulti.innerText = prixMulti * 2;
// affiche le level du prochain palier
level.innerText = palier;

multiplicateur.addEventListener("click", () => {
  palier = palier * 2;
  prixMulti = prixMulti * 2;
  localStorage.setItem("prixMultiCookie", prixMulti);
  localStorage.setItem("palierCookie", palier);
  //afficher nouveau prix ds bouton
  affichprixmulti.innerText = prixMulti * 2;
  // affiche le level du prochain palier
  level.innerText = palier;

  multiplyOwned.innerText = ++numberMulti; // injection ds le html de la valeur de nombre de click sur multiplicateur
  localStorage.setItem("numberClickMulti", numberMulti); //// injection ds le cookie de la valeur de nombre de click sur multiplicateur

  click = localStorage.getItem("clicks") * 2;
  numberClick = numberClick - prixMulti;
  target.innerText = numberClick;
});

//------------------------------------ AUTO CLIQUEUR------------------------------------------------------------
// clique automatique tous les  secondes  de 10 cliques

// variable nbre de click de l'auto + si null =0 sinon est égal au cookie auto
var price1 = document.getElementById("price1");
var level1 = document.getElementById("level1");
// ------- Cookies de l AUTO CLIQUEUR ---------------------------
var priceAuto =
  localStorage.getItem("priceAutoCookie") == null
    ? 250
    : localStorage.getItem("priceAutoCookie");

var numberClickAuto =
  localStorage.getItem("numberAuto") == null
    ? 0
    : localStorage.getItem("numberAuto");

var palierAuto =
  localStorage.getItem("palierAutoCookie") == null
    ? 500
    : localStorage.getItem("palierAutoCookie");

var btnAutoOff =
  localStorage.getItem("btnAutoOffCookiee") == null
    ? 0
    : localStorage.getItem("btnAutoOffCookiee");

function clikauto() {
  numberClick = parseInt(numberClick) + parseInt(autoclick);
  target.innerText = numberClick;
}

var autoclick = 1;

// écrit dans le html le resultat du nbre de click Auto
wateringCansOwned.innerText = numberClickAuto;
price1.innerText = priceAuto;
level1.innerText = palierAuto;

document.getElementById("autoclickbtn").addEventListener("click", () => {
  localStorage.setItem("priceAutoCookie", "-");
  price1.innerText = localStorage.getItem("priceAutoCookie");
  // implémente numberClickAuto à chaque click
  wateringCansOwned.innerText = ++numberClickAuto;
  // crée un cookie numberAuto par rapport aux nombres de click
  localStorage.setItem("numberAuto", numberClickAuto);

  localStorage.setItem("palierAutoCookie", "-");
  level1.innerText = localStorage.getItem("palierAutoCookie");

  var setInterval1 = setInterval(clikauto, 1000); // clique tte les 1 sec}
  btnAutoOff = 1;
  localStorage.setItem("btnAutoOffCookiee", btnAutoOff);

  numberClick = numberClick - 250;
  target.innerText = numberClick;
});

if (btnAutoOff == 1) {
  setInterval1 = setInterval(clikauto, 1000);
}
// -------------------------BONUS------------------------------------------
var bonus =
  localStorage.getItem("bonus") == null ? 1 : localStorage.getItem("bonus");

var compteAReb = document.getElementById("compteAReb");

var numbee = 0;
var timeleft = 30; // bonus dure 30seco

// Declaration de variable  palierBonus et  si null egal 1000 sinon est égal au cookie auto

var palierBonus =
  localStorage.getItem("palierBonusCookies") == null
    ? 1000
    : localStorage.getItem("palierBonusCookies");

var prixBonus =
  localStorage.getItem("prixBonusCookies") == null
    ? 500
    : localStorage.getItem("prixBonusCookies");

var numberBonus =
  localStorage.getItem("numBonusCookies") == null
    ? 0
    : localStorage.getItem("numBonusCookies");

beesOwned.innerText = numberBonus;
afficherpalierBonus.innerText = palierBonus;
afficherprixDuBonus.innerText = prixBonus;

// on doit encore chjoisir condition pour avoir ce Bonus

// apparition du bouton

bees.addEventListener("click", function () {
  // CREATION DES COOKIES DU NOUVEAU PRIX PALIER ET PRIX DU BONUS-------------------
  // on retire le prix du bonus

  // INCREMENTATION DU PRIX PALIER ET PRIX DU BONUS-------------------
  numberClick = parseInt(numberClick) - parseInt(prixBonus);
  target.innerText = numberClick;

  palierBonus = parseInt(palierBonus) * 2;
  prixBonus = parseInt(prixBonus) * 2;

  localStorage.setItem("prixBonusCookies", prixBonus);
  localStorage.setItem("palierBonusCookies", palierBonus);

  afficherpalierBonus.innerText = palierBonus;
  afficherprixDuBonus.innerText = prixBonus;
  // NOMBRE DE FOIS OU LE BOUTON BONUS A ETE UTILISER
  // creation et incrementation utilisation

  beesOwned.innerText = ++numberBonus; // injection ds le html de la valeur de nombre de click sur multiplicateur
  localStorage.setItem("numBonusCookies", numberBonus);

  //  nombre de clique fois 2, 200%
  var bonus = localStorage.getItem("clicks") * 2;

  // TIMER DE LA PERLMISSION DU BONUS

  var downloadTimer = setInterval(function () {
    timeleft--;

    compteAReb.textContent = timeleft;
    click = bonus;
    target.innerText = numberClick;
    if (timeleft <= 0) {
      click = localStorage.getItem("clicks") / 2;

      clearInterval(downloadTimer);
      timeleft = 30;
    } // timer reviens a 30
  }, 1000);
});

// --------------------------- SetInterval check disabled----------------------

// le setinterval vérifie toutes les 100 mili la condition numerClick par rapport aux paliers et autorise affichage de multiplicateur
var setIntervalCheck = setInterval(() => {
  if (numberClick >= palier) {
    appear(multiplicateur);
  } else {
    dissappear(multiplicateur);
  }

  if (numberClick >= palierAuto) {
    appear(autoClickbtn);
  }

  if (numberClick >= palierBonus) {
    appear(bees);
  } else {
    dissappear(bees);
  }

  if (btnAutoOff == 1) {
    dissappear(autoClickbtn);
  }
  // enregistre toutes les modif par rapport a auto click et autre sur le cookie numberClick!!!
  localStorage.setItem("numberClickCookies", numberClick);
}, 200);

// ----------------------------------------------------------------------------
// animation au click (+1)

if (window.matchMedia("(min-width: 768px)").matches) {
  var co_x = 0;
  document.getElementById("tree").addEventListener("click", function (e) {
    co_x++;
    let elem = document.createElement("div");
    document.body.append(elem);

    elem.setAttribute("id", "x" + co_x);
    document.getElementById("x" + co_x).style.top = e.clientY + "px";
    document.getElementById("x" + co_x).style.left = e.clientX + "px";
    document.getElementById("x" + co_x).style.position = "absolute";
    document.getElementById("x" + co_x).style.width = 60 + "px";
    document.getElementById("x" + co_x).style.height = 60 + "px";
    document.getElementById("x" + co_x).style.color = "white";
    document.getElementById("x" + co_x).style.fontWeight = "bold";
    document.getElementById("x" + co_x).style.pointerEvents = "none";
    document.getElementById("x" + co_x).style.animation =
      "GoUp 2s forwards linear";

    elem.innerHTML = "+ " + parseInt(click);
  });
}

// ---------------------------------------- Reset button ----------------------------------------------------------

var reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  clearInterval("setIntervalCheck");
  localStorage.clear();
  window.location.reload();
});
