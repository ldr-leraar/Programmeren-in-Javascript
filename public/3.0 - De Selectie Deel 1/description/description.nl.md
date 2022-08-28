**3 - De Selectie Deel 1: De IF-functie**

Wanneer de computer een stuk code uitvoert, krijgen we steeds een oplossing. Maar we kunnen de code zodanig ontwerpen dat meerdere uitkomsten mogelijk zijn! Hiervoor gebruiken we 
**voorwaarden.** Aan de hand van de **voorwaarden** kan de computer **selecteren** welke stap er gezet moet worden. Daarvoor gebruiken we een **IF-ELSE-functie.**

**IF of ALS aan de voorwaarde wordt voldaan gebeurt het ene, ELSE of ANDERS gebeurt het andere.**


**De Syntax van de IF-Functie:**

Wanneer we een **ALS-functie** of een **IF-functie** willen gebruiken, moeten we daarvoor de correcte syntaxis gebruiken. 
Deze gaat als volgt: 

```
if (voorwaarde WAAR is) { 
actie uitvoeren;
}
```


**Voorbeeld in Javascript:**

We bouwen een programma dat ons kan vertellen of een invoergetal even of oneven is. Daarvoor delen we een getal door twee. Als we een geheel getal uitkomen zonder restwaarde, 
dan hebben we een geheel getal. Wanneer we geïnteresseerd zijn in de restwaarde, maken we gebruik van de **modulodeling** of **%-operator.**


```
var getal = X ;
if (getal % 2 == 0  ) { 
console.log('Het getal ' + getal + ' is een even getal.' );
}
```

**Gevraagd:**
* Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om bovenstaande code uit te testen; 
* Bekijk de code: er wordt gebruik gemaakt van enkelvoudige en dubbele gelijkheidstekens. Deze hebben elk een andere functie, welke? 
* Pas de code aan zodat je oneven getallen kan opsporen;
* Dien daarna jouw aangepaste code, waarmee je oneven getallen kan opsporen, in via de Dodona-omgeving. 