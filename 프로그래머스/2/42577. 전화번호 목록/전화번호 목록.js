function solution(phone_book) {
  const sortedBook = phone_book.sort();

  for (let i = 0; i < sortedBook.length - 1; i++) {
    if (sortedBook[i + 1].startsWith(sortedBook[i])) {
      return false;
    }
  }
  return true;
}