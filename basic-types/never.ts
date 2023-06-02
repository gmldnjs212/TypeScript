function error(message: string): never{
  throw new Error(message);
}
function fail(){
  return error('failed')
}
function infiniteLoop(): never{
  while(true){}
}

// -- never --
// never타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있습니다.
// any조차도 never에게 할당할 수 없습니다.
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 합니다

let a: string = 'hello';
if (typeof a != 'string'){
  let b: never = a;
}
type Indexable<T> = T extends string ? T & { [index : string]: any } : never;