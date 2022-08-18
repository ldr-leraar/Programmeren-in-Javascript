**Hittegolf**

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

**Gegeven:**

Tijdens de zomer werd het heel warm. Doorheen Europa sloeg de ene na de andere hittegolf toe. Dat voel je zeker wanneer je kampeert in een tent. 

Wist-je-datje: een hittegolf heeft een definitie. Als daar niet aan voldaan wordt, is er eigenlijk geen sprake van een hittegolf. 

Een vereenvoudigde definitie gaat als volgt: 

**een hittegolf heeft vijf(!) opeenvolgende dagen waarop de temperatuur boven de 25.0 °C gaat.**

Fred verzamelt een aantal metingen uit de kranten en stelt volgende tabel samen: 

<table>
<tr>
<th>Datum</th>
<th>Max.</th>
<th>Datum</th>
<th>Max.
</th></tr>
<tr>
<td>12 juli</td>
<td>24,7&nbsp;°C</td>
<td>9 augustus</td>
<td>26,0&nbsp;°C
</td></tr>
<tr>
<td style="padding-right:1em;"><b>13 juli</b></td>
<td style="padding-right:1em;"><b>25,1&nbsp;°C</b></td>
<td style="padding-right:1em;">10 augustus</td>
<td>24,1&nbsp;°C
</td></tr>
<tr>
<td><b>14 juli</b></td>
<td><b>28,9&nbsp;°C</b></td>
<td>11 augustus</td>
<td>29,4&nbsp;°C
</td></tr>
<tr>
<td><b>15 juli</b></td>
<td><b>31,0&nbsp;°C</b></td>
<td>12 augustus</td>
<td>32,8&nbsp;°C
</td></tr>
<tr>
<td><b>16 juli</b></td>
<td><b>28,6&nbsp;°C</b></td>
<td>13 augustus</td>
<td>34,0&nbsp;°C
</td></tr>
<tr>
<td><b>17 juli</b></td>
<td><b>30,6&nbsp;°C</b></td>
<td>14 augustus</td>
<td>25,5&nbsp;°C
</td></tr>
<tr>
<td><b>18 juli</b></td>
<td><b>32,4&nbsp;°C</b></td>
<td>15 augustus</td>
<td>20,1&nbsp;°C
</td></tr>
<tr>
<td>19 juli</td>
<td>23,0&nbsp;°C</td>
<td>16 augustus</td>
<td>19,0&nbsp;°C
</td></tr></table>


**Gevraagd:**

* Schrijf een algoritme en code waarmee Fred de temperatuur voor vijf dagen kan invoeren; 
* Gebruik de tabel hierboven;  
* Maak gebruik van een **IF-functie met de && operator**; 
* Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om jouw code uit te testen en te debuggen;
* Welke van bovenstaande periodes is geen officiële hittegolf?
* Dien daarna jouw oplossing in via de Dodona-omgeving. 
