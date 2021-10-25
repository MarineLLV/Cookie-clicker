var target = document.getElementById("target");
var tree = document.getElementById("tree");
var numberClick = parseInt(target.textContent);
var test = false;
var multiplicateur = document.getElementById("multiplicateur");

//When you click the button, increase the variable storing the score by 1, then display the current score inside the label.
//affichage de 0 au lieu de null

numberClick = localStorage.getItem("numberClickCookiess");
target.innerHTML = `plant ${localStorage.getItem("numberClickCookiess")} trees`;

//---------------------- COMPTEUR DE CLIQUE---------------------------------
tree.addEventListener("click", () => {
  numberClick++;
  localStorage.setItem("numberClickCookiess", numberClick);
  target.innerHTML = `plant ${localStorage.getItem(
    "numberClickCookiess"
  )} trees`;
});

//-------------------------- MULTIPLICATEUR------------------------------------------------------------------------------
// Add another button which will act as a multiplier. When called this button will permanently multiply the number of points per click, by two for example.

// multiplier le nombre de points par le nombre de clique

//multiplier score par nbre de click, nous avonc choisi 2

if (numberClick >= 1000) {
  multiplicateur.addEventListener("click", () => {
    numberClick = parseInt(numberClick) * 2;
    target.innerHTML = `plant ${numberClick} trees`;
    // actualisé et enregistré le numberClick dans le cookie
    localStorage.setItem("numberClickCookiess", numberClick);
    target.innerHTML = `plant ${localStorage.getItem(
      "numberClickCookiess"
    )} trees`;

    if (test == false) {
      numberClick = parseInt(numberClick) - 1000;
      test = true;

      //localStorage.setItem('multipliAutorisation',test);
    }
  });
} else {
  multiplicateur.addEventListener("click", () => {
    multiplicateur.setAttribute("disabled");
  });
}

//------------------------------------ AUTO CLIQUEUR------------------------------------------------------------
// clique automatique tous les x secondes

// -------------------------BONUS------------------------------------------
// boost le score par 200 pour cent
