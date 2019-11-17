function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

const firstChar =word.charAt(0).toUpperCase();

const restOfWord=word.slice(1);
const fullWord =firstChar + restOfWord;

return fullWord;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt (0)
   +"." + lastName.charArt(0)
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let VAT = vatRate / 100
  let totalPrice = (VAT * originalPrice) + originalPrice;
  return Math.round(totalPrice * 100) / 100;
} 


function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  
  let sale = reduction/100
  let salePrice=originalPrice-
  (sale * originalPrice)
  return  Math.round(salePrice*100)/100;
}
function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  else if (str.length % 2 === 0) {
    let mid = str.length / 2
    return str.slice(mid - 1, mid + 1)
  } else {
    let newLength = str.length + 1
    // eslint-disable-next-line no-undef
    mid = newLength / 2
    // eslint-disable-next-line no-undef
    return str.slice(mid - 1, mid)
  }
}
      
function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newArr = []
  words.forEach(function (word) {
    // eslint-disable-next-line no-undef
    reversedWord = word.split("").reverse().join("");
    // eslint-disable-next-line no-undef
    newArr.push(reversedWord);
  })
  return newArr;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
    let total = 0
  users.forEach(function (user) {
    const osType = user.type
    if (osType === "Linux") {
      total += 1;
    }
  })
  return total;
}


function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
let sum=0
scores.forEach(function (score){
  sum=sum+score
});
return Math.round((sum/scores.length)*100)/100

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
if (n%3=== 0 && n%5===0){
  return "fizzbuzz"
}else if( n %3 !== 0  && n%5 !==0){
return n
}else if (n% 3===0){
  return "fizz"
}else if (n%5===0){
  return"buzz"
}

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
