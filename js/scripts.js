$(document).ready(function() {
  $(".clickable").click(function() {
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
    $("#design").show();
  });
  $(".click").click(function() {
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
    $("#development").show();
  });
  $(".clic").click(function() {
    $(".product-management-showing").toggle();
    $(".product-management-hidden").toggle();
    $("#product-management").show();
  });
});