import $ from 'jquery';
import allContacts from '../collections/contact-list';
import Contact from '../models/contact';
import router from '../router';

function renderAddContact () {
  let $contactForm = $(`
    <form class="new-contact">
      <input id="full-name" type="text" name="full-name" placeholder="Full Name"/>
      <input id="nickname" type="text" name="nickname" placeholder="Nickname"/>
      <input id="email" type="text" name="email" placeholder="Email" />
      <input id="phone" type="tel" name="phone" placeholder="Phone"/>
      <input id="submit" type="submit" name="submit" value="submit"/>
    </form>
    `);
  $('.container').empty().append($contactForm);
  $('#submit').on('click', function (evt) {
    evt.preventDefault();
    const createContact = allContacts.create({
      name: $('#full-name').val(),
      nickname: $('#nickname').val(),
      email: $('#email').val(),
      phone: $('#phone').val()
    });
    router.navigate('home', {trigger: true});
  });
}

export default renderAddContact;
