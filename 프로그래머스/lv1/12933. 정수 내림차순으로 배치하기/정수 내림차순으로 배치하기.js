function solution(n) {
  const digits = String(n).split('');
  const sortedDigits = digits.sort((a, b) => b - a);
  const sortedNumber = parseInt(sortedDigits.join(''), 10);

  return sortedNumber;
}