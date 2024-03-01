function solution(arr) {
    function greatest(a, b) {
        return a % b === 0 ? b : greatest(b, a % b);
    }

    function least(a, b) {
        return (a * b) / greatest(a, b);
    }

    let answer = arr[0];

    for(let i = 1; i < arr.length; i++) {
        answer = least(answer, arr[i]);
    }

    return answer;
}
