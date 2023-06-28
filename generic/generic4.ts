// TypeAlias를 사용한 케이스
type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};


// Interface를 사용한 케이스
interface HelloFunctionGeneric2 {
  <T>(message: T): T; 
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
};