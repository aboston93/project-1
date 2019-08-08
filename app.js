
    $( ".box" ).click(function() {
       $('#question-modal').css({
        "display": "block",
    });
     
     let question =  $('.box2').html()
     console.log(question)
    })
      
      
      
      
      
      
//       $( "button" ).click(function() {
//         if ( p ) {
//           p.appendTo( "body" );
//           p = null;
//         } else {
//           p = $( "p" ).detach();
//         }
//       });
//     return editButton;
//   }