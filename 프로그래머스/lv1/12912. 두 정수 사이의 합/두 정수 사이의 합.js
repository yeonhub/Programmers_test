function solution(a, b) {

  const start = Math.min(a, b);
  const end = Math.max(a, b);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}