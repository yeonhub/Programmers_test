function solution(s) {
    let arr = s.split(' ').map(Number);
    let min = arr[0];
    let max = arr[0];

    arr.forEach((item) => {
        if (item > max) {
            max = item;
        } else if (item < min) {
            min = item;
        }
    });
    return `${min} ${max}`;
}