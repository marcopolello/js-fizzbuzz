// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero.
 // e per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// scrivo un programma che mi stampa numeri da 1 a 100
var numero = 0;
for (var i = 0; i < 100; i++)
{
  // lista numeri da 1 100
  numero = numero + 1;
  // console.log(numero);

  // numeri multipli sia di 3 che di 5
  if (numero % 3 == 0 && numero % 5 == 0) {
    console.log("FizzBuzz");
    document.write("<p>FizzBuzz</p>");
  } else if (numero % 3 == 0) {
    console.log("Fizz");
    document.write("<p>Fizz</p>");
  } else if (numero % 5 == 0){
    console.log("Buzz");
    document.write("<p>Buzz</p>");
  } else {
    console.log(numero);
    var num = document.createElement("p");
    document.body.appendChild(num);
    num.innerHTML = numero;
  }
}


// multipli di 3 voglio che risultino una stringa
