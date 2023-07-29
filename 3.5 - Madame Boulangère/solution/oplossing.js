// Definieer de prijs per taart en daarna het aantal taarten. 
var prijsPerTaart = 29.5;
var aantalTaarten = 5;

// Bereken de totale prijs op basis van het aantal bestelde taarten

if (aantalTaarten == 2) {
    var totalePrijs = aantalTaarten * prijsPerTaart - 5;
} else if (aantalTaarten == 3) {
    var totalePrijs = aantalTaarten * prijsPerTaart * 0.9;
} else if (aantalTaarten >= 4) {
    var totalePrijs = aantalTaarten * prijsPerTaart * 0.68;
} else {
    var totalePrijs = aantalTaarten * prijsPerTaart;
}

// Print de totale prijs naar het scherm in een volzin
console.log("Voor " + aantalTaarten + " taarten betalen ze " + totalePrijs + " euro.");
