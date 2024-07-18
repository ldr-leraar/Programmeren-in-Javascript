## Voorwaarden combineren

Wanneer we werken met **programmeerconcepten** zoals IF en ELSE IF, maken we gebruik van **voorwaarden**. Wanneer aan de voorwaarde is voldaan, 
dan worden de acties die horen bij die functie uitgevoerd. 

Een voorbeeld van zo een voorwaarde is: 

```
var dag1 = 25.6; 
if (dag1 >= 25) {
	console.log('Je gebruikt best zonnecreme!'); 
}
```

Bij het opstellen van een functie met een voorwaarde, kan je twee of meerdere voorwaarden combineren! Daarvoor gebruik je **&& operator**. 
de twee voorwaarden. 

```
var dag1 = 25.6; 
var dag2 = 30.09
if (dag1 >= 25 && dag2 >= 25) {
	console.log('Je gebruikt best zonnecreme!'); 
}
```

## Gegeven

Tijdens het reizen bezoekt Fred een aantal musea. Hij kan er, doordat hij nog relatief jong is (25 jaar), vrij goedkoop binnen. 

De toegangsprijzen voor een museum: 

```
* volwassene (26 jaar of ouder): 10 euro; 

* Jongvolwassene (18 of ouder, maar jonger dan 26): 4 euro; 

* Jongere (jonger dan 18 jaar): 2 euro ; 


```

<img src="https://images.pexels.com/photos/10845471/pexels-photo-10845471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="50%"/>

{: .callout.callout-info}
> ## Gevraagd
> * Schrijf een algoritme en code waarmee je kan bepalen hoeveel een bezoeker moet betalen; 
> * Test jouw algoritme gronding voor de drie scenario's;
> * Zorg voor een verzorgde volzin bij elke uitkomst;
> * Een correcte volzin in volgend format: `De toegangsprijs is ... euro.`
> * Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om jouw code uit te testen en te debuggen;
> * Dien daarna jouw oplossing in via de Dodona-omgeving. 
