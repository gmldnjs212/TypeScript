function error(message: string): never{
  throw new Error(message); // 이 라인에서 끝남
}

function fail(){
  return error('failed') // 위에서 선언한 error 사용
}

function infiniteLoop(): never{
  while(true){}
}


// -- never --
// never타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있습니다.
// any조차도 never에게 할당할 수 없습니다.
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 합니다


// 타입 오브 가드의 예시
declare const a: string | number;

if (typeof a !== 'string'){ // string, number에서 string을 제외한 상태
  a;
}
// 위처럼 특정타입이 되도록 의도할 수 있다.


// never가 활용되는 방식
type Indexable<T> = T extends string ? T & { [index : string]: any } : never;
type ObjectIndexable = Indexable<{}>

// 31번라인 {}가 30번 라인 <T>에 들어가는 것
// 타입이 변수처럼 쓰이는 제네릭

// 위는 "조건부 타입"으로 아직배우지 않았음
// type alias의 indexable이라고하는 제레닉타입
// t가 만약에 string이면, T라고하고 indexable타입을 추가하는 형태
// 여기에 할당되는 값은 any이며 나머지인경우는 never


// 제네릭 Generic 이란?
// 타입을 마치 함수의 파라미털처럼 사용하는 것