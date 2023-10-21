function solution(participant, completion) {
    let sort1 = participant.sort()
    let sort2 = completion.sort()
    let answer
    for(let i = 0; i<sort1.length; i++){
        if(sort1[i] !== sort2[i]){
        return answer = sort1[i]
        }
    }
    return answer
}