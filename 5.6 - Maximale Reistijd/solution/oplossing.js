var uur = 0;
var batterij = 100;

while (batterij > 0) {
    batterij = batterij - 17.86;
    uur++;
}

console.log("Fred kan " + uur + " uur rijden met zijn elektrische wagen.");
