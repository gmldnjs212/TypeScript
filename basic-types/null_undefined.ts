// typescript에서 undefined와 null은 실제로 각각 
// undefined 및 null 이라는 타입을 가집니다.
// void와 마찬가지로, 그 자체로는 그다지 유용하지 않습니다.
// 둘다 소문자만 존재합니다.

// null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 합니다.

// let MyName: string = null; // 에러발생
// let u: undefined = null;
let v: void = undefined;

// | : union type
let union: string|null = null;
union = "Mark";


// null in javascript
// - null이라는 값으로 할당된 것을 null이라고 합니다
// - 무언가가 있는데, 사용할 준비가 덜 된 상태
// - null이라는 타입은 null 이라는 값만 가질 수 있습니다.
// - 런타임에서 typeof 연산자를 이용해서 알아내면 object입니다.

let n : null = null;
console.log(n); // null
console.log(typeof n); // object


// undefined in javascript
// - 값을 할당하지 않은 변수는 undefined라는 값을 가집니다.
// - 무언가가 아예 준비가 안된 상태
// - object의 property가 없을 때도 undefined입니다
// - 런타임에서 typeof 연산자를 이용해서 알아내면, undefined입니다.

let u : undefined = undefined;
console.log(u); // undefined
console.log(typeof u); // undefined




