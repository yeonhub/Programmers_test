function solution(s) {
let txtArr = s.split(" ")
let newArr = []
txtArr.forEach((ele,idx) => {
    if(typeof(ele.charAt(0))==="string"){
        let first = ele.charAt(0).toUpperCase()
        let rest = ele.slice(1).toLowerCase()
        newArr.push(first + rest)
    } else {
        newArr.push(ele)
    }
});
    return newArr.join(" ")
}