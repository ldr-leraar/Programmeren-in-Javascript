var capaciteitTank = 50; // in kubieke meter
var straal = 1.25; // in meter

var volume = capaciteitTank; // het huidige volume van de tank
var lengte = volume / (3.14 * straal * straal); // bereken de lengte

console.log('De lengte van de tankwagen is ' + lengte.toFixed(2) + ' meter.');
