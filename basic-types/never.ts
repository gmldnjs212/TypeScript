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


type Indexable<T> = T extends string ? T & { [index : string]: any } : never;
// never 0546부터