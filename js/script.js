// What we do toggling
$(document).ready(function(){
  $("#design-img").click(function(){
      $("#design-text").show() && $("#design-img").hide() && $("#head1").hide();
  });
  $("#design-text").click(function(){
      $("#design-text").hide() && $("#design-img").show() && $("#head1").show();
  });
  $("#development-img").click(function(){
      $("#development-text").show() && $("#development-img").hide() && $("#head2").hide();
  });
  $("#development-text").click(function(){
      $("#development-text").hide() && $("#development-img").show() && $("#head2").show();
  });
  $("#product-img").click(function(){
      $("#product-text").show()&&  $("#product-img").hide() && $("#head3").hide();{
      }
  });
  $("#product-text").click(function(){
      $("#product-text").hide() && $("#product-img").show() && $("#head3").show();
  });


});
