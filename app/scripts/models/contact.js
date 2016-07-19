import Backbone from 'backbone';
import settings from '../settings';
import allContacts from '../collections/contact-list';

const Contact = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/contacts`
});

export default Contact;
