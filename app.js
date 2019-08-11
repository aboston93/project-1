// session Storage
// clickys 
// local storage


// global variables that will be used as the questions 
let questions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let answers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard20 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard40 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard60 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard80 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let yard100 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
let p = Math.floor((Math.random() * 15) + 1);
let i = Number(p)
l = $('#user').val()

// Modal question  function appears 
function MakeModalAppear() {
    $(".box").click(function () {
        x = $(this).html()
        console.log(x)
if(x==20){
 $('#question-title').html(yard20[i]) 
 console.log("blah")
}

if(x==40){
    $('#question-title').html(yard40[i]) 
    console.log("your 40")
   }
   if(x==60){
    $('#question-title').html(yard60[i]) 
    console.log("your 60")
   }
   if(x==80){
    $('#question-title').html(yard80[i]) 
    console.log("your 80")
   }
   if(x==="100"){
    $('#question-title').html(yard100[i]) 
    console.log("your TD")
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
     } )

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
submitAnswer()
        console.log(modalAnswers)
    })
}

function submitAnswer(){
    $("#confirm-button").click(function () {
       l = $('#user')
        if(l==x){
            $('#question-title').html(yard20[i]) 
            console.log('your right we almost done with the project')
           }
           
           if(x==40){
               $('#question-title').html(yard40[i]) 
               console.log("your right 40")
              }
              if(x==60){
               $('#question-title').html(yard60[i]) 
               console.log("your  right 60")
              }
              if(x==80){
               $('#question-title').html(yard80[i]) 
               console.log("your rihgt  80")
              }
              if(x==="100"){
               $('#question-title').html(yard100[i]) 
               console.log("your 90 TD")
              }
              $('body'.append('<h1></h1>'));

})}

MakeModalAppear()
    //
    MakeAModalAppear()


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
