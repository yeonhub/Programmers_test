function isBalanced(s) {
    const stack = [];
    const opening = ['(', '[', '{'];
    const closing = [')', ']', '}'];

    for (let char of s) {
        if (opening.includes(char)) {
            stack.push(char);
        } else {
            const lastOpening = stack.pop();
            const expectedClosing = closing[opening.indexOf(lastOpening)];
            if (char !== expectedClosing) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function solution(s) {
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        const rotatedString = s.slice(i) + s.slice(0, i);
        if (isBalanced(rotatedString)) {
            answer++;
        }
    }

    return answer;
}