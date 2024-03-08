function solution(priorities, location) {
  let answer = 0;
  const queue = priorities.map((priority, index) => ({ priority, index }));

  while (queue.length > 0) {
    const currentProcess = queue.shift();
    const hasHigherPriority = queue.some(process => process.priority > currentProcess.priority);

    if (hasHigherPriority) {
      queue.push(currentProcess);
    } else {
      answer++;
      if (currentProcess.index === location) {
        break;
      }
    }
  }

  return answer;
}