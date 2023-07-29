var tussenstop = prompt('Voer je tussenstop in'); 
var lijst_tussenstops = '';

while (tussenstop != 'Thuis') { 
    lijst_tussenstops = lijst_tussenstops + ', ' + tussenstop; 
    tussenstop = prompt('Voer je volgende tussenstop in');
}

console.log('De tussenstops waren: ' + lijst_tussenstops + '.');
