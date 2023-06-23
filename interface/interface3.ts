interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
};

function hello3(person: Person3): void{ 
  console.log(`안녕하세요! ${person.name} 입니다`);
  
};

const p31: Person3 = {
  name: 'Mark',
  age: 39,
};

const p32: Person3 = {
  name: 'Anna',
  sisters: ["Sung", "Chan"] // string array
};

const p33: Person3 = {
  name: 'Bokdaengi',
  father: p31, // interface instance
  mother: p32 // interface instance
};

hello3(p31)
hello3(p32)
hello3(p33)