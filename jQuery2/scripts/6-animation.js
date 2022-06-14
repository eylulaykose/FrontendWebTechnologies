$(function () {
   // Init function
   $("button:first").click(function () {
      $("p:first").show(1000);
      $("p:first").fadeIn(1000);
      //$("p:first").text("SlideDown Effect...").slideDown(1000) ;
   })

   $("button:eq(1)").click(function () {
      // $("p:first").hide(1000) ;
      // $("p:first").fadeOut(1000) ;
      $("p:first").text("SlideUp Effect...").slideUp(1000);
   })

   $("button:eq(2)").click(function () {
      // $("p:first").toggle(1000) ;
      // $("p:first").fadeToggle(1000) ;
      $("p:first").text("toggle Slide Effect...").slideToggle(1000);
   })

   $("button:eq(3)").click(function () {
      $(this).attr("disabled", true)

      $("p#composite").fadeIn(2000)
         .delay(1000)
         .fadeOut(1000, function () {
            // at the end of the animation, do the following
            // enable button again.
            $("button:eq(3)").attr("disabled", false)
         });
   })

   $("button:eq(4)").click(function () {
      $("button:eq(4)").attr("disabled", true);
      $("#custom").animate({ fontSize: "50px", opacity: 1 }, 1000)
         .delay(1000)
         .animate({ left: "-=400px", opacity: 0 }, 500)
         .animate({ left: "+=400px", opacity: 1 }, 500)
         .animate({ color: "#F00" }, 1000)
         .animate({ fontSize: "20px", opacity: 0 }, 1000,
            function () {
               $("p:first").fadeIn(1000).fadeOut(500);
            })
   })
})