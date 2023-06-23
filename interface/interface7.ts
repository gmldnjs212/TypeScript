interface HelloPerson {
  // HelloPerson 인터페이스를 사용하는 개체는
  // 아래에 선언된 형태로 함수가 작성되어야 한다
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function(name: string) {
  console.log(`안녕하세요! ${name} 입니다.`);
}

helloPerson("Mark", 39)
