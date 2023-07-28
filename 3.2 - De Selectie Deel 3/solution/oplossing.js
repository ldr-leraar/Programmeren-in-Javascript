// Vraag het getal van de gebruiker
var getal = prompt("Geef een getal in");

// Controleer of het getal even, oneven of nul is
if (getal == 0) {
    console.log("Het getal is gelijk aan nul");
} else if (getal % 2 == 0) {
    console.log("Het getal is even");
} else {
    console.log("Het getal is oneven");
}
