import slug from 'slug';
import { url } from './config';
/*Since the creator of base-64 exports it as a default, I can import it under any
 name that I choose*/
import base64 from 'base-64';

export default function User(name, email, website) {
  return {name, email, website};
};

export function createURL(name) {
  return `${url}/users/${slug(name)}`;
};

export function gravatar(email) {
  const hash = base64.encode(email);
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
};
