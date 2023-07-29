var lijst_tussenstops = '';
for (var teller = 0; teller < 5; teller++) { 

	var tussenstop = prompt('Voer je tussenstop in'); //Deze vraag zal op het scherm verschijnen! 
    
    var lijst_tussenstops = lijst_tussenstops + ', ' + tussenstop; 
    
}
console.log('Dag mama, ik ben nog steeds op reis in Frankrijk.'); 
console.log('Afgelopen dagen passeerde ik in: ' + lijst_tussenstops + '.'); 