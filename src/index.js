module.exports = function check(str, bracketsConfig) {
  const objBracketsConfig = {};
  const arrOpen = [];
  bracketsConfig.forEach ((el) => {
    objBracketsConfig[`${el[1]}`] = `${el[0]}`
    arrOpen.push(el[0]);
  })
  let stack = [];
  for (let i = 0; i <str.length; i++) {
    if (stack[stack.length-1] === str[i]  && objBracketsConfig[str[i]] === str[i]) {
      stack.pop();
      } else if (arrOpen.includes(str[i])) {
        stack.push(str[i])
        
      } else {
          if (stack.length === 0) {
            return false;
          }
          let top = stack[stack.length-1];
          if (objBracketsConfig[str[i]] === top)  {
            stack.pop()
          } else {
              return false;
          }
    }
  }

  return stack.length === 0;
}
