## 3.1 - De Selectie Deel 2: De ELSE-functie

In de vorige oefening maakte je kennis met de **IF-functie**. Deze bevat een **voorwaarde** en acties die uitgevoerd worden wanneer aan de **voorwaarde** is voldaan. 
Naast de **IF-functie** kunnen we ook gebruikmaken van de **ELSE-functie**. Wanneer **niet voldaan wordt aan de voorwaarde van de IF-functie**, kan de computer
de acties uitvoeren die horen bij de **else-functie.**

Dat wil dus zeggen dat de **else-functie geen eigen voorwaarde heeft.** 



```
if (voorwaarde WAAR is) { 
actie uitvoeren;
}

else { 
actie uitvoeren;
}
```


## Voorbeeld in Javascript

We bouwden in de vorige oefening een programma dat ons kon vertellen of een getal even of oneven was. Je vindt hieronder de code terug.


```
var getal = X ;
if (getal % 2 == 0  ) { 
console.log('Het getal ' + getal + ' is een even getal.' );
}
```

{: .callout.callout-info}
> ## Gevraagd
> * Pas bovenstaande algoritme aan zodat de computer kan vertellen of een getal even of oneven is;
> * Gebruik slechts 1 **IF-functie**; 
> * Maak gebruik van de **ELSE-functie**
> * Stel variabele getal in op 4 (`var getal = 4`)
> * Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om jouw code uit te testen en te debuggen;
> * Dien daarna jouw oplossing in via de Dodona-omgeving. 
