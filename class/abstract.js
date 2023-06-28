"use strict";
class AbsstractPerson {
    constructor() {
        this._name = 'Mark';
        // 여기서 구현하지 않음 
        // abstract키워드를 사용하고싶다면 class도 abstract로 선언해야한다.
        // abstract class는 기능이 완전하지 않다 -> new로 인스턴스를 만들 수 없다
    }
}
class Person_a extends AbsstractPerson {
    setName(name) {
        this._name = name;
    }
    print() {
        console.log(`이름은 ${this._name} 입니다.`);
    }
}
const p = new Person_a();
p.setName("gildong");
p.print();
