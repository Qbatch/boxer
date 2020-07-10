$(() => {
  $(window).scroll(() => {
    if ($(this).scrollTop() > 50) {
      $("#menu-logo").attr("src", "./Assets/WebLogoBlue.png");
      $("#main img").attr("src", "./Assets/WebLogoBlue.png");
      $(".openbtn").addClass("close-btn");
      $("#main").addClass("active");
      $(".navbar").addClass("active");
    }
    if ($(this).scrollTop() < 50) {
      $("#menu-logo").attr("src", "./Assets/logo.png");
      $("#main img").attr("src", "./Assets/logo.png");
      $(".openbtn").removeClass("close-btn");
      $("#main").removeClass("active");
      $(".navbar").removeClass("active");
    }
  });
});
const openNav = () => {
  document.getElementById("mySidebar").style.width = "325px";
  document.getElementById("main").style.marginright = "325px";
};
const closeNav = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginright = "0";
};
