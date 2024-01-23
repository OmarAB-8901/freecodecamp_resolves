function convertToRoman(num) {

  // let strNum = num.toString().split('').toReversed();
  
  let arrMultipli = [1, 10, 100];
  // let baseRomaneNums = [1, 4, 5, 9];

  let objRomaneNumbers = {
    '1': 'I', 
    '4': 'IV', 
    '5': 'V', 
    '9': 'IX', 
    '10': 'X', 
    '40': 'XL', 
    '50': 'L', 
    '90': 'XC', 
    '100': 'C', 
    '400': 'CD', 
    '500': 'D', 
    '900': 'CM', 
    '1000': 'M'
  };

  let transformNaturalToRomane = (num, multipli) => {
   
    // let numToTransform = num * multipli;
    let numToTransform = num;

    let romaneNum = 'foo';

    if(numToTransform == (1 * multipli)){
      romaneNum = objRomaneNumbers[(1 * multipli)];
      return romaneNum;
    } else if(numToTransform > (1 * multipli) && numToTransform < (4 * multipli)){
      romaneNum = objRomaneNumbers[(1 * multipli)].repeat(num);
      return romaneNum;
    } else if(numToTransform == (4 * multipli)){
      romaneNum = objRomaneNumbers[(4 * multipli)];
      return romaneNum;
    } else if(numToTransform == (5 * multipli)){
      romaneNum = objRomaneNumbers[(5 * multipli)];
      return romaneNum;
    } else if(numToTransform > (5 * multipli) && numToTransform < (9 * multipli)){  
      romaneNum = objRomaneNumbers[(5 * multipli)];
      romaneNum += objRomaneNumbers[(1 * multipli)].repeat(num - 5);
      return romaneNum;
    } else if(numToTransform == (9 * multipli)){
      romaneNum = objRomaneNumbers[(9 * multipli)];
    } else if(numToTransform == (10 * multipli)){
      romaneNum = objRomaneNumbers[(10 * multipli)];
      return romaneNum;
    }

    return romaneNum;
  };

  let romaneNumber;

  for(let i=0; i<arrMultipli.length; i++){
    romaneNumber = transformNaturalToRomane(num, arrMultipli[i]);

    if(romaneNumber !== 'foo')
      break;
  }

  return romaneNumber;
}
 
for(let i=1; i<=20; i++){
  let response = convertToRoman(i);
  console.log(i, '-', response);
}