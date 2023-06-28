function helloString(message: string): string{
  return message;
}

function helloNumber(message: number): number{
  return message
}

// 더 많은 반복된 함수들...


// any를 사용하게 되면?
function hello(message: any):any{
  return message;
}
console.log(hello('Mark'));
console.log(hello(39));
// any는 모든걸 받고 모든걸 준다는 느낌이다 


// generic을 사용하게 되면?
function helloGeneric<T>(message: T):T {
  return message;
}
console.log(helloGeneric('Mark').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));
// generic은 인자로 받은 값의 타입을 기억하고 그 함수내에서 사용한다
// 예를들어 'Mark'를 인자로 주면 string, 39를 인자로 주면 number로 인식하여
// 관련없는 다른 타입의 메서드를 사용가능하게 하는 문제를 해결할 수 있다.

