$("#link-page").submit(function (event) {

  event.preventDefault();

  var link = $(".link-input").val();
  var userName = $("#info-page_name");
  var userFotoLink = $("#info-page_foto");

  alert(link);
});

function get_vkuser_photo(vkurl) {

  var vkapi_url = 'https://api.vk.com/method/users.get?fields=photo_100&user_id=', vkid;

  var res = textLoad(vkapi_url);
  res.load(vkapi_url);

  return json_decode(res).response[0].photo_100;
}

function textLoad(vkapi_url) {

}

$(document).ready = (function () {
  $('#link-page').on('submit', registration);
});

