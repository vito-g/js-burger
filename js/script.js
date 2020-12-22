// var nomeHamburger = prompt('Dai un nome al tuo hamburger');
// var couponIn = prompt ('Inserisci il tuo coupon');
// var couponPossible = ['pippo', 'paperino', 'pluto'];
// var couponTrovato = false;
// for ( var i = 0; i < couponPossible.length; i++) {
//   if ( couponIn === couponPossible[i]) {
//     couponTrovato = true;
//   }
// }
//
// if ( couponTrovato === true) {
//   console.log('Ti è concesso lo sconto');
// }
// else {
//   console.log('Coupon non valido');
// }

//Rimaniamo in ascolto di un evento click su quel bottone

// -----------
//Salviamo in una variabile il nostro bottone
var btn = document.getElementById('calculate');
//Salviamo in una variabile i nostri add
var add = document.getElementsByClassName('added');


for ( var i = 0; i < add.length; i++) {
    const thisAdd = add[i];
    thisAdd.addEventListener('click', function () {

    }
  );
}


// var nomeHamburger = document.getElementbyId("burger-name").value;
// console.log(nomeHamburger);
