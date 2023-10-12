function solution(arr, k) {
    let answer = []
    arr.forEach((ele,idx)=>{
        if(k%2===0){
            answer.push(ele+k)
        } else {
            answer.push(ele*k)
        }
    })
    return answer
}