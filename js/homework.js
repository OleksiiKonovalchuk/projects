function getCommonElements(array1, array2) {
  // Change code below this line
  const arrayAfter = [];
  for (const arg of arguments) {
    if (array1.inlcudes(arg)){
      arrayAfter.push(arg);
    }
  }

return arrayAfter;
 // Change code above this line
}
getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);