// Grootte van het bestand in gigabytes
var bestandsgrootteInGB = 6.66;

// Conversie naar verschillende eenheden met factor 1000
var bestandsgrootteInMB = bestandsgrootteInGB * 1000;
var bestandsgrootteInKB = bestandsgrootteInMB * 1000;
var bestandsgrootteInBytes = bestandsgrootteInKB * 1000;
var bestandsgrootteInBits = bestandsgrootteInBytes * 8;

// Afdrukken van de resultaten
console.log(bestandsgrootteInGB,'gigabyte');
console.log(bestandsgrootteInMB,'megabyte');
console.log(bestandsgrootteInKB,'kilobyte');
console.log(bestandsgrootteInBytes,'byte');
console.log(bestandsgrootteInBits,'bits');
