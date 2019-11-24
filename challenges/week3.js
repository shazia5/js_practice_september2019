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
// const num =nums[1];
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
  
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
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
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
