'use strict';

/* Something with a Space

  A user can input any text and they will be told if it has a space or not.
    - given the user cancels:
        they are asked why they canceled
    - given their input contains at least one space:
        they will be told so
    - given their input does not have any spaces:
        they will be told so

  test cases:
    the user cancels:
      null -> 'why did you cancel?'
    contains no spaces:
      ''           ->   '"" has no spaces'
      'abc'        ->   '"abc" has no spaces'
      'hello'      ->   '"hello" has no spaces'
      'JavaScript' ->   '"JavaScript" has no spaces'
    contains 1 space:
      ' '           ->  '" " has at least one space'
      ' abc'        ->  '" abc" has at least one space'
      'hello !'     ->  '"hello !" has at least one space'
      'Java Script' ->  '"Java Script" has at least one space'
    contains more than 1 space:
      '  '            ->  '"  " has at least one space'
      ' a b c '       ->  '" a b c " has at least one space'
      ' h e l l o ! ' ->  '" h e l l o ! " has at least one space'
      ' Java Script ' ->  '" Java Script " has at least one space'

*/


/* --- gather user input --- */
//  Data In:      a string or null
let message = null;
let freeSpace = 0;

while (!message) {
  /* --- create a message for the user --- */
  message = prompt(
    ' enter the text, please. I will tell you how many spaces are in it.',
  );

  if (message === null) {
    /* --- the user canceled --- */
    alert(' "cancelled :("');
    continue;
  }

  if (message === '') break;

  //  Data After:   the user's input (string or null)
}

for (const character of message) {
  if (character === ' ') {
    freeSpace++;
  } else {
    continue;
  }
}

if (freeSpace === 0) {
  /* --- the input has no spaces --- */
  alert(`"${message}" has no spaces`);
} else {
  /* --- the input has at least one space --- */
  alert(`"${message}" has at least ${freeSpace} space`);
}