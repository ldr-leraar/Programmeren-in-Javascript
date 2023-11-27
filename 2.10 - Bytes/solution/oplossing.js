// Grootte van het bestand in gigabytes
var bestandsgrootteInGB = 6.66;

// Conversie naar verschillende eenheden met factor 1000
var bestandsgrootteInMB = bestandsgrootteInGB * 1000;
var bestandsgrootteInKB = bestandsgrootteInMB * 1000;
var bestandsgrootteInBytes = bestandsgrootteInKB * 1000;
var bestandsgrootteInBits = bestandsgrootteInBytes * 8;

// Afdrukken van de resultaten
console.log(bestandsgrootteinGB,'gigabyte');
console.log(bestandsgrootteinMB,'megabyte');
console.log(bestandsgrootteinKB,'kilobyte');
console.log(bestandsgrootteinBytes,'byte');
console.log(bestandsgrootteinBits,'bits');

