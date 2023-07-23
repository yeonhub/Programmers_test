function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let totalDays = b;
    for (let i = 0; i < a - 1; i++) {
        totalDays += month[i];
    }
    let day = (totalDays + 4) % 7;
    return weeks[day];
}