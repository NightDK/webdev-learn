$("#link-page").submit(function (event) {

  event.preventDefault();

  var link = $(".link-input").val();

  getVKuser(link);
});

function getVKuser(link) {

  var userName = $("#info-page_name");
  var userFotoLink = $("#info-page_foto");
  var vkApiUrl = 'https://api.vk.com/method/users.get?fields=photo_100&user_ids=';
  var tokenAndVersion = '&v=5.52&access_token=2daf8dfc2daf8dfc2daf8dfc9a2dcd7db422daf2daf8dfc76afa855d33c7bdaee783bbc';

  link = link.replace('https://vk.com/', '');
  vkApiUrl = vkApiUrl + link + tokenAndVersion;

  $.getJSON({
    url: vkApiUrl,
    success: function() {
      alert('this is XOPOLLIO');
    },
    error: function(data){
      alert("Ошибка");
    }
  });

}

$(document).ready = (function () {
  $('#link-page').on('submit', registration);
});

