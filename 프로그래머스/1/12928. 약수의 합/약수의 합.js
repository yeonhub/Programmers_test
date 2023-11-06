function solution(n) {
    let sum =0;
    for(let i=0; i<n+1; i++){
        n%i===0 ? sum += i : null
    }
    return sum
}