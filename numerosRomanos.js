function convertToRoman(num) {

  let baseRomaneNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let baseNormalNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romaneNum = '';
  let i = 0;
  while(baseNormalNums.length > i && num < 4000){

    if(num >= baseNormalNums[i]){
      romaneNum += baseRomaneNums[i];
      num -= baseNormalNums[i];
    }
    else 
      i++;
  }

  return romaneNum;
}
 
for(let i=3950; i<=4000; i++){
  let response = convertToRoman(i);
  console.log(i, '-', response);
  // console.log(i, '-', response, '\n');
}