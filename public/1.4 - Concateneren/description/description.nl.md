**Gegeven:**

Binnen de IT-diensten van de Stad Gent beschikt men over allerlei databanken. Daarin vind je gegevens terug over jouw naam, geboorteplaats, geboortedatum, adres ... Deze gegevens zijn opgeslagen in **variabelen.** Maar wat zijn **variabelen?**


**Variabele:**

Een **variabele** is een plaats in het geheugen van een computer waar we een stukje data kunnen opslaan. Die data kunnen we gebruiken om berekeningen mee uit te voeren. Elke data kent ook een **datatype** zoals bijvoorbeeld **strings**. Bekijk de code hieronder: 
```
voornaam = 'Robbe'; 
```
Dit lees je als: 

* We herkennen het **datatype** **string** aan de **aanhalingstekens; 
* We slaan de **string** (in dit geval 'Robbe') op in een variabele; 
* We geven die variabele een naam, namelijk **voornaam**. 

Wanneer we later onderstaande code uitvoeren: 
```
console.log(voornaam); 
```
Verschijnt op het scherm de **data** die **opgeslagen** zit in de **variabele voornaam**


**Opgave:** 

Bij de diensten van de Stad Gent vindt men onderstaande code terug: 

```
//We kennen gegevens met datatype string toe aan een variabele: 
voornaam = 'Robbe'; 
familienaam = 'Wulgaert'; 
geboorteplaats = 'Gent'; 
adres = 'Koekoekstraat 77, Melle'; 

//We printen deze gegevens via de console.log-functie naar het scherm:
console.log(voornaam);
console.log(familienaam);
console.log(geboorteplaats);
console.log(adres); 
```
De vier gegevens worden **in sequentie**, een voor een en dus onder elkaar, op het scherm geschreven. 

**Gevraagd:**

We willen deze gegevens in één mooi verzorgde zin op het scherm zien verschijnen door **slechts één console.log-functie te gebruiken**, zoals bijvoorbeeld: 
*Robbe Wulgaert, geboren in Gent, woont in de Koekstraat 77, Gent.* 
*Helmut Lotti, geboren in Gent, woont in de Dorpstraat 13, Sint-Amandsberg.* 

* Schrijf jouw code; 
* Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om jouw code uit te testen en te **debuggen**; 
* Dien daarna jouw code in via de Dodona-omgeving. 


---
Cursus opgesteld door Robbe Wulgaert. 

Meer informatie: www.robbewulgaert.be
