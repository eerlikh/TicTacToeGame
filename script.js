$(document).ready(function() {
  console.log("script loaded!")

  function playerOneLogic(){

    // logic for 9 different boxes

        $('.box, .One').click(function() {
            $('.rowOneColOneX').toggle();
        });

        $('.box, .Two').click(function() {
            $('.rowTwoColOneX').toggle();
        });

        $('.box, .Three').click(function() {
            $('.rowTwoColOne').toggle();
        });





  }



playerOneLogic();
});



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
//   function changeState(){
//     var control = $(".box");
//     console.log(control);
//     if(control==" "){
//       control.html("X");
//     } else if(control=="X"){
//       control.html("O");
//     } else if(control=="0"){
//       control.html(" ");
//   }
// };

//   jQuery.fn.extend({
//   toggleText: function (a, b){
//       var isClicked = false;
//       var that = this;
//       this.click(function (){
//           if (isClicked) { that.text(a); isClicked = false; }
//           else { that.text(b); isClicked = true; }
//       });
//       return this;
//   }
// });
//
// $('.box').toggleText("X", "O");
//
