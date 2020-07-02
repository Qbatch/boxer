$(document).ready(function () {
  $(document).on('click', ".lines-button", function () {
    $('.lines-button').addClass('close');
  });
  $(document).on('click', ".lines-button.close", function () {
    $('.lines-button').removeClass('close');
  });
});
