function solution(num, n) {
    var answer = 0;
    num%n===0 ? answer = 1 : answer = 0;
    return answer;
}