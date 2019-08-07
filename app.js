function questionSelection() {
    $( "box" ).click(function() {
       $('modalBox').show()
     
     let question =  $('box').html()
     console.log(question)
    })}
      
      
      
      
      
      
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