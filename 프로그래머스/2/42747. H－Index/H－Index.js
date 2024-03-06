function solution(citations) {
    citations.sort((a, b) => b - a);

    for (let h = 0; h < citations.length; h++) {
        if (citations[h] <= h) {
            return h; 
        }
    }

    return citations.length; 
}