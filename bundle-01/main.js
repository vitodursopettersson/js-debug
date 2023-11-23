/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/*
-Ciclo a contatore che stampa i numeri maggiori di 5
-Nessun errore di sintassi
-Ciclo infinito
*/


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

/*
-Funzione per controllare se il numero (argomento) è pari
-L'operatore relazionale nell'istruzione condizionale (definizione invece di uguaglianza)
-Return fuori dall'istruzione condizionale
*/

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

/*
-Funzione che ripete i numeri da 1 a 4
-La virgola invece che il punto e virgola
-Minoreuguale nel i < 5
*/

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/*
-Funzione che dovrebbe restituire da un array, i numeri pari
-
-1)L'array potrebbe essere definito fuori dalla funzione e poi richiamata usando un argomento-
 2)Si potrebbe usare const per gli array.
 3)-1 non necessario.
 4)Punto e virgola finale nel ciclo
 5)numbers[i] nella condizione if
 6)Un uguale invece che due nella condizione if
 7) Punto e virgola dopo la condizione if
 
*/