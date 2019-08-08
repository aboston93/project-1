// function for the modal that allows it to work and  appear when div is clicked
let questions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let answers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let p=Math.floor((Math.random() * 15) + 1);

let i =Number(p)




    $( ".box" ).click(function() {
       $('#question-modal').css({
        "display": "block",})
      
       let question =  $('.box2').html()
     console.log(i,question)
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