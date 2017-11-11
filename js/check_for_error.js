$(document).ready = (function () {
  $('#registration').on('submit', registration);
});

$("#registration").submit(function (event) {

  event.preventDefault();

  var Email = $(".input-log").val();
  var Password = $(".input-pass").val();
  var PasswordCheck = $(".input-pass-check").val();
  var Check = $(".check_input").prop("checked");
  var errorMsg = "null";

  if (validate(Email, Password, PasswordCheck, Check)) {
    success();
  } else {
    error();
  }
});

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
  var pattern = Email.match(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i);
  return pattern;
}

function success() {
  alert("Вы успешно зарегистрировались.");
}

function error() {
  alert(errorMsg);
}