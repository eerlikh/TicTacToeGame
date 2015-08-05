console.log("script loaded!")

//$( ".box" ).click(function() {
//   console.log('yay');
//   $( "p" ).toggle();
// });

//$("#foo").append("<div>hello world</div>")
//
// $(".box").on( "click", function() {
//         alert('works');
// });
// //
// $(document).ready(function() {
//     $(".overview-continued").hide();
//
//     setState();
//
//     $(".show-overview").click(function() {
//         $(".overview-continued").slideToggle("1000");
//         setState();
//         return false;
//     });
//
//     function setState() {
//         var control = $(".show-overview");
//         var state = control.attr("data-item-state");
//
//         control.html(state == "showLess" ? "more..." : "less...");
//         control.attr("data-item-state", state == "showLess" ? "showMore" : "showLess");
//     };
// });
  function changeState(){
    var control = $(".box");
    control.html("X" : "O");
  }
