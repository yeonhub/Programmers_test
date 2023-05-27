function solution(arr1, arr2) {
    var answer = [];
    var rows = arr1.length;
    var cols = arr1[0].length;
    
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(row);
    }
    
    return answer;
}
