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
//Contact secion


// portfolio section
$(document).ready(function(){
    var portfolio =[{name:"task1",info:"remo1"},{name:"task2",info:"remo2"},{name:"task3",info:"remo3"},{name:"task4",info:"remo4"},{name:"task5",info:"remo5"},{name:"task6",info:"remo6"},{name:"task7",info:"remo7"},{name:"task8",info:"remo8"}];
    portfolio.forEach(function(ride){
        $("#" +ride.name).mouseover(function(){
            $("#"+ride.info).show();
        }).mouseout(function(){
            $("#"+ride.info).hide();
        });
    })
});
