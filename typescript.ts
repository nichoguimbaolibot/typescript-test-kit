const sum1 = (a: number, b: number): number => {
 return a + b; 
}

const string = (a: string, b: string): string => {
  return a + b
}
const sumAnswer = sum1(1, 2)

console.log('string answer: ', string(`test${sumAnswer}`, ' hahaha'))


console.log(sumAnswer)
