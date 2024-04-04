function checkCashRegister(price, cash, cid) {

   let change = cash - price;
   let totalCID = cid.reduce((acumm, elem) => elem[1] + acumm, 0);
   totalCID = Number(totalCID.toFixed(2));

   if(totalCID < change)
      return {status: "INSUFFICIENT_FUNDS", change: []};

   // let valueMoney = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
   let valueMoney = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

   let i = 0;
   let returnChange = [];
   while(valueMoney.length > i){

      if(change <= valueMoney[i]){
         returnChange.push(cid[i]);
         change -= valueMoney[i];
      } else {
         i++
      }
   }

console.log(change, totalCID, returnChange);
   return change;
 }
 
 checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);