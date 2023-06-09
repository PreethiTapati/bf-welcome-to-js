'use strict';

/* longer than 4

  a user can exit the loop by canceling or entering something longer than 4 characters
  - given the user cancels, the program tells them they canceled
  - given the user input is shorter than or equal to  4 characters, the loop continues
  - given the user input is longer than 4 characters, the loop exits

  test cases:
    null -> 'you canceled'
    'abcde' -> 'abcde'
    'javascript' -> 'javascript'
    'you canceled' -> 'you canceled'

  --- experiments ---

  1. FAILING:cancel
      EXPECT:'you cancelled'
      ACTUAL:''

    TRY: try to delete the initiation of the  variable input inside the scope while (delete let before variable input)
    PREDICT: should get expected output for cancel
    IT DID:  got expected output for cancel, but still incorrect output for string
    EXPLAIN: variable input should  be global

  2. FAILING:abcde
      EXPECT:'abcde'
      ACTUAL: inside loop

    TRY: change input to input.length for comparing input length
    PREDICT:we get expected output for abcde
    IT DID: we get expected output for abcde and over string longer than 4 characters
    EXPLAIN:  we need to compare input length

  --- lessons learned ---

  We need to be careful with variables inside a scope. should compare right type of values.

*/

let input = '';

let prompting = true;
while (prompting) {
  input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave',
  );
  if (input === null) {
    prompting = false;
    input = 'you canceled';
  } else if (input <= 4) {
    prompting = true;
  }else {
    prompting = false;
  }
}

alert(input);

