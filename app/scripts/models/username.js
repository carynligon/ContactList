import Backbone from 'backbone';
import settings from '../settings';

const Session = Backbone.Model.extend({
  urlRoot: `http://baas.kinvey.com/user/${settings.appId}/login`,
  defaults: {
    username: '',
    authtoken: ''
  }
});

let user = {
  name: '',
  email: '',
  username: ''
};

export default user;
