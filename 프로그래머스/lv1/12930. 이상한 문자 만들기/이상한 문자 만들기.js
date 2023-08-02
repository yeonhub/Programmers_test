function solution(s) {
  const words = s.split(' ');

  const transformedWords = words.map((word) => {
    let transformedWord = '';
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        transformedWord += word[i].toUpperCase();
      } else {
        transformedWord += word[i].toLowerCase();
      }
    }
    return transformedWord;
  });

  return transformedWords.join(' ');
}
