import $ from 'jquery';
import allContacts from '../collections/contact-list';
import Contact from '../models/contact';
import store from './store';
import _ from 'underscore';
import settings from '../settings';
import session from '../models/username';
import router from '../router';

function renderHome () {
  let $sideBar = $(`
    <aside>
      <ul class="contact-list">
      <ul>
    </aside>
    `);
  $('nav').show();
  $('.container').empty().append($sideBar);
  allContacts.fetch({
    success: function (response) {
      response.forEach(function(contact){
        let $contactListName = $(`
          <li class="each-contact">
            <ul>
              <li class="name">${contact.get('name')}</li>
              <li class="nickname">Nickname: ${contact.get('nickname')}</li>
              <li class="email">Email: ${contact.get('email')}</li>
              <li class="phone">Phone: ${contact.get('phone')}</li>
            </ul>
          </li>
          `);
        $('.contact-list').append($contactListName);
      });
    }
  });
  function renderSingleContact(evt) {
    $('.container').empty().append($sideBar);
    console.log(evt.target);
  }
  $('.each-contact').on('click', renderSingleContact);
  $('#logout').on('click', function () {
      $.ajax({
        type: 'POST',
        url: `https://baas.kinvey.com/user/${settings.appKey}/_logout`,
        headers: {
          Authorization: `Kinvey ${session.authtoken}`
        },
        contentType: 'application/json',
        success: function(response){
          sessionStorage.removeItem('session');
          delete session.authtoken;
          router.navigate('login', {trigger:true});
          console.log('You logged out!');
        },
        error: function(){
          console.log('Error');
        }
      });
  });
}

export default renderHome;
