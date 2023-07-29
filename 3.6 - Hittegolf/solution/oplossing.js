// Definieer de temperaturen voor vijf opeenvolgende dagen
var dag1 = 25.1;
var dag2 = 28.9;
var dag3 = 31.0;
var dag4 = 28.6;
var dag5 = 30.6;

// Controleer of er een hittegolf is
if (dag1 > 25.0 && dag2 > 25.0 && dag3 > 25.0 && dag4 > 25.0 && dag5 > 25.0) {
    console.log("Er is een hittegolf.");
} else {
    console.log("Er is geen hittegolf.");
}
