"use strict";
class Person1 {
    hello() {
        console.log("안녕하세요.", Person1.CITY);
    }
    change() {
        Person1.CITY = 'LA';
    }
}
Person1.CITY = "Seoul";
const person1 = new Person1();
person1.hello(); // 안녕하세요. Seoul
const person2 = new Person1();
person2.hello(); // 안녕하세요. Seoul
person1.change(); // Person1.CITY = 'LA';
person2.hello(); // 안녕하세요. LA   
