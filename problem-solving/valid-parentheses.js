/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
Accepted
5.8M
Submissions
13.9M
Acceptance Rate
42.0%
Topics
Companies
Hint 1
*/

const isValid = (s) => {
  const stack = [];
  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      const lastInsertedChar = stack.pop();
      if (pairs.get(char) !== lastInsertedChar) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid('([])'));
