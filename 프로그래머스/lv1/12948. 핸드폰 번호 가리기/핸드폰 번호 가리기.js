function solution(phone_number) {
  const length = phone_number.length;
  const stars = '*'.repeat(length - 4);
  const lastFourDigits = phone_number.slice(length - 4);
  return stars + lastFourDigits;
}
