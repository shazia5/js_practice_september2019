function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
const squaredNums = nums.map
  // eslint-disable-next-line no-unexpected-multiline
  (num=> num * num);
return squaredNums;
}

//3 other ways to solve squared problem using 
//1 for loop
//2 for each 
//map

// const squaredNums=nums.map(function(num){
//   return num*num;
// });
// return squaredNums;
// }
// const squredNums=[]
// for(let i =0;i<length;i=i+1){
// const num =nums[n 1];
// squaredNums.push(squared);
// }
// return squaredNums;
// }

// const squaredNums=[];
// nums.forEach(function(num){
//   const squared=num*num;
//   squaredNums.push(squared);
// });
// return squaredNums;
// }



function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if(words.length > 1){
    for(let i=1; i<words.length;i++){
      let word = words[i];
      let wordUp = word.charAt(0).toUpperCase()+word.slice(1);
      words[i] = wordUp;
    }
  }else{
    return words.join("");
  }
  return words.join("");
}



function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let total = 0;
  people.forEach(function (item) {
    total = total + item.subjects.length;
  })
  return total;
}


function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let foundFoodItem=false;
  menu.forEach(function(menuItem){
    menuItem.ingredients.forEach(function(menuItemIngredient){
    if (menuItemIngredient===
      ingredient){
      foundFoodItem=true;
     }
  });
});
  return foundFoodItem;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let newArr = [];
  for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
      if(arr1[i] === arr2[j]){
        let n = arr1[i];
        if(!newArr.includes(n)){
        newArr.push(n);
        }
      }
    }
  }
  return newArr.sort();
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
