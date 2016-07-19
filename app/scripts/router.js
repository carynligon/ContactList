import Backbone from 'backbone';
import settings from './settings';
import renderLogin from './views/login';
import renderRegister from './views/register';
import renderHome from './views/home';
import renderAddContact from './views/add';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    register: 'registerFunction',
    home: 'homeFunction',
    add: 'addFunction'
  },
  loginFunction: function () {
    renderLogin();
  },
  registerFunction: function () {
    renderRegister();
  },
  homeFunction: function () {
    renderHome();
  },
  addFunction: function () {
    renderAddContact();
  }
 });

 const router = new Router ();

 export default router;
