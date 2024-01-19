function convertToRoman(num) {

  let strNum = num.toString().split('').toReversed()
  console.log(strNum);

  let arrMultipli = [1, 10, 100, 1000];
  let baseRomaneNums = [1, 4, 5, 9];

  let objRomaneNumbers = {
    1: 'I', 
    4: 'IV', 
    5: 'V', 
    9: 'IX', 
    10: 'X', 
    40: 'LX', 
    50: 'L', 
    90: 'XC', 
    100: 'C', 
    400: 'CD', 
    500: 'D', 
    900: 'CM', 
    1000: 'M'
  };

  let transformNaturalToRomane = (num, multipli) => {
    let numToTransform = num * multipli;
    
    let romaneNum = 'foo';
    for(let x=0; x<baseRomaneNums.length; x++){
    
      let baseToCompare = (baseRomaneNums[x] * multipli);

      if(numToTransform == baseToCompare){
        romaneNum = objRomaneNumbers[baseToCompare];
        break;
      } else{
        
        if(numToTransform < baseToCompare){
          romaneNum = objRomaneNumbers[baseToCompare];
          break;
        }
      }
    };

    return romaneNum;
  };

  strNum.forEach((elem, i) => {

    let response = transformNaturalToRomane(elem, arrMultipli[i]);
    console.log(response);
  });

  return num;
}
 
convertToRoman(36);
convertToRoman(399);
// convertToRoman(4000);