## Gegeven

Doorheen de trip in Frankrijk stelt Fred vast dat de eerste versie van zijn etappelijst niet zo handig is. Bij de eerste versie gebruikte hij een 
**begrensde herhaling** om vijf tussenstops in te vullen. Doorheen de reis maakt hij natuurlijk meer dan vijf stops. De lijst moet eigenlijk blijven lopen
lopen **zolang** hij op reis is. Wanneer hij **thuis** is, mag het programma ophouden. 


Voor de eerste versie gebruikten we: 

```
var lijst_tussenstops = '';
for (var teller = 0; teller < 5; teller++) { 

	var tussenstop = prompt('Voer je tussenstop in'); 
    
    var lijst_tussenstops = lijst_tussenstops + ', ' + tussenstop; 
    
}

```

Fred begon reeds met het ontwerp voor zijn versie 2.0 en noteerde volgende code: 

```
var tussenstop = prompt('Voer je tussenstop in'); 
var lijst_tussenstops = '';
while (tussenstop != 'Thuis') { 
       
}

```



<img src="https://images.pexels.com/photos/2996306/pexels-photo-2996306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="50%"/>

{: .callout.callout-info}
> ## Gevraagd
> * Vul de code van Fred hierboven aan; 
> * Maak gebruik van een **zolang-functie**; 
> * Maak gebruik van de [Papyros-omgeving](https://papyros.dodona.be/?locale=nl&language=JavaScript) om jouw code uit te testen en te debuggen;
> * Dien daarna jouw oplossing in via de Dodona-omgeving. 
