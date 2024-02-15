  //ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 10; 
let y = 25;
let numbig;
if (x > y) {
    numbig = x;
} else if ( x < y) {
    numbig = y;
} else {
    numbig = "numeri uguali"
}

console.log (numbig)


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.
  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

//INIZIALIZZO LA VARIABILE PER NON EFFETTUARE IL PRIMO IF
/*do{//CONTROLLO INSERIMENTO UTENTE DEL PRIMO VALORE
   if (!( x >= 0 && x <= 20 )) {//CORREZIONE UTENTE RINCO
      x = prompt("IL VALORE DEVE ESSERE 0 <= X >= 20 !!! :");
   }else{//PRIMA RICHIESTA UTENTE
      x = prompt("Inserire il primo valore (Il valore deve essere 0 <= X >= 20 ):");
      }
}while( !( x >= 0 && x <= 20 ) );//CONDIZIONE PER USCIRE CON IL DATO CORRETTO*/

/* SCRIVI QUI LA TUA RISPOSTA*/

let num = 0
num = prompt("Inserire il  valore:");
if( num < 5 ){
   console.log("Tiny");
}else if( num < 10 ){
    console.log("Small");
}else if( num < 15 ){
    console.log("Medium");
}else if( num < 20 ) {
    console.log("Large");
}else if( num >= 20 ){
    console.log("Huge");
}
 

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA*/

for( let i = 0; i<= 10; i++ ){

   if( i === 3 || i === 8 ){ continue;
   }
   console.log( i );
}


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/
for( let i = 0; i <= 15; i++ ){

   if( ( i % 2) == 0 ){
      console.log( i, " è pari" );
   }else{
      console.log( i, " è dispari" );
   }
} 

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/

let x; let y;
y = prompt("Inserire il primo valore: ");
x = prompt("Inserire il secondo valore: ");

if( (x == 8) || (y == 8) ){
   console.log("Uno o entrambi i valori sono 8");
   if(  (x - y) === 8 || (x + y) === 8 || (y - x) === 8 ){
      console.log("E inoltre, la loro addizione/sottrazione fa 8"); 
   }
}else{
   if( (x - y) === 8 || (x + y) === 8 || (y - x) === 8 ){
      console.log("La loro addizione/sottrazione fa 8");
   }
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/

let totalShoppingCart = 20;
if ( totalShoppingCart > 50 ){
   console.log( "Sconto promozione applicato!(-10$)");
}else{
   totalShoppingCart -= 10;
   console.log( "Costo spedizione 10$");
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/

let totalShoppingCartx = 60;//TOTALE CARRELLO (QUANTO SPENDE TIZIO)
console.log( "Oggi è il Black Friday -20%");
totalShoppingCart -= ( totalShoppingCart * 0.2);//APPLICO - 20% SUL TOTALE
if ( totalShoppingCart > 50 ){//SE RISULTA MINORE 50
   console.log( "Sconto promozione applicato!(-10$)");//NON AUMENTA LA SPESA
}else{
   totalShoppingCart += 10;//AUMENTA LA SPESA
   console.log( "Costo spedizione 10$");
}
console.log(totalShoppingCart)

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA*/

let gender; let ismale = false;
gender = ismale ? "male" : "female";
console.log( gender ); 

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console.
  Se un valore tuttavia è multiplo di 3 (operatore modulo!),stampa al suo posto la parola 
  "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, 
  stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA*/

for (let i = 1; i <= 100 ; i++) {
   if( (i % 3 ) === 0 && (i % 5 ) !== 0){//solo multiplo 3
      console.log("FIZZ");
   }else if( (i % 5 ) === 0 && (i % 3 ) !== 0 ){//solo multiplo 5
      console.log("BUZZ");
   }else if ( (i % 5 ) === 0 && (i % 3 ) === 0 ){//multiplo di entrambi
      console.log("FIZZ BUZZ");
   }else{//non multiplo
      console.log( i );
   }
}