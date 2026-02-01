console.log("Hello from the console")
let productname="Herbal Tea"
let costPerUnit=3.50
let basePrice=7.00
let discountRate=0.10
let salesTaxRate=0.05
let fixedMonthlyCosts= 100.00


let discountedPrice= basePrice*(1-discountRate)
let finalPriceWithTax=discountedPrice*(1+salesTaxRate)
let profitPerUnit=finalPriceWithTax-costPerUnit
let breakEvenUnits=Math.ceil(fixedMonthlyCosts/profitPerUnit)
let isProfitablePerUnit=profitPerUnit>0

console.log("Herbal Tea")
console.log("Discounted Price: $" + discountedPrice)
console.log("Final Price with tax: $"+ finalPriceWithTax)
console.log("Profit Per Unit: $"+profitPerUnit)
console.log("Break-Eve units: "+ breakEvenUnits)
console.log("Per-Unit profitability: "+profitPerUnit)