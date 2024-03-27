#!/user/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number: 1-5",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("congratulation you guessed right number");
} else {

  console.log("sorry! you guessed wrong number");
}
