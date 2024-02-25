function solution(n) {
    const count = (number) => {
        return number.toString(2).split('1').length - 1;
    };

    let number2 = n + 1;
    const countNumber = count(n);

    while (count(number2) !== countNumber) {
        number2++;
    }

    return number2;
}