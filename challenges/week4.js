function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
    let newNumber = [];
    for(let i=0; i<nums.length; i++){
      if(nums[i] < 1){
        newNumber.push(nums[i]);
      }
    }
    return newNumber;
  }
  

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  //return array of names begin with s
  const namesBeginWithS = names.filter(function (character) {
    if (character[0] === char) {
      return true;
    } else {
      return false;
    }
  });
  return namesBeginWithS
}
 
 function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verb=[];
  for (let i= 0; i<words.length; i++){
  const word=words[i];
  const first3Chars = word.slice(0,3);
  if (first3Chars=== "to "){
    verb.push(word);
  }
}
return verbs;
}


function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
 
    let numberIntegers = [];
    nums.forEach(function (eachNums) {
      if (Number.isInteger(eachNums)) {
        numberIntegers.push(eachNums)
      }
    })
    return numberIntegers
  }
  

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities=[]
 for ( let i= 0;i<users.length; i++){
  const user=users[i];
  const displayName=user.data.city.displayName;
  cities.push(displayName);
 }
 return cities;


}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = nums.map(function (num) {
    let squared = Math.sqrt(num)
    let toTwoDecimals = Math.round(squared * 100) / 100
    return toTwoDecimals
  })
  return squareRoots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let specifiedStringSentences = [];
  sentences.forEach(function (sentence) {
    if (sentence.toLowerCase().includes(str)) {
      specifiedStringSentences .push(sentence)
    }
  })
  return specifiedStringSentences
}


function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const largestEdges=[];
for(let i=0;i<triangles.length;i++){
const triangle =triangle[i];
triangle.sort(function (a, b){return b-a
});
const largestEdge=triangle[0]
largestEdges.push(largestEdge);
return largestEdges;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
}
