// Illustrative prices only; Jasmine can replace these with her own pricing.
const flavorPrices = {Apple:1,Berry:2,Citrus:1,Mango:2,Ginger:1,Mint:1,Pineapple:2,Strawberry:2,Blueberry:2,Raspberry:2,Banana:1,Orange:1,Lemon:1,Watermelon:1,Peach:2,Cucumber:1,Carrot:1,Turmeric:1};
const sampleBasePrice = 6;
function sampleBlendPrice(flavors) { return sampleBasePrice + flavors.reduce((sum, name) => sum + (flavorPrices[name] || 0), 0); }
