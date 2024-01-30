function rot13(str) {

   let decodeMessage = '';
   str.split('').forEach( elem => {

      if(elem.charCodeAt(elem) >= 65 && elem.charCodeAt(elem) <= 90){
         
         let charDecoded = (elem.charCodeAt(elem) - 13);

         if(charDecoded >= 65){
            
            decodeMessage += String.fromCharCode( charDecoded );
         } else {
            charDecoded = 91 - ( 65 - charDecoded);
            decodeMessage += String.fromCharCode( charDecoded );
         }
      } else {
         decodeMessage += elem;
      }
   });

   return decodeMessage;
 }
 
 rot13("SERR PBQR PNZC");
 rot13("SERR CVMMN!");