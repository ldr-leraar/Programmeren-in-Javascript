var diepteBalk = 1.5;
var breedteBalk = 11;
var lengteBalk = 20;

var diepteCilinder = 0.6;
var diameterCilinder = 10;
var straalCilinder = diameterCilinder / 2;

// Formule voor het volume van een balk: V = l*b*h
var volumeBalk = diepteBalk * breedteBalk * lengteBalk;

// Formule voor het volume van een cilinder: V = pi*r^2*h
var volumeCilinder = 3.14 * (straalCilinder**2) * diepteCilinder;

var totaalVolume = volumeBalk + volumeCilinder;

console.log("Het totale volume van het zwembad is " + totaalVolume + " kubieke meter.");
