var totaalScore = 0;

for (var vak = 1; vak <= 6; vak++) {
    var score = prompt('Voer de score in voor vak ' + vak);
    totaalScore += Number(score);
}

var gemiddeldeScore = totaalScore / 6;

if (gemiddeldeScore >= 80) {
    console.log('Grote onderscheiding!');
} else if (gemiddeldeScore >= 70) {
    console.log('Onderscheiding!');
} else if (gemiddeldeScore >= 60) {
    console.log('Voldoende.');
} else if (gemiddeldeScore >= 50) {
    console.log('Nipt, dat moet beter!');
} else {
    console.log('Gezakt ... Wat ging er verkeerd?');
}
