
function telephoneCheck(str) {

   let onlyNumbers = str.replace(/[^0-9]/g, '');
   console.log(str, onlyNumbers, onlyNumbers.length);
   
   let response;
   let regexTelUSA;
   if(onlyNumbers.length == 11){
      
      regexTelUSA = /^1?[\s-][(0-9)]+[\s-]?[0-9]+[\s-]?[0-9]+/g;
      console.log(regexTelUSA.test(str), str.match(regexTelUSA));
      response = regexTelUSA.test(str);

   } else if(onlyNumbers.length == 10){
      
      regexTelUSA = /[^( 0-9]+[\s-]?[0-9]+[\s-]?[0-9]+/g;
      console.log(regexTelUSA.test(str), str.match(regexTelUSA));
      response = regexTelUSA.test(str);

   }

   if(str.includes('(') && !str.includes(')') || !str.includes('(') && str.includes(')'))
      response = false;

   return response;
 }
 
 let response;
 
 response = telephoneCheck("1 (555)555-5555");
 console.log(response, '\n');

 response = telephoneCheck("1 555)555-5555");
 console.log(response, '\n');
 
 response = telephoneCheck("(6054756961)");
 console.log(response, '\n');

 response = telephoneCheck("55 5555 5555");
 console.log(response, '\n');