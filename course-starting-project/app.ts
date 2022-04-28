function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof number1 !== 'number') {
  //   throw new Error('Incrrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
/*
let number1: number = 5;
// 이미 값이 5로 숫자형임을 추론할 수 있기 때문에 number를 사용하지 않아도 됌

let number1: number;
number1 = 5;
// 이 때 아래의 값에 숫자형이 아닌 값을 넣게 되면 오류를 띄워줌
*/
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);