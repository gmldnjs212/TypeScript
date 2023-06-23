interface Person2{
  name: string; // name은 필수로 지정해야함
  age?: number; // age는 지정해도되고 안해도 됨
}

function hello2(person: Person2): void{
  console.log(`안녕하세요! ${person.name} 입니다 .`);
}

hello2({name: "Mark", age: 39})
hello2({name: "Mark"}) // age가 없어도 에러가 아님