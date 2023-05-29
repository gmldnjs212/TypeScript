function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나")

any1.toString();

// any
// - 어떤타입이어도 상관없는 타입
// - 최대한 쓰지 않는것이 핵심
// - 컴파일 타임에 타입체크가 정상적으로 이뤄지지 않기때문..
// - 컴파일 옵션중에는 any를 써야하는데 쓰지않으면 오류를 뱉도록 하는 옵션이 있다
// -> noImplicitAny (tsconfig.json / strict에 포함되어있다.)

// any는 계속해서 개체를 통해 전파된다
// 결국 모든 편의는 타입안정성을 잃는 대가로 온다는 것을 기억.
// 타입안정성은 ts를 사용하는 주요 동기중 하나이며,
// 필요하지 않은경우에도 any를 사용하지 않도록 주의해야함
 
let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any){
  const a: number = obj.num;
  const b = a + 1; // b가 any가 됨
  return b;
}
const c = leakingAny({num: 0}) // c도 any가 됨
c.indexOf("0");

// https://velog.io/@ollehvelog/TypeScript-object-Type-2
// any 뒷부분 다시듣기 