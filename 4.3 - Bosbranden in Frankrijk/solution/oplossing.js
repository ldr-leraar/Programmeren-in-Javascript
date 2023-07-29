var lengte = 329; // in meters
var breedte = 277.32; // in meters
var totaleOppervlakte = 0; // in vierkante meters

for (var dag = 1; dag <= 7; dag++) {
    var dagelijkseOppervlakte = lengte * breedte;
    totaleOppervlakte += dagelijkseOppervlakte;
    console.log('Op dag ' + dag + ' is er ' + totaleOppervlakte + ' vierkante meter bos afgebrand.');
}
