var bevolking = 295542; // bevolkingsaantal in 2022
var groeipercentage = 3.1; // groeipercentage per jaar

for (var jaar = 1; jaar <= 10; jaar++) {
    bevolking = bevolking * (1 + groeipercentage / 100);
    console.log("In het jaar " + (2022 + jaar) + " is de bevolking van Montpellier gegroeid tot " + Math.round(bevolking) + " inwoners.");
}
