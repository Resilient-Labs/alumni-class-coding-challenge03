// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possiblites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// solution:
function solve(arr) {
    let test=[];
    let lengths = [];
    for(let i=0; i<arr.length; i++){
        let result = Array.from(new Set(arr[i]));
        test.push(result);
    }
    for(let j=0; j<test.length; j++){
        let length = test[j].length;
        lengths.push(length);
      }
    return  lengths.reduce((a, b) => a * b);;
  };

  // video (s)
  // (part 1) https://soapbox.wistia.com/videos/2z8uWWdM1b
  // (part 2) https://soapbox.wistia.com/videos/FqgxrwuqCK -- does not load for some reason. very frustrating.