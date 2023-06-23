interface Iperson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements Iperson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string){
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

// person은 Iperson1이라는 인터페이스로부터 implements되었기 때문에
// 그래서 아래와 같이 타입을 명시해줘도 문제없으며,
// person 클래스인스턴스는 .를 통해서 인터페이스 속성에 접근할 수 있다.
const person: Iperson1 = new Person('Mark');
person.hello();
// 외부로는 인터페이스를 노출하고 내부적으로는 클래스를 구현하는 방식
// 이 방식은 객체지향에서 많이 사용되는 방식이다