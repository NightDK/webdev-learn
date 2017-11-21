function registration(event) {

  event.preventDefault();

  var email = document.getElementsByClassName('input-log')[0].value;
  var password = document.getElementsByClassName('input-pass')[0].value;
  var passwordCheck = document.getElementsByClassName('input-pass-check')[0].value;
  var check = document.getElementsByClassName('check')[0].checked;
  var validateResult = validate(email, password, passwordCheck, check);

  if (validateResult == true) { 
    alert('Вы успешно зарегистрировались.');
  }
  else {
    alert(validateResult);
  }
}

function validate(email, password, passwordCheck, check) {
  if (!validEmail(email)) {
    return 'Введите корректный email!';
  }

  if (password.length < 6) {
    return 'Длина пароля должна составлять более 6 символов';
  }

  if (password !== passwordCheck) {
    return 'Пароли не совпадают!';
  }

  if (!check) {
    return 'Вы не согласны с правилами сайта!';
  }

  return true;
}

function validEmail(Email) {
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  return pattern.test(Email);
}

window.onload = function () {
  document.getElementById('login-page').addEventListener('submit', registration);
}