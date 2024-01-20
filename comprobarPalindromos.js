function palindrome(str) {

  let onlyLetters = str.replace(/[^a-z0-9]/gi, '');
  let lowerCaseWord = onlyLetters.toLowerCase();
  let reverseWord = lowerCaseWord.split('').reverse().join('');

  console.log(onlyLetters, lowerCaseWord, reverseWord, lowerCaseWord === reverseWord);

  return lowerCaseWord === reverseWord;
}

palindrome("eye");
palindrome("eYe--2 --123 az -cd");
palindrome("1 eye for of 1 eye.");
palindrome("A man, a plan, a canal. Panama");
palindrome("My age is 0, 0 si ega ym.");