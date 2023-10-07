function solution(my_string) {
    let rev = ''
    for(i=my_string.length-1; i>=0; i--){
        rev += my_string[i]
    }
    return rev;
}