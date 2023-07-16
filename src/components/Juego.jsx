import React, { useState } from "react";

function Game() {
  const [playerSelection, setPlayerSelection] = useState("");
  const [computerSelection, setComputerSelection] = useState("");
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  const [result, setResult] = useState("");

  const [showResult, setShowResult] = useState(false);

  const options = ["rock", "paper", "scissors"];

  const userChoice = (e) => {
    setShowResult(false);
    setPlayerSelection(e.target.value);
    computerChoice();
  };

  const play = () => {
    if (computerSelection === playerSelection) {
      setResult("Draw");
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      setResult("Computer wins");
      setComputerScore(computerScore + 1);
    } else if (
      computerSelection === "scissors" &&
      playerSelection === "paper"
    ) {
      setResult("Computer wins");
      setComputerScore(computerScore + 1);
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      setResult("Computer wins");
      setComputerScore(computerScore + 1);
    } else {
      setResult("You win");
      setPlayerScore(playerScore + 1);
    }

    setShowResult(true);
  };

  const computerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    setComputerSelection(options[randomNum]);
  };

  const convertToEmoji = (choice) => {
    switch (choice) {
      case "rock":
        return "🥌";
      case "paper":
        return "📄";
      case "scissors":
        return "✂️";
      default:
        return "";
    }
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Game: Rock, Paper, Scissors</h2>
      <h3 className="score-heading">Score:</h3>
      <p className="score-text">Computer: {computerScore}</p>
      <p className="score-text">Human: {playerScore}</p>
      <div className="options">
        {options.map((item) => (
          <button
            value={item}
            onClick={userChoice}
            className="btn btn-dark mr-3 text-capitalize"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <br />
      <button
        onClick={play}
        disabled={showResult}
        className="btn btn-danger play-button"
      >
        Play
      </button>
      <br />
      <br />

      {showResult && (
        <div>
          <div className="row display-4 border-top">
            <div className="col col-md-6 ">
              💻 Computer {convertToEmoji(computerSelection)}
            </div>
            <div className="col col-md-6 text-right">
              {convertToEmoji(playerSelection)} Human 🤹‍♂️
            </div>
          </div>

          <div className="row mt-5">
            <div className="col col-md-12 text-center border-top">
              <h4>Result:</h4>
              <h4 className="text-danger">{result}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
