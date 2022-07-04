function isPalindrome(word) {
  // Write your algorithm here
  
  for ( i = 0; i < word.length / 2; i++ {
    
    const j = word.length - 1 - i;
    
    if (word[i] !== word[j]) return false;
  }
  return true;
};

/* 
  Add your pseudocode here
  
  create loop that runs through half the list
  create a reverse loop to that compares each letter from front to back assinged to a new variable
  if statement that compares the orginal loop to the reverse loop
  
  
  
*/
 
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
