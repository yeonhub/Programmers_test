function solution(s, n) {
  const lowerAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const encrypted = s.split('').map(char => {
    if (char === ' ') {
      return ' ';
    } else if (lowerAlphabets.includes(char)) {
      const index = (lowerAlphabets.indexOf(char) + n) % 26;
      return lowerAlphabets[index];
    } else if (upperAlphabets.includes(char)) {
      const index = (upperAlphabets.indexOf(char) + n) % 26;
      return upperAlphabets[index];
    }
    return char;
  });

  return encrypted.join('');
}
