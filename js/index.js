let userScore = 0;
let comScore = 0;

let choices = document.querySelectorAll(".logo");
let res = document.querySelector(".res");
let printCompScore = document.querySelector("#comp-score");
let printUserScore = document.querySelector("#your-score");

// it is used to select the choice we pick from browser
//it starts the game [main func]
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("this is user choice", userChoice);
    playGame(userChoice);
  });
});

// generates the choice of computer
const genCompChoice = () => {
  const options = ["rock", "scissors", "paper"];
  let num = Math.floor(Math.random() * 3);
  return options[num];
};

// it shows who wins in game
const showWinner = (userWin) => {
  if (userWin) {
    console.log("User Wins");
    res.innerText = "You Wins !";
    res.style.backgroundColor = "green";
    userScore++;
    printUserScore.innerText = "you : " + userScore;
  } else {
    console.log("comp Wins");
    res.innerText = "Computer Wins! you Lose..";
    res.style.backgroundColor = "red";
    comScore++;
    printCompScore.innerText = "com : " + comScore;
  }
};

const playGame = (userChoice) => {
  const com = genCompChoice();
  console.log("this is computer choice", com);
  if (userChoice === com) {
    console.log("It is a draw");
    res.innerText = "It is a Draw";
    res.style.backgroundColor = "black";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = com === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = com === "scissors" ? false : true;
    } else {
      userWin = com === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
