function solution(price, money, count) {
    var answer = -1;
    let tp=0;
    for (let i=1; i<=count; i++) {
        tp=tp+price*i;
    }
    if(money-tp>=0){
        answer = 0;
    } else {
        answer = -(money-tp);
    }
    return answer;
}