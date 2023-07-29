var huur = 695;
var waarborg = huur * 3;
var jaren = 5;
var rente = 0.03;

for (var i = 1; i <= jaren; i++) {
    waarborg += waarborg * rente;
    console.log("Na jaar " + i + " is de waarborg gegroeid tot " + waarborg.toFixed(2) + " euro.");
}
