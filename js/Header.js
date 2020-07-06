$(document).ready(function () {
  $(document).on('click', ".lines-button", function () {
    $('.lines-button').addClass('close');
  });
  $(document).on('click', ".lines-button.close", function () {
    $('.lines-button').removeClass('close');
  });
  $('#logo').click(function () {
    $(".overlay-div ").toggleClass("header-color");
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
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#menu-logo').attr('src', './Assets/WebLogoBlue.png');
      $('#main img').attr('src', './Assets/WebLogoBlue.png');
      $('.openbtn').addClass('close-btn');
      $('#main').addClass('active');
      $('.navbar').addClass('active')
    }
    if ($(this).scrollTop() < 50) {
      $('#menu-logo').attr('src', './Assets/logo.png');
      $('#main img').attr('src', './Assets/logo.png');
      $('.openbtn').removeClass('close-btn');
      $('#main').removeClass('active');
      $('.navbar').removeClass('active')
      console.log('hello')

    }
  })
});

function openNav() {
  document.getElementById("mySidebar").style.width = "325px";
  document.getElementById("main").style.marginright = "325px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginright = "0";
}
