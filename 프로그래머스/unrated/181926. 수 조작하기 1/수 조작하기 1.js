function solution(n, control) {
   [...control].forEach((ele,idx)=>{
        ele === 'w' ? n+=1 : ele ==='s' ? n-=1 : ele ==='d' ? n+=10 : n-=10
    })
    return n;
}