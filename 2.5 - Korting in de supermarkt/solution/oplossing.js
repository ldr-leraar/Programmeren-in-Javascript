var prijsFrisdrank = 0.89;
var aantalFrisdrank = 6;
var kortingFrisdrank = 0.90;

var prijsCroissant = 0.35;
var aantalCroissant = 10;
var kortingCroissant = 0.80;

var prijsBananenPerKg = 2.99;
var gewichtBananen = 0.7;
var kortingBananen = 0.67;

var totaalFrisdrank = prijsFrisdrank * aantalFrisdrank * kortingFrisdrank;
var totaalCroissant = prijsCroissant * aantalCroissant * kortingCroissant;
var totaalBananen = prijsBananenPerKg * gewichtBananen * kortingBananen;

var totaalPrijs = totaalFrisdrank + totaalCroissant + totaalBananen;

console.log("Fred moet in totaal " + totaalPrijs + " euro betalen aan de kassa.");
