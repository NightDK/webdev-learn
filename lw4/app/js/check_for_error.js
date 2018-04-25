$(".registration").submit(function (event) {

  event.preventDefault();

  var email = $(".input-log").val();
  var password = $(".input-pass").val();
  var passwordCheck = $(".input-pass-check").val();
  var check = $(".check-input").prop("check");
  var validateResult = validate(email, password, passwordCheck, check);

  if (validateResult == true) {
    alert("Вы успешно зарегистрировались.");
  } else {
    alert(validateResult);
  }
});

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
  var pattern = Email.match(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i);
  return pattern;
}

$(document).ready = (function () {
  $('#registration').on('submit', registration);
});