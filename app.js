// session Storage
// clickys 
// local storage
let totalScore
let x

// global variables that will be used as the questions 
let yard40 = ['what position did jim brown play', 'what pro wrestler and movie star wnated to play pro', 'who played pro football and baseball', 'who was the mvp last year', 'who was charged with murder at freaknik']
let yard20 = ['how many points are a touchdown worth', 'what color is a football', 'how ,any yards are there in a football field', 'how many teams are in the nfl', 'how many players can be on a football field']
let yard60 = ['What NFL team is owned by two familys related by marriage ', 'What round did the greatest quarterback of all time get drafted', 'What college did terrell owens go to', 'how many superbowls have Tom Brady won ', 'What is the name of Quarterback run play right up the middle']
let yard80 = ['How many of the five Dallas teams Tom Landry took to Super Bowls were victorious', 'What NFL team introduced the no-huddle offense during the 1980s', 'What quarterback got stuck with the given names Yelberton Abraham', 'What Baltimore Colts great led the NFL in passing in the 1960s, with 26548 yards', 'What Pittsburgh Steelers great was the first wide receiver to be named super Bowl MVP']
let yard100 = ['What Native American language was Super Bowl30 the first to be broadcast in?', 'What Cowboys 99-yard run from scrimmage put him in the NFL football record book in 1983?',
    'What team hired the NFLs first professional cheerleading squad, in 1972?', 'Who was the first athlete to rap at a Pro Bowl musical gala', 'What famous trick play did the phidelphia eagles run in the superbowl win']
let answer20 = ['Six', 'One', 'Megatron', 'Three', 'Falcons']
    let answer40 = ['Running Back', 'The Rock', 'Primetime', 'Patrick Mahommes', 'Ray Lewis']
let answer60 = ['Giants and Steelers ', '199', 'University Of Tennessee At Chattanooga', 'Six', 'QB Sneak']
let answer80 = ['Two', 'Cincinnati Bengals ', 'Y.A. Tittle.', 'Johnny Unitas', 'Lynn Swan']
let answer100 = ['Navajo', 'Tony Dorsetts', 'Dallas Cowboys', 'Deion Sanders', 'Philly Special']
// let p = Math.floor((Math.random() * 15) );
// let i = Number(p)

// function generateQuestion(){ 
// Math.floor((Math.random() * 15) );
// RandoArr = [generateQuestion()]
// return RandoArr;
// }
let wrongA = 0
// Modal question  function appears  
//comparing html of the div upon its intial click and the  depending on the value posting a question.
function MakeModalAppear() {
    $(document).ready(function () {
        $(".box").click(function () {
            x = $(this).html()
            let p = Math.floor((Math.random() * 5));
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

            if (wrongA >= 3) {
                window.alert("You  lost the SEI SUPERBOWL")
                console.log("why cant i lose!!!")
                wrongA=0
                win=0
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

//makes the answer modal appear  as well as make the question modal dissappeard
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
        let oldscore = 0
        p = 0 + Number(x)
        totalScore = Number(x) + Number(e)
        console.log(l, j,n)


        if (l == n) {

            console.log('your right we almost done with the project')
            $('#answer-modal').css({
                "display": "none",
            })
            console.log(f, x, e, totalScore, l, n)

            console.log(totalScore)


            $('#answer-title').html(totalScore)
            $('#score').html(totalScore)

        }

        if (e >= 300) {
            window.alert("You  won  the SEI SUPERBOWL")
            console.log("why cant i lose!!!")
        }



        if(l!==n) {
            $('#answer-modal').css({
                "display": "none",
            })
            wrongA++
            console.log(wrongA)
            $('img').remove()

        }


    })
}
//function used to start the end of the game hold an if statment
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
