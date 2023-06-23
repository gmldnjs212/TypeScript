class Person2 {
  name: string = "Mark";
  age: number; 

  constructor(age?: number){
    if(age===undefined){  // 값을 안넣어주면
      this.age = 20; // 기본값인 20으로 age 설정
    } else { // 값이 들어왔다면
      this.age = age; // 들어온값을 age로 설정
    }
  }
}

const p2 = new Person2(39);
console.log(p1);
p2.age = 39;
console.log(p2.age);

