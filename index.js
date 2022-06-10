let username = prompt("What is your name? ")

let score = 0
let level = 1

function ask(range){
  let randomNumber = Math.floor(1 + Math.random() * (range))
  let answer = prompt(`Welcome ${username} \n Level ${level} \n Guess a number between 1 and ${range}`)
  if(Number(answer) == randomNumber){
    score += 1
    level += 1
    alert(`Congrats \n Your score is ${score}`)
    ask(level + 1)
  }
  else{
    alert(`Game Over!! \n Your answer was wrong! \n The correct answer was ${randomNumber} but you keyed in ${answer} \n Your score is ${score}`)
  }
}

ask(level + 1)