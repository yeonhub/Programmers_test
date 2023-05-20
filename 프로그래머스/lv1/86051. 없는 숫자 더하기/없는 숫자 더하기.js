function solution(numbers) {
  let missingSum = 45;
  for (let i = 0; i < numbers.length; i++) {
    missingSum -= numbers[i]; 
  }
  
  return missingSum;
}
