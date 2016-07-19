import Backbone from 'backbone';
import Contact from '../models/contact';
import settings from '../settings';

const AllContacts = Backbone.Collection.extend({
  model: Contact,
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/contacts`
});

let allContacts = new AllContacts();

export default allContacts;
