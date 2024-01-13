const strings = ["flower", "flow", "flight"];
const longestCommonPrefix = () => {
  let ans = strings[0];
  for (const string of strings) {
    while (string.indexOf(ans) !== 0)
      ans = ans.substring(0, ans.length - 1);
  }
  return ans;
}
console.log(longestCommonPrefix(strings));