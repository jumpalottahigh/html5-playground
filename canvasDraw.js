"use strict()";

$('#one').css('background-color', '#50cffa');
$('#two').css('background-color', '#13cdaa');

var context = $('#myCanvas')[0].getContext("2d");
var context2 = $('#myCanvas2')[0].getContext("2d");
//context.font="30px Georgia";
//context.strokeText("Hello!", 50, 50);

var x = 500;
var y = 500;

var x2 = 0;
var y2 = 0;

var random = 0;

context.beginPath();
context.moveTo(x, y);

context2.beginPath();
context2.moveTo(x2,y2);


//Draw in canvas one
for (var i = 0; i < 5000; i++) {
  random = Math.random();

  if(random < 0.25){
    y -= 15;
  } else if (random <0.5){
    y += 15;
  } else if (random <0.75){
    x -= 25;
  } else if (random < 1) {
    x += 25;
  }

  context.lineTo(x,y);

}

context.strokeStyle="#a6a";
context.stroke();

//Draw in canvas two
for (var i = 0; i < 5000; i++) {
  random = Math.random();

  if(random < 0.5){
    x2 += 5;
  } else {
    y2 += 5;
  }

  context2.lineTo(x2,y2);

}

context2.strokeStyle="#f22";
context2.stroke();
