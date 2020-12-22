/*Inizializzo la var "boxIngredienti" associandola al div di class ingredient-box, del DOM, che racchiude gli input, di tipo checkbox, relativi agli ingredienti. Richiamando l'elemento del DOM col class name dovrò riportare in coda all'istruzione
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
for (var i = 0; i < ingredienti.length; i++ {
  if (ingredienti[i].checked) {
    checkedIngredients++;
  }
}
if (checkedIngredients < sogliaMinCheck) {
  alert('devi selezionare almeno' +  sogliaMinCheck + 'ingredienti');
}
