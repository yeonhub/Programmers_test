function solution(numbers) {
    var answer = 0;
    let x=0;
    for(let i=0; i<numbers.length; i++){
        x+=numbers[i];
    }
    answer=x/numbers.length;
    return answer;
}