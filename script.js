/*jshint esversion: 6 */
'use sctrict';
randomNumber = Math.ceil(Math.random()*100);

function number (guess){
guess = prompt('Угадай число от 1 до 100');
    randomNumber--;
    if (guess > randomNumber) {
      alert ('Загаданное число меньше.');
      number ();
    } 
    else if (guess < randomNumber) {
      alert ('Загаданное число больше');
      number ();
  }
  else if (guess === randomNumber) {
    return alert ('Поздравляю, Вы угадали');
  }
  else if (isNaN(guess)) {
    alert ('Введи число!');
    number ();
  }
  else if (guess === null) {
    return alert ('Игра окончена');
  }
}

number();