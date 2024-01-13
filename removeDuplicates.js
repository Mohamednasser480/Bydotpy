const arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const removeDuplicates = () => {
  for(let  i = 0,c; i < arr.length-1; i++){
    c = 0;
    while(arr[i + c + 1] === arr[i]) ++c;
    arr.splice(i,c);
  }
  return arr;
}
console.log(removeDuplicates(arr));