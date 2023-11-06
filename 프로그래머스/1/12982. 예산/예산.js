function solution(d, budget) {
    var answer = 0;
    let sortD = d.sort((a,b)=>a-b)
    let total = 0;
    for(let ele of d){
        total += ele
        if(total <= budget){
            answer++
        } else break
    }
    return answer;
}