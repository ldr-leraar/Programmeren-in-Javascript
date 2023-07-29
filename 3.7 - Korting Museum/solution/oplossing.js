// Definieer de leeftijd van de bezoeker
var leeftijd = 25;

// Bepaal de toegangsprijs op basis van de leeftijd
var prijs;
if (leeftijd >= 26) {
    prijs = 10;
} else if (leeftijd >= 18) {
    prijs = 4;
} else {
    prijs = 2;
}

// Print de toegangsprijs naar het scherm in een volzin
console.log("De toegangsprijs is " + prijs + " euro.");
