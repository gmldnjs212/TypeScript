"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'Mark'; // 값을 초기화 할때만 지정해줄 수 있다.
    }
}
const p1 = new Person("Mark", 39);
console.log(p1.name); // 출력-사용 은 가능하지만
// p1.name = "Woongjae" // 값을 변경한는 것은 불가능하다 -> 에러
