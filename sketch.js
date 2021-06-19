var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
var questionResultBorder, scoreBorder;


function setup(){
  canvas = createCanvas(850,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  // questionResultBorder = createSprite(380, 440, 300, 120);
  // questionResultBorder.shapeColor = 255, 255, 255, 0;
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  // drawSprites();
}
