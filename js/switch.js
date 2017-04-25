$(document).ready(function(){
  $(".introduction-img-list img").click(function(){
    $(".selected-img img").attr("src",$(this).attr("src").replace("_eye",""));
    $(".introduction-img-list img").css("opacity", "0.5");
    $(this).css("opacity", "1");

  });


});
