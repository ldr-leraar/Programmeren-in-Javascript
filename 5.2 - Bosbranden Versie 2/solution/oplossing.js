var dag = 1; 
var lengte = 329; 
var breedte = 277.32; 
var oppervlakte = lengte * breedte;

while (oppervlakte < 1000000) {
    dag = dag + 1;
    oppervlakte = oppervlakte + (lengte * breedte);
}

console.log("Na " + dag + " dagen is " + oppervlakte + " vierkante meter bos afgebrand. De stad moet geëvacueerd worden." ) 
