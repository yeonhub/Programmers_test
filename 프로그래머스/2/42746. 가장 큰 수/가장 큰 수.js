function solution(numbers) {
    let answer = numbers
        .map(String)
        .sort((a, b) => (b + a) - (a + b))
        .join('');
    if (answer[0] === '0') {
        return '0';
    }

    return answer;
}