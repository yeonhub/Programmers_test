function solution(array) {
    var answer = 0;
    array.sort((a, b) => a - b);
    answer = array[array.length/2-0.5]
    return answer;
}