$("#link-page").submit(function (event) {

  event.preventDefault();

  var link = $(".link-input").val();

  getVkUser(link);
});

function getVkUser(link) {

  var userName = $("#info-page_name");
  var userFotoLink = $("#info-page_foto");
  var vkApiUrl = 'https://api.vk.com/method/users.get?fields=photo_100&user_ids=';
  var tokenAndVersion = '&v=5.52&access_token=2daf8dfc2daf8dfc2daf8dfc9a2dcd7db422daf2daf8dfc76afa855d33c7bdaee783bbc';

  link = link.replace('https://vk.com/', '');

  vkApiUrl = vkApiUrl + link + tokenAndVersion;
  
  var linkName = link + "Name";
  var linkPhoto = link + "Photo";

  if (localStorage[linkName] != null) 
  {
    alert("Обновление данных о Пользователе");
  } else {
    alert("Добавление нового Пользователя");
  }

  $.get({
    url: vkApiUrl,
    success: function (data) {
      if (data.response == null) {
        alert(data.error.error_msg);
      } else if (data.response[0] == null) {
        alert("Введите Ссылку");
      } else {
        localStorage.setItem(linkName, data.response[0].first_name + " " + data.response[0].last_name);
        localStorage.setItem(linkPhoto, data.response[0].photo_100); 
        userName.val(localStorage[linkName]);
        userFotoLink.val(localStorage[linkPhoto]);
      }
    },
    error: function () {
      alert("Что-то пошло не так");
    }
  });
}

$(document).ready = (function () {
  $('#link-page').on('submit', registration);
});

