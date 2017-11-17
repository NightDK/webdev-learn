var errorMsg = null;

function registration(event) {

  event.preventDefault();

  var Email = document.getElementsByClassName('input-log')[0].value;
  var Password = document.getElementsByClassName('input-pass')[0].value;
  var PasswordCheck = document.getElementsByClassName('input-pass-check')[0].value;
  var Check = document.getElementsByClassName('check')[0].checked;

  if (validate(Email, Password, PasswordCheck, Check)) {
    success();
  }
  else {
    error();
  }
}

function validate(Email, Password, PasswordCheck, Check) {
  if (!validEmail(Email)) {
    errorMsg = 'Введите корректный email!';
    return false;
  }

  if (Password.length < 6) {
    errorMsg = 'Длина пароля должна составлять более 6 символов';
    return false;
  }

  if (Password !== PasswordCheck) {
    errorMsg = 'Пароли не совпадают!';
    return false;
  }

  if (!Check) {
    errorMsg = 'Вы не согласны с правилами сайта!';
    return false;
  }

  return true;
}

function validEmail(Email) {
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  return pattern.test(Email);
}

function success() {
  alert('Вы успешно зарегистрировались.');
}

function error() {
  alert(errorMsg);
}

window.onload = function () {
  document.getElementById('login-page').addEventListener('submit', registration);
}