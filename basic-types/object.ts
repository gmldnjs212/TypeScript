// create by object literal
const person1 = {name: 'Mark', age: 39};

// person1 is not 'object' type
// person1 is "{name: string, age: number}" type.

// create by Object.create
const person2 = Object.create({name:'Mark', age: 39});


// object
// - "primitive type이 아닌것" 을 나타내고 싶을 때 사용하는 타입

// non-primitive type
// - not number, string, boolean, bigint, symbol, null, or undefined

// 즉, primitive type을 사용하고싶지않아서 제약을 걸고 싶을때,
// object타입을 사용한다.