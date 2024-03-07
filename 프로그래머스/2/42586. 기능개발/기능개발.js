function solution(progresses, speeds) {
  const answer = [];
  let days = 0;
  let count = 0;

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    while (progresses.length > 0 && progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count > 0) {
      answer.push(count);
      count = 0;
    }
  }

  return answer;
}