const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";



//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let userName = input.question("Enter Your name here: ");
candidateName += userName
}

function askQuestion() {
 // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//   let firstQuestion = question
// let firstAnswer = input.question(firstQuestion);
// candidateAnswer += firstAnswer;
for (let i = 0; i < questions.length; i++){
  let answer = input.question(questions[i]);
    candidateAnswers.push(answer)
console.log(`YOUR ANSWER: ${answer}`)
console.log(`CORRECT ANSWER: ${correctAnswers[i]}`)

}
  return candidateAnswers
}


function gradeQuiz(candidateAnswers) {
let correct = []
let incorrect = []
  // // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  for (let i = 0; i < correctAnswers.length; i++){
 let loweredCandidateAnswers = candidateAnswers[i].toLowerCase()
 let lowerCorrectAnswers = correctAnswers[i].toLowerCase()
    if ( loweredCandidateAnswers == lowerCorrectAnswers){
      correct.push(loweredCandidateAnswers);
      } else incorrect.push(loweredCandidateAnswers)
  }
  // console.log(candidateAnswers)
  let grade = correct.length / correctAnswers.length * 100  ;  //TODO 3.2 use this variable to calculate the candidates score.

  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
// runProgram()

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};