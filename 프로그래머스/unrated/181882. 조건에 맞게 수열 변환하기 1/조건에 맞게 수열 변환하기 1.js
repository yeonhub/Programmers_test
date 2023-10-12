function solution(arr) {
    var answer = [];
    arr.forEach(ele => {
        if (ele >= 50 && ele % 2 === 0) {
            answer.push(ele / 2);
        } else if (ele < 50 && ele % 2 === 1) {
            answer.push(ele * 2);
        } else {
            answer.push(ele);
        }
    })
    return answer;
}
