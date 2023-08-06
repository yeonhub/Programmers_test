function solution(a, b) {
  function large(x, y) {
    return y === 0 ? x : large(y, x % y);
  }

  function small(x, y) {
    return (x * y) / large(x, y);
  }

  const l1 = large(a, b);
  const l2 = small(a, b);

  return [l1, l2];
}
