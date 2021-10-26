// Variables

var target = document.getElementById('target');
var tree = document.getElementById('tree');
var numberClick = parseInt(target.textContent);
var test = false;
var multiplicateur = document.getElementById("multiplicateur");
var bees = document.getElementById("bees");
var multiplyOwned = document.getElementById('multiplyOwned');
var beesOwned = document.getElementById('beesOwned');
var prix = document.getElementById('prix');



//Fonction


function dissappear(){
  multiplicateur.disabled = true;
    }

function appear(){
  multiplicateur.disabled = false;
}


//When you click the button, increase the variable storing the score by 1, then display the current score inside the label.
//affichage de 0 au lieu de null


numberClick = localStorage.getItem('numberClickCookies');
target.innerHTML = `plant ${localStorage.getItem('numberClickCookies')} trees`;

if (numberClick === null) {
  target.innerHTML = `plant 0 tree`;
} 

  dissappear();

//---------------------- COMPTEUR DE CLIQUE---------------------------------
tree.addEventListener('click', () => {
  numberClick++;
  localStorage.setItem('numberClickCookies', numberClick);
  target.innerHTML = `plant ${localStorage.getItem('numberClickCookies')} trees`;
 
  if(numberClick >= 100){
    appear();
  } else {
    dissappear();
  }

   
  
});

//-------------------------- MULTIPLICATEUR------------------------------------------------------------------------------
// Add another button which will act as a multiplier. When called this button will permanently multiply the number of points per click, by two for example.

// multiplier le nombre de points par le nombre de clique

//multiplier score par nbre de click, nous avonc choisi 2
var prixMulti = 100;
var numberMulti = localStorage.getItem('numberClickMulti');
multiplyOwned.innerText = numberMulti;

 multiplicateur.addEventListener('click', () => {
 
  multiplyOwned.innerText = ++numberMulti; // injection ds le html de la valeur de nombre de click sur multiplicateur
  localStorage.setItem('numberClickMulti', numberMulti); //// injection ds le cookie de la valeur de nombre de click sur multiplicateur
  //console.log(numberMulti);
  prixMulti = numberMulti*2;
  prix.innerText = prixMulti;

   
  

  
  


if (test == false) {
  numberClick = parseInt(numberClick) - 10;
  test = true;

 // localStorage.setItem('multipliAutorisation',test);

}
    numberClick =parseInt(numberClick) * 2 ;
    target.innerHTML = `plant ${numberClick} trees`;
    // actualisé et enregistré le numberClick dans le cookie
    localStorage.setItem('numberClickCookies', numberClick);
    target.innerHTML = `plant ${localStorage.getItem('numberClickCookies')} trees`;
     
    
  });


 




//------------------------------------ AUTO CLIQUEUR------------------------------------------------------------ 
  // clique automatique tous les  secondes  de 10 cliques
 document.getElementById('wateringCan').addEventListener('click', () =>{
  var num = 0;

   function clikauto () { 
    num++;
    document.getElementById('wateringCan').click;
    console.log('ça marche');
    if(num > 10){
      clearInterval(setInterval1);
      
    }
    
  }

   var setInterval1 = setInterval(clikauto , 500 );// clique tte les 0.5 sec 
  
   
   
  //setTimeout(function(){ alert("Hello"); }, 3000);
 

});



// -------------------------BONUS------------------------------------------
// boost le score par 200 pour cent 
var numberClickBonus = localStorage.getItem("numberBonus") == null? 0 : localStorage.getItem('numberBonus');
bees.addEventListener('click', () => {


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


