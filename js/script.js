/*Inizializzo la var "corpoIngredienti" associandola al div di class ingredient-box, del DOM, che racchiude gli input, di tipo checkbox, relativi agli ingredienti. Richiamando l'elemento del DOM col class name dovrò riportare in coda all'istruzione
l'indice relativo alla classe richiamata, pur essendo, oltre che la prima (e quindi con indice pari a zero), l'unica nel DOM*/
// var boxIngredienti = document.getElementsByClassName('ingredient-box')[0];
//In alternativa, meglio sostituire la class con l'id?
var corpoIngredienti = document.getElementById('ingredient-box');
/*Vado ora ad assegnare una variabile che vada a richiamare gli input contenuti nella classe ingredient-box.
Lo faccio attraverso il TagName che restituisce una collection di valori(input in questo caso)*/
var ingredienti = corpoIngredienti.getElementsByTagName('input');
/*A questo punto potrò navigare, attraverso un ciclo for, questa collection di valori come fosse un array.
Questo, certamente, mi torna utile nel momento del controllo sul numero minimo necessario (pari a due) di checkbox spuntate; conditio sine
qua non, assieme alla validazione sul nome inserito dall'utente per il suo hamburger, l'evento successivo al click
parta.
A tal proposito inserirò una variabile (che di fatto è una costante) per il numero min di checkbox spuntate, ed un contatore che aggiorni
di volta in volta il numero di quelle spuntate*/
var sogliaMinCheck = 2;
var checkedIngredients = 0;
// assegno una variabile relativa al costo dell' hamburger con valore di default.
// var hamCost = 4;
/*A questo costo andrà sommato quello di ogni singolo ingrediente aggiunto. Quindi anche il conteggio sul costo
globale del panino andrà fatto all'interno del ciclo for*/

//Inizializzo var "calcolo" associata al div del footer di id "right" ove andrò a stampare il costo finale dell'hamburger
var calcolo = document.getElementById('right');

/*SNIPPET: document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});*/
document.getElementById('calculate').addEventListener('click', function() {
/*N.B.: Occorre che il contatore relativo al numero di ingredienti spuntati eviti di conteggiare anche eventuali cambi di scelta delle checkbox spuntate che
possono esser causa di conseguenti validazioni errate. Pertanto è necessario assegnare alla variabile checkedIngredient valore pari a zero all'interno
dell'event listener.*/
checkedIngredients = 0;
var hamCost = 4;
for (var i = 0; i < ingredienti.length; i++) {
  if (ingredienti[i].checked) {
    checkedIngredients++;
    hamCost += parseInt(ingredienti[i].value);
  }



}
if (checkedIngredients < sogliaMinCheck) {
  alert('devi selezionare un numero di ingredienti almeno pari a ' +  sogliaMinCheck);
} else {
  calcolo.innerText = hamCost;
  console.log(hamCost);
}
});
