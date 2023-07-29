// Definieer het aantal personen en het tijdstip
var aantalPersonen = 47276;
var tijdstip = 22;

// Bepaal of het plein moet sluiten en print de beslissing naar het scherm in een volzin
if (aantalPersonen > 40000 || tijdstip >= 23) {
    console.log("Het plein moet sluiten.");
} else {
    console.log("Het plein kan open blijven.");
}
