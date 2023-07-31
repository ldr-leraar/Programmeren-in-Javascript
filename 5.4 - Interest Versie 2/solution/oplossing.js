var jaar = 0;
var waarborg = 695 * 3;

while (waarborg < 6950) {
    waarborg = waarborg * 1.03;
    jaar++;
}

console.log("Fred moet het geld " + jaar + " jaar op de rekening laten staan totdat er minstens 6950 euro op de rekening staat.");
