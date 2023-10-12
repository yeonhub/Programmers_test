function solution(num_list, n) {
    let arr = []
    for(i=0; i< num_list.length; i=i+n){
        arr.push(num_list[i])
    }
    return arr;
}