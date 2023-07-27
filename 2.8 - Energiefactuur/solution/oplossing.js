var vorigeMaandprijs = 44.54;
var huidigeMaandprijs = 68.9;

var totaalDitJaar = huidigeMaandprijs * 12;
var totaalVorigJaar = vorigeMaandprijs * 12;

var verschilInEuro = totaalDitJaar - totaalVorigJaar;

var verschilInPercentage = ((verschilInEuro / totaalVorigJaar) * 100);

console.log("Fred moet dit jaar " + totaalDitJaar + " euro betalen voor de elektriciteit.");
console.log("Dit is " + verschilInEuro + " euro meer dan vorig jaar.");
console.log("In procenten uitgedrukt, is dit een stijging van " + verschilInPercentage + "% ten opzichte van vorig jaar.");
