function solution(my_string) {
    var answer = 0;
    let arr = my_string.split('');
    for (let i = 0; i < my_string.length; i++) {
        const num = parseInt(arr[i]);
        if (!isNaN(num)) {
            answer += num;
        }
    }
    return answer;
}