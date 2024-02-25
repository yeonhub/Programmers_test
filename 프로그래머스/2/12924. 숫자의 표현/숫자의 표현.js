function solution(n) {
    let answer = 0;
    let start = 1;
    let end = 1;
    let sum = 1;

    while(start <= n/2) {
        if(sum < n) {
            end += 1;
            sum += end;
        } else if(sum >= n) {
            if(sum === n) {
                answer += 1;
            }
            sum -= start;
            start += 1;
        }
    }
    return answer + 1;
}