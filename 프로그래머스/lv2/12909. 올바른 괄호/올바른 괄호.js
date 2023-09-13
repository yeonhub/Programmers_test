function solution(s){
    const stack = []

    s.split('').map(string=>{
        if(string === ')' && stack[stack.length-1] === '('){
            stack.pop()
        }
        else{
            stack.push(string)
        }
    })

    return stack.length === 0
}