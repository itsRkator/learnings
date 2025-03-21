const reverse = (str) => {
  if (str.length === 0) {
    return str;
  }

  return reverse(str.slice(1)) + str[0];
};

// console.log(reverse('TypeScript'));
// console.log(reverse('JavaScript'));
// console.log(reverse('Node.js'));
// console.log(reverse('Python'));
