let stocks = {
  Fruits: ["Strawberry", "grapes", "banana", "apple"],
  liquid: ["Water", "ice"],
  holder: ["Cone", "cup", "stick"],
  toppings: ["Chocolate", "peanuts"],
};
let is_shop_open = true ;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruits have been chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("The machine has started"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`ice cream placed on ${stocks.holder[1]}`)
    );
  })
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  })
  .catch(()=>{
    console.log("Customer is gone")
  })
.finally(()=>{
  console.log("day ended , shop is closed")
})