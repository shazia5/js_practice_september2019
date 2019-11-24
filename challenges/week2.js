function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
 const numOfBuses=people/40;
 const isInteger=Number.isInteger(numOfBuses);
 if(isInteger){
 return numOfBuses; 
} else{
  return Math.ceil(numOfBuses);
}
}
// 2nd method
//return Math.ceil(people/40);
function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
 // if city is provided following method 
//  const firstLetter=person.address.postCode[0];return firstLetter==="M" &&person.address.city ==="Manchester" 

//without city
const firstLetter=person.address.postCode[0];
const secondLetter=person.address.postCode[1];
const isAlphabeticCharaccter=isNaN(Number(secondLetetr)}
return firstLetter==="M" && !isAlphabeticCharaccter;

}


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
