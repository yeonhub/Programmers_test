function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  }

  const sortedArr = arr.slice();
  sortedArr.sort((a, b) => a - b);

  arr.splice(arr.indexOf(sortedArr[0]), 1);

  return arr;
}
