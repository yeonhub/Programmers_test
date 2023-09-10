function solution(A,B){
let aAsc = A.sort((a,b)=> a-b)
let bDesc = B.sort((a,b)=>b-a)
let sum = 0
A.forEach((ele,idx) => {
    sum = sum + aAsc[idx]*bDesc[idx]
});
    return sum;
}