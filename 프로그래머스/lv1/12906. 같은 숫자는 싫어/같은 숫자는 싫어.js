function solution(arr) {
    var answer = [];
    var len = arr.length;
    
    for (var i = 0; i < len; i++) {
        if (arr[i] !== arr[i+1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
