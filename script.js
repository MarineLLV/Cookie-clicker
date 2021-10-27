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
var valMultipplcateur = document.getElementById("valMulti");
var autoClickbtn = document.getElementById("autoclickbtn");

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
affichprixmulti.innerText = prixMulti;
//affichage  de la valeur de multiplication ds le bouton
valMultipplcateur.innerText = localStorage.getItem("clicks");

multiplicateur.addEventListener("click", () => {
  palier = palier * 2;
  prixMulti = prixMulti * 2;
  localStorage.setItem("prixMultiCookie", prixMulti);
  //afficher nouveau prix ds bouton
  affichprixmulti.innerText = localStorage.setItem(
    "prixMultiCookie",
    prixMulti
  );

  localStorage.setItem("palierCookie", palier);

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

var palierAuto =
  localStorage.getItem("palierAutoCookie") == null
    ? 500
    : localStorage.getItem("palierAutoCookie");

var autoclick = 1;
// écrit dans le html le resultat du nbre de click Auto
wateringCansOwned.innerText = numberClickAuto;

var btnAutoOff =
  localStorage.getItem("btnAutoOffCookiee") == null
    ? 0
    : localStorage.getItem("btnAutoOffCookiee");

function clikauto() {
  numberClick = parseInt(numberClick) + parseInt(autoclick);
  target.innerText = numberClick;
}

document.getElementById("autoclickbtn").addEventListener("click", () => {
  // implémente numberClickAuto à chaque click
  wateringCansOwned.innerText = ++numberClickAuto;
  // crée un cookie numberAuto par rapport aux nombres de click
  localStorage.setItem("numberAuto", numberClickAuto);

  localStorage.setItem("palierAutoCookie", palierAuto);

  var setInterval1 = setInterval(clikauto, 1000); // clique tte les 1 sec}
  btnAutoOff = 1;
  localStorage.setItem("btnAutoOffCookiee", btnAutoOff);
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

if (numberClick) {
  appear(compteAReb); // on doit encore chjoisir condition pour avoir ce Bonus

  bees.addEventListener("click", function () {
    //  nombre de clique fois 2, 200%
    var bonus = localStorage.getItem("clicks") * 2;

    var downloadTimer = setInterval(function () {
      timeleft--;

      compteAReb.textContent = timeleft;
      click = bonus;
      target.innerText = numberClick;
      if (timeleft <= 0) {
        click = localStorage.getItem("clicks") / 2;
        console.log(click);

        clearInterval(downloadTimer);
        timeleft = 30;
      } // timer reviens a 30
    }, 1000);
  });
}

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

  if (btnAutoOff == 1) {
    dissappear(autoClickbtn);
  }
  // enregistre toutes les modif par rapport a auto click et autre sur le cookie numberClick!!!
  localStorage.setItem("numberClickCookies", numberClick);
}, 200);

// ----------------------------------------------------------------------------
