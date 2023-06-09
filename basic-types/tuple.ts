// 아래와 같이 선언후 값을 할당하는 경우에는 
// 순서가 존재하기에 값을 할당할때도 순서와 타입, 길이가 정확히 맞아야한다.

// 순서와 타입, 길이를 맞추는 것이 중요
let x: [string, number];
x = ["hello", 39];

// x = [10, "Mark"]; // 자리가 안맞으면 에러 뱉음
// x[3] = "world"; // 길이가 안맞으면 에러 뱉음

const person: [string, number] = ["Mark", 39];
const [] = person; // *분해할당 Destructuring
const [first, second] = person;


// tuple은 길이가 정해져있고, 앞뒤의 타입이 정확해야한다.

// * 분해할당
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는
// JS 표현식이다.