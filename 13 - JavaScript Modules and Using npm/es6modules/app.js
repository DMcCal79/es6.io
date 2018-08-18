// import { uniq } from 'lodash';
// import insane from 'insane';
// import jsonp from 'jsonp';
/*Using "as" allows me to change name of the const pizza that I imported
to lunch.*/
import slug from 'slug';
import base64 from 'base-64';
import { wings, url, sayHi, pizza as lunch, coffee, chips } from './src/config';
import User, { createURL, gravatar } from './src/user';
console.log('hi');
console.log(wings);
console.log(url);
sayHi('Dave');
console.log(`I will have some ${coffee} after I finish my ${lunch} pizza.`);
console.log(`Please pass the ${chips}.`);
console.log(slug('The Great State Of Texas'));
console.log(base64.encode('bacon'));

const wes = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com');
console.log(wes);
const profile = createURL(wes.name);
console.log(profile);
const image = gravatar(wes.email);
console.log(image);
