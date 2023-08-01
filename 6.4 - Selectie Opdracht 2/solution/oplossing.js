var a = prompt('Voer een getal in: ');
var b;

if (a > 20) {
    b = a**2 - 2 * a;
} else {
    b = a**2 + 2 * a;
}

console.log('Het resultaat is: ' + b);
