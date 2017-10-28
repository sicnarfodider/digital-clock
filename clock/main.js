var segmentPseudoSelectors = [
  [1,2,4,5,6,7],
  [2,4],[1,2,3,7,5],
  [1,2,3,4,5],
  [6,3,2,4],
  [1,6,3,4,5],
  [1,6,7,5,4,3],
  [1,2,4],
  [1,2,3,4,5,6,7],
  [1,2,6,3,4]
];


function displaySegmentsForNumber(hostElement, number){
  $(hostElement).find('.segment').hide();
  var segments = segmentPseudoSelectors[number];
  for(var i=0; i<segments.length; i++){
    $(hostElement).find('.segment:nth-child('+segments[i]+')').show();
  }
}
var currentOpacity = 1;
function updateTime(){
  currentOpacity = 1 - currentOpacity;
  $(".colon").css('opacity',currentOpacity);
  var currentDate= new Date;
  debugger;
  var currentHour = currentDate.getHours();
  var currentMin = currentDate.getMinutes();
  var currentMil = currentDate.getSeconds();
  if(currentHour<10){
    currentHour = "0"+currentHour; 
  } else if(currentMin<10){
    currentMin = "0"+currentHour;
  } else if(currentMil<10){
    currentMil = "0"+currentMil;
  }
  var combined = ""+currentHour+currentMin+currentMil;
  for (i=0;i<combined.length;i++){
    var nthNumber = i+1;
    var parentDiv = $(".digit:nth-of-type("+ nthNumber +")");
    var parsedNumber = parseInt(combined[i])
    var number=segmentPseudoSelectors[parsedNumber];
    displaySegmentsForNumber(parentDiv, parsedNumber);
    }
}
  // get the current date object
  //get the hours, minutes, and seconds.
  //check to make sure each is 2 digits, if not, add a 0 onto the end
  //for example, 8 becomes 08
  //combine the time together so you can go through each digit, 1 at a time with a for loop
    //for each digit in the time, call displaySegmentsForNumber
    //pass the container digit in as the first parameter.  This is the parent of the LED segments for 1 number
    //pass in the number into the 2nd parameter.  This is the digit to display


setInterval(updateTime,1000)