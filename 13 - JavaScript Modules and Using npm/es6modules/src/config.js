// const apiKey = 'abc123';
/*Using export default will export the whole module and I can then import it under
whichever name I like.*/
// export default apiKey;

/*Instead of exporting the entire module, I can pick and choose individual items
that I wish to export by typing export in front of them. I will then need to make
sure I import them using the same name that I used to export them with.*/

export const wings = "I want some buffalo wings!";

export const url = 'http://wesbos.com';

export function sayHi(name) {
  console.log(`Howdy ${name}!`);
};

const pizza = 'peperonni';
const coffee = 'cold brew';
const snack = 'nachos';

/*Another way to export individual items is to just group them together inside of
{}. This I way I don't have to keep typing export over again.*/
export { pizza, coffee, snack as chips };

/*Using 'as' will allow me to export the item under a different name.  For example,
here I am exporting the const snack under the name chips.  It will then  be imported
as chips in app.js*/
