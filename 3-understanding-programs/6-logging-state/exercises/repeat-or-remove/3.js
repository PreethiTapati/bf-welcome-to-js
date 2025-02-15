// #todo

'use strict';

/*
  log the user's input
  log the every character that is removed
    hint: you may need to write an `else`
  log the final result
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
   console.log(phrase); //log the user's input
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }else {
      console.log(character); //log the every character that is removed
    }
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

alert(newPhrase);
console.log(newPhrase); //log the final result