$(document).ready(function(){
  var Random=Math.floor(Math.random()*101)
  
  // Selects a random number to be shown at the start of the game
  // Number should be between 1-100

  $("#randomNumber").text(Random);
  
  // Append random number to the randomNumber id in html
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  // Set up random numbers for each jewel
  // Random number set between 1 - 12
  // 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  
//Set variables for wins and losses using id's from above
$("#numWins").text(wins);
$("#numLosses").text(losses);

//reset game
function reset(){
      Random=Math.floor(Math.random()*101);
      $("#randomNumber").text(Random);
      userTotal= 0;

//add losses to user's score
function loss(){
alert ("You lose!");
  losses++;
  $("#numberLosses").text(losses);
  reset()
}

//add wins to user's score
function winner(){
alert("winner!");
  wins++; 
  $("#numberWins").text(wins);
  reset();
}

//set up click function for each jewel
  $("#one").on ("click", function(){
    userTotal = userTotal + num1;
    $("#finalTotal").text(userTotal); 

//set win and loss conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loss();
        }   
  })  
  $("#two").on ("click", function(){
    userTotal = userTotal + num2;
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loss();
        } 
  })  
  $("#three").on ("click", function(){
    userTotal = userTotal + num3;
    $("#finalTotal").text(userTotal);

//set win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if (userTotal > Random){
          loss();
        } 
  })  
  $("#four").on ("click", function(){
    userTotal = userTotal + num4;
    $("#finalTotal").text(userTotal); 
      
      if (userTotal == Random){
          winner();
        }
        else if (userTotal > Random){
          loss();
        }
  });   
}); 