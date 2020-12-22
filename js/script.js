/*Inizializzo la var "boxIngredienti" associandola al div di class ingredient-box, del DOM, che racchiude gli input, di tipo checkbox, relativi agli ingredienti. Richiamando l'elemento del DOM col class name dovrò riportare in coda all'istruzione
l'indice relativo alla classe richiamata, pur essendo, oltre che la prima (e quindi con indice pari a zero), l'unica nel DOM*/
// var boxIngredienti = document.getElementsByClassName('ingredient-box')[0];
//In alternativa, meglio sostituire la class con l'id?
var corpoIngredienti = document.getElementById('ingredient-box');
/*Vado ora ad assegnare una variabile che vada arichiamare gli input contenuti nella classe ingredient-box.
Lo facco attraverso il TagName che restituisce una collection di valori(input in questo caso)*/
var ingredienti = corpoIngredienti.getElementsByTagName('input');
/*A questo punto potrò navigare, attraverso un ciclo for, questa collection di valori come fosse un array.
Questo, certamente, mi torna utile nel momento del controllo sul numero minimo necessario (pari a due) di checkbox spuntate; conditio sine
qua non, assieme alla validazione sul nome inserito dall'utente per il suo hamburger, l'evento successivo al click
parta.
A tal proposito inserirò una variabile contatore, per le checkbox spuntate, e la porrò uguale a 2, come di seguito*/
var counterCheck = 2;
