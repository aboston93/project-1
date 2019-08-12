// session Storage
// clickys 
// local storage
let totalScore
let x
// global variables that will be used as the questions 
let questions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let answers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard20 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard40 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard60 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard80 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard100 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let answer20 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let answer40 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let answer60 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let answer80 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let answer100 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
// let p = Math.floor((Math.random() * 15) );
// let i = Number(p)

// function generateQuestion(){ 
// Math.floor((Math.random() * 15) );
// RandoArr = [generateQuestion()]
// return RandoArr;
// }

// Modal question  function appears  
//comparing html of the div upon its intial click and the  depending on the value posting a question.
function MakeModalAppear() {
    $(document).ready(function () {
        $(".box").click(function () {
        x= $(this).html()
            let p = Math.floor((Math.random() * 15) );
             let i = Number(p)
            $(this).append('<img src="Untitled.png">')
            console.log(x)
            if (x == 20) {
                $('#question-title').html(yard20[i])
                n = answer20[i]
                console.log("blah")
            }

            if (x == 40) {
                $('#question-title').html(yard40[i])
                console.log("your 40")
                n = answer40[i]

            }
            if (x == 60) {
                $('#question-title').html(yard60[i])
                console.log("your 60")
                n = answer60[i]

            }
            if (x == 80) {
                $('#question-title').html(yard80[i])
                console.log("your 80")
                n = answer80[i]

            }
            if (x == 100) {
                $('#question-title').html(yard100[i])
                console.log("your TD")
                n = answer100[i]

            }

            $('#question-modal').css({
                "display": "block",
            })
            console.log('im inside make modal appear')
            console.log()
            $('.box').html()
            console.log()

            $('#question-title').html()
            MakeAModalAppear()
           
        })
    }
    )
}


function MakeAModalAppear() {
    $("#answer-button").click(function () {
        $('#answer-modal').css({
            "display": "block",
        })
        $('#question-modal').css({
            "display": "none",
        })


        $('.box').html()
        $('#answer-title').html()
      
        console.log()
    })
}
// creates the submit button that that allows the 
// user to check the value of 
// the input anc check the answer
function submitAnswer() {
    
    $("#confirm-button").click(function () {
        l = $('#user').val()
        j = $('#question-title').html()
        f = $('#answer-title').html()
        e = $('.scoreb').html()
        let oldscore=0
         p = 0 + Number(x)
         totalScore=Number(x)+Number(e)
        console.log(l, j)


        if (l == n) {
        
            console.log('your right we almost done with the project')
            $('#answer-modal').css({
                "display": "none",
            })
            console.log(f, x, e,totalScore,l,n)
        
console.log(totalScore)
           
           
            $('#answer-title').html(totalScore)
           
        }


        else {
            $('#answer-modal').css({
                "display": "none",
            })

            $('img').remove()

        }


    })
}

function finishedGame() {

    $("#confirm-button").click(function () {
      
        // if (totalScore >= 300) {
        //     window.alert('You have won the SEI SUPERBOWL!!')
        // }
    }
    )
}
MakeModalAppear()
//
MakeAModalAppear()
submitAnswer()
finishedGame()
// for (let i = 0; i < 15; i++) {
//     MakeModalAppear()
//     //
//     MakeAModalAppear()
// }

// if(Number($(this)=20)){

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
