**5.0 - De Voorwaardelijke Herhaling**

Wanneer we **computationeel denken**, ontleden we een probleem en doen we aan **patroonherkenning**. Een van de patronen die we zo kunnen herkennen is een herhaling. 
Bij het programmeren zijn er twee courante herhalingen: de begrensde en voorwaardelijke herhaling. 

De **Voorwaardelijke Herhaling** is een herhaling waarvan wij, **niet op voorhand**, weten hoeveel keer een of meerdere acties moet worden uitgevoerd. 

**Bijvoorbeeld:**

Door de opwarming van de aarde smelt elke dag zo een 3.6% van het ijs op enkele bergtoppen. Er ligt daar momenteel 1.000.000 kubieke meter ijs. 
Hoeveel dagen tot de helft van ijs is weggesmolten? 

Wanneer we deze oefening ontleden, weten we: 
* Er is een startwaarde, namelijk 1.000.000;  
* Elke dag vermindert deze waarde; 
* We moeten blijven rekenen tot de helft van onze startwaarde overblijft. 

Wanneer we een **voorwaardelijke herhaling** willen gebruiken, maken we gebruik van volgende **syntax:**

```
while (voorwaarde) { 
	actie; 
}

```

```
var dag = 0;
var startwaarde = 1000000;
while (startwaarde > 500000) { 
	startwaarde = startwaarde * 0.964;
	dag = dag + 1; 
}


```



**Gevraagd:**

* Vul bovenstaande code verder aan; 
* Na hoeveel dagen zal de helft van het ijs zijn weggesmolten? 
* Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om jouw code uit te testen en te debuggen;
* Dien daarna jouw oplossing in via de Dodona-omgeving. 
