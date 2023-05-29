// ECMAScript 2015의 Symbol입니다.
// new Symbol로 사용 불가능
// Symbol을 함수로 사용해서 symbol타입을 만들어 낼 수 있음

console.log(Symbol('foo') === Symbol('foo')); // false

// Symbol
// primitive 타입의 값을 담아서 사용
// 고유하고 수정불가능한 값을 만들어줌
// 그래서 "주로 접근을 제어"하는데 쓰이는 경우가 많았음

const sym = Symbol();
const obj = {
  [sym]: "value"
};
obj[sym]
