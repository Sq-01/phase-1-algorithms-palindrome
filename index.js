// Write your algorithm here
function isPalindrome(str) {
  // Remove any non-letter characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z]/g, '').toLowerCase();
  
  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("robot")); // Output: false


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("knife"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("non"));
}

module.exports = isPalindrome;
