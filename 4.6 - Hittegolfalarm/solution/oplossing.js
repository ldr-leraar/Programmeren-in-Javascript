var alarmTeller = 0;

for (var dag = 1; dag <= 5; dag++) {
    var temperatuur = prompt('Voer de temperatuur in voor dag ' + dag);
    if (temperatuur > 25) {
        alarmTeller++;
    }
}

if (alarmTeller == 5) {
    console.log('Alarm: hittegolf!');
} else {
    console.log('Geen hittegolf.');
}
