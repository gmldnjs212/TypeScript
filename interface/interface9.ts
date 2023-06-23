// function
// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
  (food: string): void
}

// -------------------------------------

// array
// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index: number]: string;
}

// -------------------------------------

// intersection
interface ErrorHandling {
  success: boolean;
  error?: {message: string};
}

interface ArtistData {
  artists: {name: string}[];
}

// type alias
type ArtistResponseType = ArtistData & ErrorHandling;

// interface
interface IArtistsResponse extends ArtistData, ErrorHandling {}

let art: ArtistResponseType;
let iar: IArtistsResponse;

// -------------------------------------

// union types
interface Bird{
  fly(): void;
  layEggs(): void;
}

interface Fish{
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

// 인터페이스 상속 불가
// interface IPet extends PetType {}

// error : 
// An interface can only extend an object type or 
// intersection of object types with statically 
// known members.ts(2312)


// 클래스 구현 불가
// class Pet implements PetType {} 

// error : 
// A class can only implement an object type or 
// intersection of object types with statically 
// known members.ts(2422)

// -------------------------------------

// Declaration Merging - interface
// type alias에서는 할 수 없음

// 같은 이름의 인터페이스를 만들더라도
// 나중에 인터페이스를 사용할때는 합쳐진다( merging )
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}
let mi: MergingInterface;

// -------------------------------------

// Declaration Merging - type alias
// error : Duplicate identifier 'MergingType'.ts(2300)

// type MergingType = {
//   a: string;
// };

// type MergingType = {
//   b: string;
// };