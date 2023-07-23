function solution(array, commands) {
    const answer = [];

    for (const cmd of commands) {
        const [i, j, k] = cmd;
        const slicedArr = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(slicedArr[k - 1]);
    }

    return answer;
}