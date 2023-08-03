let stocks = {
  Fruits: ["Strawberry", "grapes", "banana", "apple"],
  liquid: ["Water", "ice"],
  holder: ["Cone", "cup", "stick"],
  toppings: ["Chocolate", "peanuts"],
};
let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};
let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("The machine was started");
          setTimeout(() => {
            console.log(`${stocks.holder[0]} was selected`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was selected`);
              setTimeout(() => {
                console.log("Ice cream is ready to sever");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

// Trigger 👇
order(0, production);
