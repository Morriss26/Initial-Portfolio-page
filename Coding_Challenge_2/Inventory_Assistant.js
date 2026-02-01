let itemName= "Herbal Tea"
let unitCost= 3.50
let currentStock= 200
let reorderLevel= 100
let targetStock= 150
let weeklyDemand=20
let supplierLeadTimeWeeks= 3

let weeksOfCover= weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0,targetStock - currentStock);
let reorderQuantity = (curretStock <= reorderLevel || weeksOfCover <supplierLeadTimeWeeks)? Math.ceil(stockDeficit):0
let estimatedReorderCost = reorderQuantity * unitCost
let reorderNow= currentStock <=reorderLevel || weeksOfCover <supplierLeadTimeWeeks
console.log("Herbal tea", itemName);
console.log("Weeks of cover: ",weeksOfCover);
console.log("Weekly Demand: ",weeklyDemand);
console.log("Reorder Level: ",reorderLevel);
console.log("Stock Deficit: ",stockDeficit);
console.log("Reorder Quantity: ",reorderQuantity);
console.log("Estimated Reorder ",estimatedReorderCost);
console.log("Reorder Now: ", reorderNow);







