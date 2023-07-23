function solution(t, p) {
    function convertToInt(str) {
        return parseInt(str);
    }

    function countSubstringsLessThanOrEqualToP(t, p) {
        const tLength = t.length;
        const pLength = p.length;
        let count = 0;

        for (let i = 0; i <= tLength - pLength; i++) {
            const substring = t.substring(i, i + pLength);
            if (convertToInt(substring) <= convertToInt(p)) {
                count++;
            }
        }

        return count;
    }

    return countSubstringsLessThanOrEqualToP(t, p);
}

