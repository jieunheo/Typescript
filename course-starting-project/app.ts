// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple
// } = {
//   name: 'hong', // string
//   age: 30, // number
//   hobbies: ['Sports', 'Cooking'], // Array
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AURTHOR = 2;
// -> 각각 따로 관리 해야 하는 겂을 묶어서 관리할 수 있음
enum Role { ADMIN, READ_ONLY, AURTHOR };

const person = {
  name: 'hong', // string
  age: 30, // number
  hobbies: ['Sports', 'Cooking'], // Array
  role: Role.ADMIN
};

// 튜플 - 정해진 갯수의 정해진 타입을 가진 값
// person.role.push('admin'); // 값 넣기 - 허용
// person.role.[1] = 10; // 값 바꾸기 - error
// person.role = []; // 초기화 - error

// 열거 목록 enum

let favoriteActivities: string[];
// favoriteActivities = 'Sports'; // error
favoriteActivities = ['Sports'];
// 만약 타입이 혼합된 배열을 만들고 싶다면 any[] 사용

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}