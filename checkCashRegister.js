function checkCashRegister(price, cash, cid) {

  cid = cid.reverse();

  let returnCash = (cash - price).toFixed(2);
  console.log(returnCash);
  let valueMoney = [
    { name: 'ONE HUNDRED', value: 100 },
    { name: 'TWENTY', value: 20 },
    { name: 'TEN', value: 10 },
    { name: 'FIVE', value: 5 },
    { name: 'ONE', value: 1 },
    { name: 'QUARTER', value: .25 },
    { name: 'DIME', value: .1 },
    { name: 'NICKEL', value: .05 },
    { name: 'PENNY', value: .01 },
  ];

  let valueChange = {};
  let isAllChange = true;
  let i = 0;
  while (isAllChange) {

    let compareTotalSumReturn = valueChange[valueMoney[i].name] == undefined ? 0 : valueChange[valueMoney[i].name];

    if (returnCash >= valueMoney[i].value && compareTotalSumReturn < cid[i][1]) {

      if (valueChange[valueMoney[i].name] == undefined) {
        valueChange[valueMoney[i].name] = valueMoney[i].value;
      } else {
        valueChange[valueMoney[i].name] = Number((valueChange[valueMoney[i].name] + valueMoney[i].value).toFixed(2));
      }

      returnCash = Number((returnCash - valueMoney[i].value).toFixed(2));
      i = 0;
      continue;
    }

    if (returnCash <= 0 || i == (valueMoney.length - 1)) {
      isAllChange = false;
    } else {
      i++;
    }
  }

  console.log(valueChange);

  let cidReturn = { STATUS: "", CHANGE: [] };

  let change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])