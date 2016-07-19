import session from '../models/username';
import allContacts from '../collections/contact-list';

let store = {
  session: session,
  contacts: allContacts
};

export default store;
