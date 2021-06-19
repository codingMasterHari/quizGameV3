class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play() {
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Quiz Answers!",340, 50);
    text("----------------------------",296, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      var answersYPosition = 370;
      var scoreYPosition = 400;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,370);

      for(var plr in allContestants){
        var correctAns = "2";
        var score = 0;
        if (correctAns === allContestants[plr].answer) {
          fill("Green");
          score += 10
        } else {
          fill("red");
          score += 0;
        }

        answersYPosition+=30;
        textSize(20);

        text(allContestants[plr].name + " Q1" + ": " + allContestants[plr].answer, 320,answersYPosition);
        
        var correctAns2 = "3";
        if (correctAns2 === allContestants[plr].answer2) {
          fill("Green");
          score+=10;
        } else {
            fill("red");
            score -= 0;
        }

        answersYPosition+=30;
        scoreYPosition+=25;
        textSize(20);
       
        text(allContestants[plr].name + " Q2" + ": " + allContestants[plr].answer2, 320,answersYPosition);
        fill("black");
        text(allContestants[plr].name + " score: " + score, 320, scoreYPosition+90);
      }
    }
  }
}
