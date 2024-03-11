function solution(s) {
    const nums = s.match(/\d+/g).map(Number);
    const counter = new Map();

    nums.forEach(num => {
        counter.set(num, (counter.get(num) || 0) + 1);
    });

    const sortedNums = [...counter.keys()].sort((a, b) => counter.get(b) - counter.get(a));
    return sortedNums;
}