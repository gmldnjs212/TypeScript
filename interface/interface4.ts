interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: "Mark",
  age: 39,
  hello: function(): void{
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

const p42: Person4 = {
  name: "Mark",
  age: 39,
  hello(): void{ // 10번 라인과 같음 
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

// 화살표 함수를 사용하는 경우에는 this를 사용할 수 없다
// const p43: Person4 = {
//   name: "Mark",
//   age: 39,
//   hello: (): void => { // 10번 라인과 같음 
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   },
// };

p41.hello();
p42.hello();