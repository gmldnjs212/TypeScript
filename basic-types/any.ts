// https://velog.io/@ollehvelog/TypeScript-object-Type-2
// https://developer-talk.tistory.com/198

// -- any --
// 타입스크립트에서는 '어떤타입이든' 이라는 의미로 해석
// 즉, 어떠한 타입도 허용하는 타입
// 타입을 엄격하게 검사하고 처리하는 ts에서는 치명적인 존재

// 그러면 any 왜씀?
// any를 쓸 수 밖에 없는 환경이 있다

// function returnAny(message): any {
//   console.log(message);
// }

// const any1 = returnAny("리턴은 아무거나")

// any1.toString();

// returnAny()는 단순히 console.log만 출력하는 일을 하고 있다
// 그래서 returnAny매개변수에는 number타입이나 string타입등 다양한 타입이 
// 들어올 수 있는 함수이다 
// 이런 message 매개변수는 정말로 any타입일 수 있다.
// ts도 message 매개변수의 타입이 any 일 것이라고 추론하거나 모른다고 판단

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나")

any1.toString();

// 개발자가 message에 any탕비이라고 명시하면 에러가 사라진다
// 이처럼 ts에서 any타입으로 추론하지만, 개발자가 명시적으로 적지않으면
// 에러를 뱉는 ts옵션을 "noImplicitAny": true 이라고 한다
// 우리는 "strict": true로 설정하고 있기 때문에 
// "noImplicitAny": true도 자동으로 설정되어있다.

// -- avoid leaking any -- (any 누수를 막는 방법)
function leakingAny(obj: any){
  // a타입을 number로 지정하면 여기서부터 누수를 막을 수 있다
  const a: number = obj.num;
  // 변수 b도 any타입에서 number타입으로 바뀌었다
  const b = a + 1;
  return b;
}

// c도 any타입에서 number타입으로 바뀌었다 
const c = leakingAny({num:0});
// 하지만 c가 number로 규정되어서 나와야하는 것이 우리의 목표
// const d: string = c.indexOf('0'); / error