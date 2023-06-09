// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}

class Students{
  // index signature의 사용
  // [index: string]: string;
  [index: string]: "male"|"female"; // male이나 female, 둘 중 하나만 선택할 수 있도록 제한
}

const a = new Students();
a.mark = 'male';
a.jade = 'male';
console.log(a);

const b = new Students();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';
console.log(b);
