function solution(array) {
    const countMap = {};
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        countMap[num] = (countMap[num] || 0) + 1;
    }

    let maxFrequency = 0;

    let modeValues = [];

    for (const num in countMap) {
        if (countMap[num] > maxFrequency) {
            maxFrequency = countMap[num];
            modeValues = [parseInt(num)];
        } else if (countMap[num] === maxFrequency) {
            modeValues.push(parseInt(num));
        }
    }

    if (modeValues.length === 1) {
        return modeValues[0];
    } else {
        return -1;
    }
}
