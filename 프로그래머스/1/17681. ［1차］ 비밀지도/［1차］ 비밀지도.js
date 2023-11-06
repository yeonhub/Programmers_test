function solution(n, arr1, arr2) {
    var answer = [];
    let point = ''
    let arr1T = arr1.map(ele=>
        ele.toString(2).padStart(n,'0')
    )
    let arr2T = arr2.map(ele=>
        ele.toString(2).padStart(n,'0')
    )
    for(let i=0; i<n; i++){
        point = ''
        for(let j=0; j<n; j++){
            (arr1T[i][j] === '0' && arr2T[i][j] === '0') ? point += ' ' : point += '#'
        }
        answer.push(point)
    }
    return answer;
}