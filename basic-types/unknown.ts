// 응용프로그램을 작성할 때 모르는 변수 타입을 묘사햐아할 수도 있습니다.
// 이러한 값은 동적콘텐츠 ( 예시: 사용자로부터, 또는 우리API의 모든 값을 의도적으로 수락하기를 원할 수 있다)
// 이경우, 컴파일러와 미래의 코드를 읽는 사람들에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로
// unknown타입을 제공합니다.

declare const maybe: unknown;
// const aNumber: number = maybe;

// 타입 가드
if (maybe === true){ // if문 내에서 maybe는 true
  const aBoolean: boolean = maybe; // ㄱㅊ
  // const aString: string = maybe; // 에러
}

// 타입 오브 타입가드
if(typeof maybe === 'string'){ // if문 내에서 maybe는 string
  const aString: string = maybe;  // ㄱㅊ
  // const aBoolean: boolean = maybe; // 에러
}

// 위의 코드에서 보듯이 unknown은 타입을 한정시켜줘야 사용할 수 있는 타입이다.


// unknown
// typescriipt3.0 버전부터 지원
// any와 짝으로 any보다 type-safe한 타입
//     - any와 같이 아무거나 할당할 수 있다
//     - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
//     - 타입을 확정해주지 않으면 다른 곳 에서 할당할 수 없고, 사용할 수 없다.
// unknown 타입을 사용하면 runtime error를 줄일 수 있을 것 같다
// 사용전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 api에 사용할 수 있을 것 같다.
