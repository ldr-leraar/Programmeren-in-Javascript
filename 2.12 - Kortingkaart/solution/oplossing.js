var etenEnDrinken = 102.77; // in euro
var vuilniszakken = 18; // in euro

var totaal = etenEnDrinken + vuilniszakken; // totaal bedrag zonder korting

var korting1 = 100 * 0.05; // 5% korting op de eerste 100 euro
var korting2 = (totaal-100) * 0.075; // 7.5% korting op alles boven de 100 euro

var teBetalen = totaal - korting1 - korting2; // totaal bedrag na korting

console.log('Het totale te betalen bedrag is ' + teBetalen + ' euro.');
