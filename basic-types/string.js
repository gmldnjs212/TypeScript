"use strict";
// 텍스트형식을 참조하기위해 'String' 형식을 사용
// JavaScript와 마찬가지로, TypeScript는
// 문자열 데이터를 둘러싸기위해 큰 따옴표나 작은 따옴표 사용
let myName = "Mark";
myName = "Anna";
// Template String 
// 행에 걸쳐있거나, 표현식을 넣을 수 있는 문자열
// 이 문자열은 backtick(=backquote) 기호에 둘러쌓여 있습니다.
// 포함된 표현식은 `${expr}`와 같은 형태로 사용합니다.
let fullName = `Bob Bobbington`;
let age = 38;
let sentence1 = `Hello, my name is ${fullName}.
I;ll be ${age + 1} years old next month.`;
// template string을 사용하지 않을 경우
let sentence2 = "Hello, my name is " + fullName + ".\n\n" +
    " I'll be " + (age + 1) + "years old next month.s";
console.log(sentence1);
console.log(sentence2);
