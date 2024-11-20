/** How to find Vowel from String in Javascript? */

function findVowels(str) {
  let vowels = "aeiou";
  str = str.toLowerCase();

  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      res.push(str[i]);
    }
  }
  return res;
}

const result = findVowels("Amankumar");
console.log(result);
