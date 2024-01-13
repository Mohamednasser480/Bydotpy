const str = "{[()]}";
const isValidBrackets = () => {
  const stack = [];
  const symbols = {
    ')':'(',
    '}':'{',
    ']': '['
  }
  for(const char of str) {
    if(char === '(' || char === '{' || char === '[') stack.push(char);
    else {
      if(!stack.length) return false;
      const top = stack.pop();
      if(top !== symbols[char]) return false;
    }
  }
  return !stack.length;
}
console.log(isValidBrackets(str));