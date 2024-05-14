function checkCashRegister(price, cash, cid) {

  let cidReverse = cid.toReversed();
  let returnCash = Number((cash - price).toFixed(2));

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

    if (returnCash >= valueMoney[i].value && compareTotalSumReturn < cidReverse[i][1]) {

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

  valueChange = Object.keys(valueChange).map( elem => [elem, valueChange[elem]] );

  let cidReturn;
  let totalCash_CID = (cid.reduce( (accum, elem) => accum + (elem[1]),  0)).toFixed(2);
  totalCash_CID = Number(totalCash_CID);
  let totalChange = Number( (valueChange.reduce( (accum, elem) => accum + elem[1], 0 )).toFixed(2) );
  let cashToReturn = Number((cash - price).toFixed(2));

  if( totalCash_CID > totalChange && totalChange == cashToReturn ){
    cidReturn = { status: "OPEN", change: valueChange };
  } else if(totalCash_CID == totalChange && totalChange == cashToReturn){
    cidReturn = { status: "CLOSED", change: cid };
  } else {
    cidReturn = { status: "INSUFFICIENT_FUNDS", change: [] };
  }
console.log(cidReturn);
  return cidReturn;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);