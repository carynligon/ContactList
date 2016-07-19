import $ from 'jquery';
import allContacts from '../collections/contact-list';
import Contact from '../models/contact';
import store from './store';
import _ from 'underscore';
import settings from '../settings';

function renderHome () {
  allContacts.fetch({
    success: function (response) {
      console.log(response);
    }
  });
  let $sideBar = $(`
    <aside>
      <ul class="contact-list">
      <ul>
    </aside>
    `);
  $('nav').show();
  $('.container').empty().append($sideBar);
}

export default renderHome;
