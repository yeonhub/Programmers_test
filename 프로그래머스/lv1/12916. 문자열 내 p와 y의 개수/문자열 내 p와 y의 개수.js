function solution(s){
    let pCount = 0;
    let yCount = 0;
    
    s.toLowerCase().split('').forEach(function(char){
        if(char === 'p') {
            pCount++;
        } else if(char === 'y') {
            yCount++;
        }
    });
    
    if(pCount === yCount) {
        return true;
    } else {
        return false;
    }
}