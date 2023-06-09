// #todo

'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  --- experiments ---

  1. FAILING:cancel
      EXPECT:prompt
      ACTUAL:error

    TRY: condition if
    PREDICT: get rid of the error
    IT DID: didn't exit the loop with cancel  got incorrect output
    EXPLAIN: in this case we didn't read length of null 

  2. FAILING:'' (empty string)
      EXPECT:prompt
      ACTUAL:"

    TRY:change execution if input.length === 0 to continue, add else and put previous execution in this else
    PREDICT: it doesn't exit the loop with ''
    IT DID: didn't exit the loop with '' , got incorrect output
    EXPLAIN: continue return in loop 

  3. FAILING:' '
      EXPECT:you entered " "
      ACTUAL:"

    TRY:change value of mariable message to correct output: message + input + '"';
    PREDICT: we get correct output
    IT DID: we get correct output
    EXPLAIN: it was not correct concatination

  --- lessons learned ---
don't  combine conditions with different data types.

*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input === null) {
    continue;
  } if (input.length === 0) {
    continue;
  } else {
    message = message + input + '"';
    break;
  }
}

alert(message);
