function solution(common) {
    let answer = 0;
    let length = common.length-1;
    if(common[1]/common[0]===common[2]/common[1]){
        let mul = common[1]/common[0]
        answer = common[length]*mul;
    } else {
        let add = common[1]-common[0]
        answer = common[length]+add
    }
    return answer;
}