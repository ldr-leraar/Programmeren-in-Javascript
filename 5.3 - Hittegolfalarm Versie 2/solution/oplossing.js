var teller = 0; 

while (teller < 5) { 
    var temperatuur = prompt('Voer de temperatuur in:'); 
    if (temperatuur > 25) {
        teller++;
    } else {
        teller = 0;
    }
}

if (teller >= 5) {
    console.log("Hittegolf!");
} else {
    console.log("Geen hittegolf.");
}
