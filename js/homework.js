const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const {nameNew, priceNew} = newPotion;
    for (const potion of this.potions) {
    if ([potion.name] === [newPotion.name]) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    } 
      this.potions.push(newPotion);
    

   
  }},
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
console.log(atTheOldToad.getPotions());
//для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })) ;
  //, в масиві potions останнім елементом буде цей об'єкт
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })) ;
  //, в масиві potions останнім елементом буде цей об'єкт
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }) );
  //, масив potions не змінюється
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })) ;
  //, массив potions не змінюється
console.log( atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
//повертає рядок "Error! Potion Dragon breath is already in your inventory!"
console.log( atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
  //, повертає рядок "Error! Potion Stone skin is already in your inventory!"
//Значення властивості atTheOldToad.removePotion - це метод об'єкта
console.log( atTheOldToad.removePotion("Dragon breath"));
  //, у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
console.log( atTheOldToad.removePotion("Speed potion"));
  //, у властивості potions буде масив[{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
console.log( atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
//у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]
console.log( atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]