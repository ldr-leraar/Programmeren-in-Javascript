var autonomieInMijl = 350;
var autonomieInKm = autonomieInMijl * 1.6;
var etappeLengteInKm = 112.34;
var aantalEtappes = 4;

var totaalAfgelegdeAfstandInKm = aantalEtappes * etappeLengteInKm;

var resterendeAfstandInKm = autonomieInKm - totaalAfgelegdeAfstandInKm;
var resterendeBatterijPercentage = (resterendeAfstandInKm / autonomieInKm) * 100;

console.log("Na de vier etappes van elk 112.34 km, blijft er nog " + resterendeAfstandInKm + " kilometer over in de batterij van Freds wagen.");
console.log("Dit komt overeen met " + resterendeBatterijPercentage + "% van de totale batterijcapaciteit.");
