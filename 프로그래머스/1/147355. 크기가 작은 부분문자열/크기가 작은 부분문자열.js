function solution(t, p) {
    let tl = t.length;
    let pl = p.length;
    let cnt = 0;
    
    for(let i=0; i<=tl-pl; i++){
        Number(t.slice(i,i+pl))<=Number(p) ? cnt++ : null
    }
    return cnt
}