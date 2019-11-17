function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
    let newN = [];
    for(let i=0; i<nums.length; i++){
      if(nums[i] < 1){
        newN.push(nums[i]);
      }
    }
    return newN;
  }
  

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  //return array of names begin with s
 
 





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
  


function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities=[]
 for ( let i= 0;i<users.length; i++){
  const user=users[i];
  const displayName=user.data.city.displayName;cities.push(displayName);
 }
 return cities;


}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
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
};
