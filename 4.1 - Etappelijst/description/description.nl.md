**4.1 - Etappelijst**


**Gegeven:**

Tijdens de rondrit in Frankrijk wil Fred een lijst aanleggen met dorpjes die hij heeft bezocht. Zo kan hij een mooie lijst met aanbevelingen doorgeven 
aan vrienden en familie. Wanneer hij de stops op zijn GPS telt, heeft hij **5 tussentops gemaakt.** Hij wil een oplossing ontwerpen die hem **telkens vraagt naar 
de naam van het dorp.** Deze namen worden opgeslagen. Op het einde moet zijn ideale oplossing een bericht naar huis sturen. 

```
"Dag mama, ik ben nog steeds op reis in Frankrijk."
"Afgelopen dagen passeerde ik in: lijst_tussenstops"

```
**Hoe stel je een vraag aan een gebruiker?**
Fred wil dat de app hem meermaals een vraag stelt, namelijk over de naam van het dorp waar hij halt hield. 
Wanneer niet jij, als ontwikkelaar, een variabele moet invullen maar een gebruiker dat moet doen, werken we met een **prompt-functie**.
De **syntax** van de **prompt-functie** ziet er als volgt uit: 

```
var lijst_tussenstops = '';
for (var teller = 0; teller < 5; teller++) { 

	var tussenstop = prompt('Voer je tussenstop in'); //Deze vraag zal op het scherm verschijnen! 
    
    var lijst_tussenstops = lijst_tussenstops + ', ' + tussenstop; 
    
}

```

Fred hield halt in volgende dorpen: 
* Locronan
* Rochefort-en-Terre
* Saint-Céneri-le-Gérei
* Montrésor
* Pesmes


<img src="https://images.pexels.com/photos/2996306/pexels-photo-2996306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="50%"/>

**Gevraagd:**

* Schrijf een oplossing waarbij de gebruiker de naam van een dorp moet invoeren; 
* Gebruik de code hierboven, maar pas aan waar nodig!; 
* Print het eindresultaat op het scherm en stuur zo een bericht naar de mama van Fred; 
* Een correcte volzin bevat een onderwerp, een werkwoord ...;
* Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om jouw code uit te testen en te debuggen;
* Dien daarna jouw oplossing in via de Dodona-omgeving. 