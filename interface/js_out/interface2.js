"use strict";
function hello2(person) {
    console.log(`안녕하세요! ${person.name} 입니다 .`);
}
hello2({ name: "Mark", age: 39 });
hello2({ name: "Mark" }); // age가 없어도 에러가 아님
