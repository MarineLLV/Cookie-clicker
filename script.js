var target = document.getElementById('target');
var tree = document.getElementById('tree');
var numberClick = parseInt(target.textContent);
var test = false;
var multiplicateur = document.getElementById("multiplicateur");

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
 
  if(numberClick >= 1000){
    appear();
  }

   
  
});

//-------------------------- MULTIPLICATEUR------------------------------------------------------------------------------
// Add another button which will act as a multiplier. When called this button will permanently multiply the number of points per click, by two for example.

// multiplier le nombre de points par le nombre de clique

//multiplier score par nbre de click, nous avonc choisi 2



  multiplicateur.addEventListener('click', () => {


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
   //if (numberClick > 5000) {setInterval(function () {document.getElementById("wateringCan").click() ;},1) ;3000} ;
   function clikk (){
     document.getElementById("wateringCan").click();
   }
   if (numberClick > 5000){
   
      const cliqueAutomatique = setInterval(clikk, 5000 );
      //numberClick = numberClick+cliqueAutomatique;
  }




// -------------------------BONUS------------------------------------------
// boost le score par 200 pour cent 





