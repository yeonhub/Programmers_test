function solution(answers) {
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const scores = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === supo1[i % supo1.length]) {
            scores[0]++;
        }
        if (answers[i] === supo2[i % supo2.length]) {
            scores[1]++;
        }
        if (answers[i] === supo3[i % supo3.length]) {
            scores[2]++;
        }
    }
    
    const max = Math.max(...scores);
    const winner = scores.reduce((acc, score, index) => {
        if (score === max) {
            acc.push(index + 1);
        }
        return acc;
    }, []);
    
    return winner;
}
