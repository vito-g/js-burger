/*Inizializzo la var "boxIngredienti" associandola al div di class ingredient-box, del DOM, che racchiude gli input, di tipo checkbox, relativi agli ingredienti. Richiamando l'elemento del DOM col class name dovrò riportare in coda all'istruzione
l'indice relativo alla classe richiamata, pur essendo, oltre che la prima (e quindi con indice pari a zero), l'unica nel DOM*/
// var boxIngredienti =document.getElementsByClassName('ingredient-box')[0];
//In alternativa, meglio sostituire la class con l'id?
var boxIngredienti = document.getElementById('ingredient-box');
