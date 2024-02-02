
function telephoneCheck(str) {

   // str = str.replace(/[^0-9)(]/g, '')
console.log(str);
   // let regexTelUSA = /1[\s-]?[(]?[0-9]+[)]?[\s-]?[0-9]+[\s-]?[0-9]+/g;
   let regexTelUSA = /1[\s-]?[(0-9)]+[\s-]?[0-9]+[\s-]?[0-9]+/g;
console.log(regexTelUSA.test(str), str.match(regexTelUSA));
   return regexTelUSA.test(str);
 }
 
 let response;
 
 response = telephoneCheck("555-555-5555");
 console.log(response, '\n');
 
 response = telephoneCheck("1 555-555-5555");
 console.log(response, '\n');

 response = telephoneCheck("1555-555-5555");
 console.log(response, '\n');
 
//  response = telephoneCheck("555 555 5555");
//  console.log(response, '\n');

//  response = telephoneCheck("(555) 555 5555");
//  console.log(response, '\n');

 response = telephoneCheck("1 (555) 555 5555");
 console.log(response, '\n');

 response = telephoneCheck("2 (555) 555 5555");
 console.log(response, '\n');

 response = telephoneCheck("1 (555 555 5555");
 console.log(response, '\n');

//  response = telephoneCheck("123**&!!asdf#");
//  console.log(response, '\n');

 response = telephoneCheck("-1 (757) 622-7382")
 console.log(response, '\n');

//  response = telephoneCheck("(555)5(55?)-5555");
//  console.log(response, '\n');