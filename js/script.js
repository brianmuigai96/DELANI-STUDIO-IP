          $(document).ready(function()
         {$(".time").hover(function()
         {$(this).animate({"opacity":0.3},500)
         },
         function()
         {$(this).animate({"opacity":1},500)});
         });


         $("#design-img").click(function(){
             $(".design-text").show() && $("#design-img").hide() && $("#head1").hide();
         });
         $("#design2").click(function(){
             $("#design2").hide() && $("#fig1").show() && $("#caption1").show();
         });
         $("#fig2").click(function(){
             $("#development2").show() && $("#fig2").hide() && $("#caption2").hide();
         });
         $("#development2").click(function(){
             $("#development2").hide() && $("#fig2").show() && $("#caption2").show();
         });
         $("#fig3").click(function(){
             $("#productmanagement2").show()&&  $("#fig3").hide() && $("#caption3").hide();{
             }
         });
         $("#productmanagement2").click(function(){
             $("#productmanagement2").hide() && $("#fig3").show() && $("#caption3").show();
         });
