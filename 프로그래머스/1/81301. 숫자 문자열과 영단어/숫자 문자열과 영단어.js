function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numbers.forEach((ele,idx)=>{
        s=s.replaceAll(ele,idx)
    })
return Number(s);
}