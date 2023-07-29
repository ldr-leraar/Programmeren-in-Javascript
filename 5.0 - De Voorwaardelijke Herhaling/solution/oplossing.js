var dag = 0;
var startwaarde = 1000000;
while (startwaarde > 500000) { 
	startwaarde = startwaarde * 0.964;
	dag = dag + 1; 
}
console.log('Na ' + dag + ' dagen zal de helft van het ijs zijn weggesmolten.');
