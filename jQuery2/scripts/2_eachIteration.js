// alert("js started")
$(function(){
   $("#btn").click(function(){
       // alert("clicked") ;
       $("td:nth-of-type(2)").each(function(i){
           // this : DOM element this.style.color
           // $(this) : convert from DOM to jQuery 
           if ( $(this).text() < 50 ) {
               $(this).after("<td>FAIL</td>")
                      .next()
                      .css("background", "red")
                      .siblings()
                      .css("background", "#F99") 
           } else {
                    $(this).after("<td>PASS</td>")
                    .next()
                    .css("background", "green")
                    .siblings()
                    .css("background", "#9F9")
           }
       })
   })
})