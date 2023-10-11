function solution(my_string, alp) {
    var answer = new RegExp(alp, 'g');
    answer = my_string.replaceAll(answer, alp.toUpperCase())

    return answer
}
