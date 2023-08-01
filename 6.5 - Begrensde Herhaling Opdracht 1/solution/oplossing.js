var totaal = 0;

for (var i = 0; i < 40; i++) {
    var worp1 = Math.floor(Math.random() * 6) + 1;
    var worp2 = Math.floor(Math.random() * 6) + 1;
    totaal += worp1 + worp2;
}

var gemiddelde = totaal / 40;
console.log('Het gemiddelde van de 40 worpen is: ' + gemiddelde);
