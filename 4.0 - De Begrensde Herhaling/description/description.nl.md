**4.0 - de Begrensde Herhaling**

Wanneer we **computationeel denken**, ontleden we een probleem en doen we aan **patroonherkenning**. Een van de patronen die we zo kunnen herkennen is een herhaling. 
Bij het programmeren zijn er twee courante herhalingen: de begrensde en voorwaardelijke herhaling. 

De **Begrensde Herhaling** is een herhaling waarvan wij, **op voorhand**, precies weten hoeveel keer een of meerdere acties moet worden uitgevoerd. 

**Bijvoorbeeld:**

Bij de lanceren van een raket wordt gewerkt met een countdownteller. Deze telt af van tien naar nul en toont telkens een cijfer op het scherm. 
In plaats van nul verschijnt op het scherm: LANCERING!
Wanneer we deze oefening ontleden, weten we: 
* Er is een teller die begint bij 10; 
* Om van tien tot 0 te gaan, moet tien keer 1 afgetrokken worden van de teller; 
* We weten dus, op voorhand, hoeveel keer we een actie (verminderen teller) moeten herhalen. 

Wanneer we een **begrensde herhaling** willen gebruiken, maken we gebruik van volgende **syntax:**

```
for (var teller = startgetal; teller > eindgetal; teller--) { 
	actie; 
}
//teller++ is gelijk aan teller+1
//teller-- is gelijk aan teller-1
```

```
for (var teller = 10; teller > 0; teller--) { 
	actie; 
}
//teller start bij 10
//zolang teller groter is dan 0
//teller -1
//voer actie(s) uit. 

```



<img src="https://images.pexels.com/photos/41005/rocket-launch-rocket-take-off-soyuz-41005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="50%"/>

**Gevraagd:**

* Schrijf een oplossing waarbij een countdown op het scherm verschijnt; 
* Wanneer de teller nul bereikt, verschijnt het woord 'LANCERING'; 
* Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om jouw code uit te testen en te debuggen;
* Dien daarna jouw oplossing in via de Dodona-omgeving. 