<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Number Guessing Game</title>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      background: linear-gradient(120deg, #6a11cb, #2575fc);
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    .container {
      background: rgba(0, 0, 0, 0.7);
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      text-align: center;
      max-width: 400px;
      width: 100%;
    }

    h1 {
      margin-top: 0;
      font-size: 28px;
    }

    p {
      font-size: 15px;
    }

    input[type="number"] {
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #6a11cb;
      width: 180px;
      margin: 10px 5px;
      font-size: 16px;
    }

    button {
      padding: 10px 20px;
      background: #6a11cb;
      border: none;
      color: white;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      margin: 5px;
    }

    button:hover {
      background: #5a0cb0;
    }

    #message {
      margin-top: 15px;
      font-weight: 500;
    }

    #attempts {
      margin-top: 8px;
      font-size: 14px;
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Number Guessing Game</h1>
    <p>Guess the number between <strong>1 and 100</strong></p>

    <input type="number" id="guessInput" placeholder="Enter a number" />
    <button onclick="checkGuess()">Guess</button>
    <button onclick="resetGame()">New Game</button>

    <p id="message">Start guessing!</p>
    <p id="attempts"></p>
  </div>

  <script>
    let target;
    let attempts;

    // Initialize a new game
    function resetGame() {
      target = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      document.getElementById("guessInput").value = "";
      document.getElementById("guessInput").disabled = false;
      document.getElementById("message").textContent = "Start guessing!";
      document.getElementById("attempts").textContent = "";
    }

    function checkGuess() {
      const input = document.getElementById("guessInput");
      const feedback = document.getElementById("message");
      const attemptsEl = document.getElementById("attempts");

      const guess = parseInt(input.value);

      // Validate input
      if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
      }

      attempts++;

      if (guess < target) {
        feedback.textContent = "Too low! Try again.";
      } else if (guess > target) {
        feedback.textContent = "Too high! Try again.";
      } else {
        feedback.textContent = `🎉 Correct! The number was ${target}.`;
        attemptsEl.textContent = `You won in ${attempts} attempt(s).`;
        input.disabled = true;
      }

      attemptsEl.textContent = `Attempts: ${attempts}`;
    }

    // Start first game when page loads
    resetGame();
  </script>
</body>
</html>