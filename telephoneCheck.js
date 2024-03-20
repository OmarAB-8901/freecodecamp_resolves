
function telephoneCheck(str) {

   let regexFistValidate = /^[0-9)(-]/g;
   let firstValidate = regexFistValidate.test(str);
   console.log("fist Validate", firstValidate);

   let onlyNumbers = str.replace(/[^0-9]/g, '');
   console.log(str, onlyNumbers, onlyNumbers.length);
   
   let response;
   let regexTelUSA;
   if(onlyNumbers.length == 11){
      
      // regexTelUSA = /^1?[\s-][(0-9)]+[\s-]?[0-9]+[\s-]?[0-9]+/g;
      regexTelUSA = /^1?[(\s-][(0-5)]+[\s-]?[0-9]+[\s-]?[0-9]+|^5+[0-9]/g;
      console.log("IF", regexTelUSA.test(str), str.match(regexTelUSA));
      response = regexTelUSA.test(str);

   } else if(onlyNumbers.length == 10){
      
      // regexTelUSA = /[^( 0-9]+[\s-]?[0-9]+[\s-]?[0-9]+/g;
      regexTelUSA = /[(]?[^( 0-5]+[\s-]?[0-9]+[\s-]?[0-9]+|^5+[0-9]/g;
      console.log("ELSE IF", regexTelUSA.test(str), str.match(regexTelUSA));
      response = regexTelUSA.test(str);
   } else {
      response = false;
   }

   if(str.includes('(') && !str.includes(')') || !str.includes('(') && str.includes(')'))
      response = false;

   return response;
 }
 
 let response;
 
 response = telephoneCheck("(555)555-5555") // true 1
 console.log(response, '\n');
 
 response = telephoneCheck("1(555)555-5555") // true 2
 console.log(response, '\n');
 
 response = telephoneCheck("55 55-55-555-5") // false 3
 console.log(response, '\n');