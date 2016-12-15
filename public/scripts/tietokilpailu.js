var correctAnswers = 0;
var questionsAnswered = 0;

function loadQuiz(){
  $('#ukkokoli-container').addClass('hidden');
  $('#quiz-container').removeClass('hidden');
  $('#userGreeting').text('Time to test your knowledge ' + user.name + '!');
  if(user.quizSeen === false){
    $('#quiz-start-modal').modal('show');
    user.quizSeen = true;
  }
  initMap();
}



$(document).ready(function(){
  //$('#user').text(user.name);
  //$('#question').append(', ' + user.name + '?');
  $('#question1').hover(function(){
    $('#box1').removeClass("hidden");
    },function(){
    $('#box1').addClass("hidden"); 
  });
  $('#question2').hover(function(){
    $('#box2').removeClass("hidden");
    },function(){
    $('#box2').addClass("hidden"); 
  });
  $('#question3').hover(function(){
    $('#box3').removeClass("hidden");
    },function(){
    $('#box3').addClass("hidden"); 
  });
  $('#question4').hover(function(){
    $('#box4').removeClass("hidden");
    },function(){
    $('#box4').addClass("hidden"); 
  });
  $('#question5').hover(function(){
    $('#box5').removeClass("hidden");
    },function(){
    $('#box5').addClass("hidden"); 
  });
  $('#question6').hover(function(){
    $('#box6').removeClass("hidden");
    },function(){
    $('#box6').addClass("hidden"); 
  });
  $('#question7').hover(function(){
    $('#box7').removeClass("hidden");
    },function(){
    $('#box7').addClass("hidden"); 
  });
  var summary = $("<h2></h2>").text("Questions answered " + questionsAnswered + "/7");
  $('#summary').append(summary);
})

function initMap() {
  var map;
  var location = {lat: 63.094444, lng: 29.825745};
  map = new google.maps.Map(document.getElementById('map'), {
    //Kartan keskipisteen sijainti
    center: location,
    //Kartan zoomaus
    zoom: 8
  });
}

function showQuizIntro(){
  $('#quiz-start-modal').modal('show');
}

function checkQ1() {
  if($("#q1Answer2").is(":checked") == true){
    $('#question1').css("background-color","limegreen");
    correctAnswers++;
  }else{
    $('#question1').css("background-color","firebrick");
  }
  questionsAnswered++;
  addSummary();
  $('#box1').remove();
  
}

function checkQ2() {
  if($("#q2Answer1").is(":checked") == true){
    $('#question2').css("background-color","limegreen");
    correctAnswers++;
  }else{
    $('#question2').css("background-color","firebrick");
  }
  questionsAnswered++;
  addSummary();
  $('#box2').remove();
}

function checkQ3() {
  if($("#q3Answer3").is(":checked") == true){
    $('#question3').css("background-color","limegreen");
    correctAnswers++;
  }else{
    $('#question3').css("background-color","firebrick");
  }
  questionsAnswered++;
  addSummary();
  $('#box3').remove();
}

function checkQ4() {
  if($("#q4Answer1").is(":checked") == true){
    $('#question4').css("background-color","limegreen");
    correctAnswers++;
  }else{
    $('#question4').css("background-color","firebrick");
  }
  questionsAnswered++;
  addSummary();
  $('#box4').remove();
}

function checkQ5() {
  if($("#q5Answer2").is(":checked") == true){
    $('#question5').css("background-color","limegreen");
    correctAnswers++;
  }else{
    $('#question5').css("background-color","firebrick");
  }
  questionsAnswered++;
  addSummary();
  $('#box5').remove();
}

function checkQ6() {
  if($("#q6Answer2").is(":checked") == true){
    $('#question6').css("background-color","limegreen");
    correctAnswers++;
  }else{
    $('#question6').css("background-color","firebrick");
  }
  questionsAnswered++;
  addSummary();
  $('#box6').remove();
}

function checkQ7() {
  if($("#q7Answer2").is(":checked") == true){
    $('#question7').css("background-color","limegreen");
    correctAnswers++;
  }else{
    $('#question7').css("background-color","firebrick");
  }
  questionsAnswered++;
  addSummary();
  $('#box7').remove();
}

function addSummary(){
  $('#summary').empty();
  var summary = $("<h2></h2>").text("Questions answered " + questionsAnswered + "/7");
  $('#summary').append(summary);
  $('#correctAnswers').empty();
  var correctAnswerSummary = $("<h2></h2>").text("Correct answers " + correctAnswers);
  $('#correctAnswers').append(correctAnswerSummary);
  var percentage = Math.floor((questionsAnswered / 7) * 100);
  $('#quiz-progress').css('width', percentage + '%');

  if(questionsAnswered === 7){
    if(correctAnswers > 5){
      $('#quiz-summary').text("You surely have learned something new during this game! Good job! Make sure to pay a visit at Koli in your future!");
    }
    else if(correctAnswers <= 5 && correctAnswers > 2) {
      $('#quiz-summary').text("Seems like you managed to obtain some knowledge during this game! Keep it up! Make sure to pay a visit at Koli in your future!");
    }
    else {
      $('#quiz-summary').text("Questions were kind of hard, but better luck next time! Make sure to pay a visit at Koli in your future!");
    }
    $('#end-greeting').text('Thank you for playing ' + user.name + '!');
    $('#quiz-summary-modal').modal('show');
  }
}


