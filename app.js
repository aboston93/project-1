// session Storage
// clickys 
// local storage


// global variables that will be used as the questions 
let questions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let answers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard20
let yard40
let yard60
let yard80
let TD
// let p = Math.floor((Math.random() * 15) + 1);
// let i = Number(p)
// Modal question  function appears 
function MakeModalAppear(modalQuestions) {
    $(".box").click(function () {
        $('#question-modal').css({
            "display": "block",
        })
        console.log('im inside make modal appear')

        $('.box').html(modalQuestions)
        console.log(modalQuestions)

        $('#question-title').html(modalQuestions)
        MakeAModalAppear()
    })

}


function MakeAModalAppear(modalAnswers) {
    $("#answer-button").click(function () {
        $('#answer-modal').css({
            "display": "block",
        })
        $('#question-modal').css({
            "display": "none",
        })


        $('.box').html(modalAnswers)
        $('#answer-title').html(modalAnswers)

        console.log(modalAnswers)
    })
}
for (let i = 0; i < 15; i++) {
    MakeModalAppear(questions[i])
    //
    // MakeAModalAppear(answers[i])
}

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
