import $ from 'jquery';
import settings from '../settings';
import user from '../models/username';
import router from '../router';

function renderLogin () {
  let $login = $(`
    <div class="login">
      <form class="login-form">
        <h2>Login</h2>
        <input id="username" type="text" name="username" placeholder="username"/>
        <input id="password" type="password" name="password" placeholder="password"/>
        <input type="submit" name="submit" value="submit">
      </form>
    </div>
  `);
  $('nav').hide();
  $('.container').empty().append($login);


  $login.find('input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    let username =  $login.find('#username').val();
    let password =  $login.find('#password').val();
    var encrypted = btoa(settings.appKey + ':' + settings.appSecret);
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appKey}/login`,
      data: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        Authorization: `Basic ${encrypted}`
      },
      contentType: 'application/json',
      success: function(response) {
        user.username = username;
        user.authtoken = response._kmd.authtoken;
        console.log('it worked, you are signed in');
        console.log(user);
        router.navigate('home', {trigger: true});
      },
      error: function() {
        console.log('it errored, you are not signed in');
      }
    });
  });
}


export default renderLogin;
