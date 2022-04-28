// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'hong',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[];
// favoriteActivities = 'Sports'; // error
favoriteActivities = ['Sports'];
// 만약 타입이 혼합된 배열을 만들고 싶다면 any[] 사용

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}