function solution(my_string, index_list) {
    var answer = '';
    index_list.forEach(ele=>{
        answer += my_string[ele]
    })
    return answer;
}