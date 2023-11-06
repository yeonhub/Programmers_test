function solution(x) {
    var answer = true;
    let sum = 0;
    let input = x
    while(x>0){
        sum+=x%10;
        x=Math.floor(x/10)
    }
    
    return input%sum === 0 ? true : false;
}