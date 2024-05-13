function checkCashRegister(price, cash, cid) {

  let totalCash_CID = (cid.reduce( (accum, elem) => accum + (elem[1]),  0)).toFixed(2);
  totalCash_CID = Number(totalCash_CID);

  let returnCash = cash - price;

  let valueMoney = [
    {name: 'ONE HUNDRED', value: 100}, 
    {name: 'TWENTY', value: 20}, 
    {name: 'TEN', value: 10}, 
    {name: 'FIVE', value: 5}, 
    {name: 'ONE', value: 1}, 
    {name: 'QUARTER', value: .25}, 
    {name: 'DIME', value: .1}, 
    {name: 'NICKEL', value: .05}, 
    {name: 'PENNY', value: .01}, 
  ];
  // let valueMoney = [.01, .05, .1, .25, 1, 5, 10, 20, 100];

  let cidReturn = { STATUS: "", CHANGE: [] };
  let valueChange = {};
  let isAllChange = true;
  let i = 0;
  while(isAllChange){

    if(returnCash >= valueMoney[i].value){

      // Hay que revisar para hacer un nuevo objecto y agregar al ararya para desupes tratar de sumar los cambios
      if(valueChange[valueMoney[i].name] == undefined)
        valueChange[valueMoney[i].name] = valueMoney[i].value;
      else
        valueChange[valueMoney[i].name] += valueMoney[i].value;

// console.log(valueChange);

      // cidReturn.CHANGE.push( valueChange );

      returnCash -= valueMoney[i].value;
      i=0;
    }

    if(returnCash <= 0)
      isAllChange = false;

      i++;
  }

  console.log(valueChange);

  let change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])