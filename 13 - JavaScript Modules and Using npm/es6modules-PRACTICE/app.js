// import { uniq } from 'lodash';
// import insane from 'insane';
// import jsonp from 'jsonp';
import apiKey from './src/config';
import User, { createURL, gravatar } from './src/user';
import slug from 'slug';
import base64 from 'base-64';
console.log('hello');
console.log(apiKey);

import { url, sayHi, fourth, optionOne as crust, optionTwo as sauce, optionThree as topping } from './src/config';
console.log(url);
console.log(sayHi('Dave'));
console.log(`I will take a ${topping} pizza with ${sauce} sauce on ${crust} crust please.`);
console.log(`${fourth} will be batting cleanup for the Tribe this year.`);

console.log(createURL('buffalo wings and pizza'));
console.log(`My hashed email is: ${gravatar(`daves@hashedemail`)}`);

const optimus = new User('Optimus Prime', 'leader@autobots.com', 'www.autobotspizza.com');
console.log(optimus);
const profile = createURL(optimus.name);
console.log(profile);
const image = gravatar(optimus.email);
console.log(image);
