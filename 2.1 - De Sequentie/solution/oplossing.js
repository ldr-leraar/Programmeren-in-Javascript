var prijsPerFles = 3.5;
var aantalFlessen = 4;
var taks = 0.10;

var totalePrijsZonderTaks = prijsPerFles * aantalFlessen;
var totaleTaks = totalePrijsZonderTaks * taks;

var totalePrijsMetTaks = totalePrijsZonderTaks + totaleTaks;

console.log('Totaal te betalen: ' + totalePrijsMetTaks + ' euro.');
