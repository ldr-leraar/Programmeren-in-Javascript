var jaar = 0;
var bevolking = 295542;

while (bevolking < 295542 * 2) {
    bevolking = bevolking * 1.031;
    jaar++;
}

console.log("Het zal " + jaar + " jaar duren voordat de bevolking van de stad verdubbeld is.");
