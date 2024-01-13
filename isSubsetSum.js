const set = [3, 34, 4, 12, 5, 2, 998];
const sum = 1000;
const solve = (index, sumNeeded, dp)=>{
  if(!sumNeeded) return true;
  if(index === set.length) return false;
  if(dp[index][sumNeeded] !== -1) return dp[index][sumNeeded];
  const ignore = solve(index+1,sumNeeded,dp);
  if(set[index] > sumNeeded) return dp[index][sumNeeded] = ignore;
  return dp[index][sumNeeded] = ignore || solve(index+1, sumNeeded - set[index],dp);
}
// note: I assumed that the set size does not exceed 100 elements,
// and sum does not exceed 1000.
const isSubsetSum = ()=> {
  const dp =  Array.from({ length: 101 }, () => Array(1001).fill(-1));
  return solve(0,sum, dp);
}

console.log(isSubsetSum(set, sum));