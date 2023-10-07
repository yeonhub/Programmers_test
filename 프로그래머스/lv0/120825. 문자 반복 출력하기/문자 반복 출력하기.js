function solution(my_string, n) {
    let answer = ''
    let nn = my_string.split('')
    for(i=0; i<=my_string.length-1; i++){
    for(j=0; j<=n-1; j++){
        answer += nn[i]
    }
}
    return answer
}