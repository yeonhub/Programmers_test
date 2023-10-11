function solution(num_list) {
    var answer = -1; 
    num_list.forEach((ele, idx) => {
        if (ele < 0 && answer === -1) {
            answer = idx; 
        }
    });
    return answer;
}