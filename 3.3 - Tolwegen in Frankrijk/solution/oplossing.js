// Definieer het type voertuig
var type = 'Auto met elektrische motor';

// Bepaal het tarief op basis van het type voertuig
if (type == 'Auto met verbrandingsmotor') {
    console.log('Het tarief is 11.60 euro');
} else if (type == 'Auto met elektrische motor') {
    console.log('Het tarief is 8.90 euro');
} else if (type == 'Lichte vracht') {
    console.log('Het tarief is 14.50 euro');
} else if (type == 'Vrachtwagen') {
    console.log('Het tarief is 19.20 euro');
} else {
    console.log('Ongeldig voertuigtype');
}
