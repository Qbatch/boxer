$(document).ready(function () {
  $(document).on('click', ".lines-button", function () {
    $('.lines-button').addClass('close');
  });
  $(document).on('click', ".lines-button.close", function () {
    $('.lines-button').removeClass('close');
  });
  $('#logo').click(function () {
    $(".header-section").toggleClass("header-color");
  })

});
function changeImg() {
  var logo = document.getElementById("menu-logo");
  if (logo.getAttribute('src') == "./Assets/WebLogoBlue.png") {
    logo.src = "./Assets/logo.png";
  } else {
    logo.src = "./Assets/WebLogoBlue.png";
  }
}
