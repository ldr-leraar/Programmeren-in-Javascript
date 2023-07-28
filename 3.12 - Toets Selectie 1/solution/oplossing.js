// Vraag de leeftijd van de gebruiker
var leeftijd = prompt("Wat is je leeftijd?");

// Controleer de leeftijdscategorie
if (leeftijd < 0 || leeftijd > 122) {
    console.log("Ongeldige leeftijd");
} else if (leeftijd < 18) {
    console.log("Je bent minderjarig");
} else if (leeftijd <= 65) {
    console.log("Je bent volwassen");
} else {
    console.log("Je bent een senior");
}
