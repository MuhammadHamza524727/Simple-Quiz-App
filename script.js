//yhn me quiz app start krne k liye y ki requirement rkhra hn

var startQuiz = prompt("Start Quiz App press Y");
if (startQuiz === "y") {
  var questions = [
    "Question 1:\n What is the correct way to declare a variable in JavaScript? \n A) var myVar \n B) variable myVar \n C) decl myVar \n D) myVar: variable",
    "Question 2:\n Which of the following data types is NOT a primitive data type in JavaScript? \n A) String \n B) Number \n C) Object \n D) Boolean",
    "Question 3:\n What will the following code output: console.log(typeof null);? \n A) object \n B) null \n C) undefined \n D) number",
    "Question 4:\n Which method is used to convert a JSON string into a JavaScript object? \n A) JSON.stringify() \n B) JSON.parse() \n C) JSON.convert() \n D) JSON.objectify()",
    "Question 5:\n What does the === operator do in JavaScript? \n A) Checks for equality and type \n B) Checks for equality only \n C) Checks for type only \n D) Assigns a value",
  ];
// veriable declare kia hai
  var answers = ["a", "b", "c", "d", "e"];
  var a = "A) var myVar";
  var b = "C) Object";
  var c = "A) object";
  var d = "B) JSON.parse()";
  var e = "A) Checks for equality and type";

  let correctCount = 0;
  let wrongCount = 0;

  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);

    if (userAnswer === answers[i]) {
      correctCount++;
      alert("Correct!");
    } else {
      wrongCount++;
      alert("Wrong! The correct answer is: " + answers[i]);
    }
  }

  let totalScore = correctCount;

  alert("You got " + totalScore + " out of " + questions.length + " correct!");

  if (totalScore === questions.length) {
    alert("Grade: A - Excellent!");
  } else if (totalScore >= questions.length * 0.8) {
    alert("Grade: B - Good job!");
  } else if (totalScore >= questions.length * 0.5) {
    alert("Grade: C - You passed.");
  } else {
    alert("Grade: D - Better luck next time.");
  }
} else {
  alert("Wrong Key please Enter F5 to reload Page");
}
