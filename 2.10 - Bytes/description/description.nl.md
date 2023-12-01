## Gegeven

Fred is bezig met een download tijdens zijn reis, maar de Wi-Fi op de camping is erg traag. Om de tijd te doden besluit hij een stukje code te schrijven. Hij kent de volgende conversies tussen digitale opslageenheden, waarbij 1000 wordt gebruikt in plaats van 1024 voor de berekeningen::


* 1 gigabyte = 1000 megabytes
* 1 megabyte = 1000 kilobytes
* 1 kilobyte = 1000 bytes
* 1 byte = 8 bits

Het bestand dat Fred downloadt is 6.66 gigabyte groot.


<img src="https://miro.medium.com/max/1400/1*L334tY40QbIp6CYdiyeOVw.jpeg" width="50%"/>

{: .callout.callout-info}
> ## Gevraagd
> Jouw taak is het schrijven van een JavaScript-programma dat de grootte van Freds bestand in bits uitdrukt. Dit programma moet:
> * De grootte van het bestand omrekenen naar bits;
> * De resultaten afdrukken met de console.log-functie; 
> * Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om jouw code uit te testen en te **debuggen**; 
> * Dien daarna jouw code in via de Dodona-omgeving. 


## Tip
Begin jouw code als volgt:

```
// Grootte van het bestand in gigabytes
var bestandsgrootteInGB = 6.66;

// Conversie naar verschillende eenheden met factor 1000
var bestandsgrootteInMB = bestandsgrootteInGB * 1000;
...
...
...
// Afdrukken van de resultaten
console.log(bestandsgrootteInMB, 'megabytes');
... 
```
