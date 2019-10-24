const TAX_RATA = 0.12;
const THRESHOLD = 7000;
const PHONE_PRICE = 1000;
const ACCESSORIES_PRICE = 10;
let purchasePrice = 0;
function withTaxes(price){
return price * TAX_RATA + price;
}
function formatPrice(price){
return "$" + price;
}
let bank_account=prompt("Enter your bank:");
while(purchasePrice < bank_account){
parseInt(bank_account);
if(purchasePrice > bank_account){
purchasePrice -= withTaxes(PHONE_PRICE)
break;
}
purchasePrice += withTaxes(PHONE_PRICE);
if(purchasePrice < THRESHOLD){
purchasePrice += withTaxes(ACCESSORIES_PRICE);
}
if(purchasePrice > bank_account){
purchasePrice -= withTaxes(PHONE_PRICE);
break;
}
}
console.log(formatPrice(purchasePrice));
//console.log(formatPrice(purchasePrice.toFixed(2)));
