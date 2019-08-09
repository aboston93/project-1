// session Storage
// clickys 
// local storage

// global variables that will be used as the questions 
let questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let p = Math.floor((Math.random() * 15) + 1);

let i = Number(p)
// Modal question  function appears 
// function MakeModalApper() {
$(".box").click(function () {
    $('#question-modal').css({
        "display": "block",
    })
    

    $('.box').html(questions[i])
    $('#question-title').html(questions[i])
    $()
    console.log(i, questions)
})
// }
// function MakeQModalApper(){
$("#Question-button").click(function () {
    $('#answer-modal').css({
        "display": "block",
    })
    $('#question-modal').css({
        "display": "none",
    })


    $('.box').html(questions[i])
    $('#answer-title').html(questions[i])
    
    console.log(i, questions)
})
// }


// make the divs be populated with the answers


// compare question to answers

// Point divs need to dissappear in after being answerd


// Total points need to be confirmed  

// total score needs to be confirmed 

// once the total score meets 3 the game needs to notify player 


// 


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