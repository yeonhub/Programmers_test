function solution(n) {
    var answer = 0;
    let arr = n.toString().split('').map(Number);
    arr.forEach((ele, idx) => {
        answer += arr[idx];
    });
    return answer;
}
