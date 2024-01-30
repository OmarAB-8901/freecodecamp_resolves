function telephoneCheck(str) {

   // let onlyNumbers = str.replace(/[)(-\s^a-z]/gi, '');
   let onlyNumbers = str.replace(/[^0-9]/gi, '');
console.log(str, '|', onlyNumbers, '|', onlyNumbers.length);

   if(onlyNumbers.length > 9 && onlyNumbers.length < 12){

      if(onlyNumbers.length == 11 && onlyNumbers.at(0) != 1)
         return false;

      // let regexOnlyUSA = /[0-9)(-\s]/g;
      let regexOnlyUSA = /[0-9)(-\s]/g;
      // console.log(str.match(regexOnlyUSA));  
      console.log(regexOnlyUSA.test(str));  
   }

   return '0';
 }
 
 let response;
 
 response = telephoneCheck("555-555-5555");
 console.log(response, '\n');
 
 response = telephoneCheck("555 555 5555");
 console.log(response, '\n');

 response = telephoneCheck("(555) 555 5555");
 console.log(response, '\n');

 response = telephoneCheck("1 (555) 555 5555");
 console.log(response, '\n');

 response = telephoneCheck("1 (555 555 5555");
 console.log(response, '\n');

 response = telephoneCheck("123**&!!asdf#");
 console.log(response, '\n');
 response = telephoneCheck("123**&!!#[");
 console.log(response, '\n');