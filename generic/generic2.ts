function helloBasic<T, U>(message: T, comment: U):T {
  return message;
}

// 사용할때 <>를 사용하여 타입을 직접 지정하는 방식 
// 이 방식을 사용하면 <>에 명시한 타입의 값만을 ()에 작성할 수 있다
helloBasic<string, number>("Mark", 39); // 타입을 지정한 경우 -> 지정된 타입만 가능함
helloBasic(36, 39); // 타입을 지정하지 않은 경우 -> 타입을 추론함

// 가장 간단한 형태의 generic문법이다.