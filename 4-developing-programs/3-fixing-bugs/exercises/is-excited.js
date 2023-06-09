'use strict';

/* is excited

  a user can enter any input and learn if it is excited or not
  - given the user cancels, the i/o loop continues
  - given the user inputs something with an "!", their input is excited
  - given their input does not have "!", it is not excited

  test cases:
    '' -> '"" is not excited'
    'hello' -> '"hello" is not excited'
    '!' -> '"!" is excited'
    '!yo' -> '"!yo"" is excited'
    '!yo!' -> '"!yo!" is excited'

  --- experiments ---

  1. FAILING:hello
      EXPECT:"hello" is not excited
      ACTUAL:"hello" is excited

    TRY: change !== to === in first if statment
    PREDICT:we should get get correct output
    IT DID: got correct output
    EXPLAIN: change logic 

  --- lessons learned ---
It's good to think over a logic during writing a program
think with calm thoughts and reviewthe logic of the code during writing a program


*/


let input = null;
while (!input) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

let isExcited = true;
for (const char of input) {
  if (char === '!') {
    isExcited = true;
    break;
  } else {
    isExcited = false;
  }
};

if (isExcited) {
  alert('"' + input + '" is excited');
} else {
  alert('"' + input + '" is not excited');
}
