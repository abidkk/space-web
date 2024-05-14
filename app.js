$(document).ready(function () {
  $(".membership-btn-team").click(function () {
    // $(".membership-tool--body").toggle();
    $(".membership-tool--body").show(); // Shows
    $(".membership-btn-remote,.membership-btn-solo").removeClass("active-tab");

    $(this).addClass("active-tab");
  });

  $(".membership-btn-solo").click(function () {
    $(".membership-btn-team,.membership-btn-remote").removeClass("active-tab");
    $(this).addClass("active-tab");
    $(".membership-tool--body").hide(); // hide 
  });

  $(".membership-btn-remote").click(function () {
    $(".membership-btn-team,.membership-btn-solo").removeClass("active-tab");
    $(".membership-tool--body").hide(); // hide 
    $(this).addClass("active-tab");
  });
});
