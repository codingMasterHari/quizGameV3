class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.input3 = createInput("Enter Correct Option No..");
    this.question = createElement('h3');
    this.ques2tion = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.option21 = createElement('h4');
    this.option22 = createElement('h4');
    this.option23 = createElement('h4');
    this.option24 = createElement('h4');
    this.button = createButton('Submit');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.input3.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question 1:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.ques2tion.html("Question 2:- What is the answer to this easy question: 8 ÷ 2 (2 + 2) " );
    this.ques2tion.position(150, 210);
    this.option21.html("1: 1" );
    this.option21.position(150, 230);
    this.option22.html("2: 3" );
    this.option22.position(150, 250);
    this.option23.html("3: 16" );
    this.option23.position(150, 270);
    this.option24.html("4: 9" );
    this.option24.position(150, 290);

    this.input1.position(350, 70);
    this.input2.position(150, 210);
    this.input3.position(150, 360);
    this.button.position(390, 400);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestant.answer2 = this.input3.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
