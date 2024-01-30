function telephoneCheck(str) {

   let onlyNumbers = str.replace(/[)(-\s^a-z]/gi, '');
console.log(str, '|', onlyNumbers, '|', onlyNumbers.length);

   if(onlyNumbers.length == 10){
      
   } else if(onlyNumbers == 11){
      if(onlyNumbers.at(0) != 1)
         return false;
   }

   let regexOnlyUSA = /[0-9)(-\s]/g
   console.log(str.match(regexOnlyUSA).join(''));

   return false;
 }
 
 let response;
 
 response = telephoneCheck("555-555-5555");
 console.log(response);
 
 response = telephoneCheck("555 555 5555");
 console.log(response);

 response = telephoneCheck("(555) 555 5555");
 console.log(response);

 response = telephoneCheck("1 (555) 555 5555");
 console.log(response);

 response = telephoneCheck("1 (555 555 5555");
 console.log(response);

 response = telephoneCheck("123**&!!asdf#");
 console.log(response);