const isPalindrome = (str) => {
  if (str.length === 0) {
    return true;
  }

  return (
    str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
  );
};

// console.log(isPalindrome('aba'));
// console.log(isPalindrome('awesome'));
// console.log(isPalindrome('foobar'));
// console.log(isPalindrome('tacocat'));
// console.log(isPalindrome('amanaplanacanalpanama'));
// console.log(isPalindrome('amanaplanacanalpandemonium'));
