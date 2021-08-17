/*jshint esversion: 6 */
'use sctrict';

function bot() {
  randomNumber = Math.ceil(Math.random()*100);

  return function number (){
    const guess = prompt('Угадай число от 1 до 100');

    if (guess === null) {
      return alert ('Игра окончена');
    }
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
};
}
bot()();
