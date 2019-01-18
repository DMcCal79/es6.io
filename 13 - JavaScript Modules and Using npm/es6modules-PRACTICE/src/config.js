const apiKey = 'abc123';
export default apiKey;

export const url = 'http://wesbos.com';

export function sayHi(name) {
  console.log(`Greetings ${name}!`);
};

const optionOne = 'thin';
const optionTwo = 'marinara';
const optionThree = 'pepperoni';
const cleanup = 'Santana';

export { optionOne, optionTwo, optionThree, cleanup as fourth };
