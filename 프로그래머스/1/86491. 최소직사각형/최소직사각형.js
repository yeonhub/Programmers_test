function solution(sizes) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => a - b); 
        x = Math.max(x, sizes[i][0]); 
        y = Math.max(y, sizes[i][1]); 
    }
    return x * y; 
}
