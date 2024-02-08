
( () => {

   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   let size = array.length;
   let previousValue = 0;

   let 

   for(let i=0; i<size; i++){

      previousValue = array[i];
      console.log('Previous Value', previousValue);
      array[i] = array[size-(i+1)];
      console.log('Array[i]', array[i]);
      array[size-(i+1)] = previousValue;
      console.log('Array[size-(i+1)]', array[size-(i+1)], '\n');
   }
   console.log(array);
})();

