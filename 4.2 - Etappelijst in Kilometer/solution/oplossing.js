var totaleAfstand = 0;
for (var ritNummer = 1; ritNummer <= 5; ritNummer++) { 
    var afstand = prompt('Voer de afstand in van rit '); 
    totaleAfstand += afstand; 
}
console.log('De totale afstand die ik heb afgelegd is: ' + totaleAfstand + ' km.'); 
