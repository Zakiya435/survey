var form, voter, survey;
var count = 0;
var question_1, question_2, question_3, question_4;
var email;
var question1, question2, question3, question4;
var database;
var form_input, submit, title, greeting;
var question_1_value, question_2_value, question_3_value, question_4_value
var voterEmailList = [];
var vote1 = [];
var vote2 = [];
var vote3 = [];
var vote4 = [];

function setup() {
  createCanvas(displayWidth,displayHeight);
 // var database = firebase.database();

  title = createElement('h1');
  title.html("Survey For School");
  title.position(displayWidth/2 - 50, displayHeight/2  - 350);

  greeting = createElement('h2');
  greeting.html("Hello! This is a survey for a few questions");
  greeting.position(displayWidth/2 - 150, displayHeight/2 - 250);

  question1 = createElement('h3', "Should we have free lunch for the poor?");
  question_1 = createRadio();
  question_1.option("YES");
  question_1.option("NO");
  question_1_value = question_1.value();
  question_1.position(displayWidth/2 - 30, displayHeight/2 + 10)
  question1.position(displayWidth/2 - 100, displayHeight/2 - 50)

  question2 = createElement('h3', "Should there be A.C in classes?");
  question_2 = createRadio();
  question_2.option("YES");
  question_2.option("NO");
  question_2_value = question_2.value();
  question2.position(displayWidth/2 - 100, displayHeight/2 + 50)
  question_2.position(displayWidth/2 - 30, displayHeight/2 + 110)

  question3 = createElement('h3', "Are you willing to pay for these things?");
  question_3 = createRadio();
  question_3.option("YES");
  question_3.option("NO");
  question_3_value = question_3.value();
  question3.position(displayWidth/2 - 100, displayHeight/2 + 150)
  question_3.position(displayWidth/2 - 30, displayHeight/2 + 230)

  question4 = createElement('h3', "How much money?");
  question_4 = createRadio();
  question_4.option("500/-");
  question_4.option("1000/-");
  question_4_value = question_4.value();
  question4.position(displayWidth/2 - 100, displayHeight/2 + 270)
  question_4.position(displayWidth/2 - 30, displayHeight/2 + 330)

  email = createElement("h3");
  email.html("Your Email Id: ");
  email.position(displayWidth/2 - 70, displayHeight/2 + 400);
  email_input  = createInput();
  email_input.position(displayWidth/2 - 130, displayHeight/2 + 450)

  submit = createButton("Submit");
  submit.position(displayWidth/2 - 70, displayHeight/2 + 520);
}
function draw() {
  background(160,160,160);  
  drawSprites();
  submit.mousePressed(() => {

  vote1.push(question_1.value());
  vote2.push(question_2.value());
  vote3.push(question_3.value());

  voterEmailList.push(email_input.value());

  question_1_vote();
  question_2_vote();
  question_3_vote();
  question_4_vote();

  count = count + 1;
  updateVoterCount();
  updateInputEmail();  
})
  
}



  function question_1_vote() {
    database.ref('question1').update({
      vote: vote1
    })
  }
  function question_2_vote() {
    database.ref('question2').update({
      vote: vote2
    })
  }
  function question_3_vote() {
    database.ref('question3').update({
      vote: vote3
    })
  }
  function question_4_vote() {
    database.ref('question4').update({
      vote: vote4
    })
  }

function updateInputEmail() {
  database.ref('email').update({
    voterEmail: voterEmailList
  })
}

function updateVoterCount() {
  database.ref('votersCount').update({
    voterCount: count
  })
}