# Notes

Sun Aug 15 11:03:27 EDT 2021

Questions from the readme:

`What are some examples of input arrays where the solution becomes obvious? What can you learn from those obvious cases?`

Any array with only non-negative numbers has the whole array as the subarray with the largest sum. One would not include negatives at the beginning or end of the array but might include ones in the middle.

`What would a naive solution look like, that tested every possible combination?`

All times below are best of 3 test runs for the solution.

```js
// Naive solution (brute force). Passes in 109ms.
function largestSubarraySum(array) {
  let largestSum = -Infinity
  let currentSum
  for (let i = 0; i < array.length; i++) {
    currentSum = 0
    for (let j = i; j < array.length; j++) {
      currentSum += array[j]
      if (largestSum < currentSum) {
        largestSum = currentSum
      }
    }
  }
  return Math.max(largestSum, 0)
}
```

`After you’ve implemented a basic solution, consider how many operations it will use to find an answer, based on the size of the input array. If you can, write down the Big O time complexity of your solution.`

O(n<sup>2</sup>)

`How could you make your solution faster? Try to improve your solution’s runtime, or explain why you think your solution is as fast as possible.`

Solutions below are O(n) as they only need to iterate thru the array once. You can't beat that with a bat.

```js
// Alt Solution 1. Passes in 99ms.
function largestSubarraySum(array) {
  let currSum = -Infinity;
  let maxSum = -Infinity;
  for(let i = 0; i < array.length; i++) {
    currSum = Math.max(0, currSum);
    currSum += array[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return Math.max(maxSum, 0);
}

// Alt solution 2. Removed most semicolons. Passes in 95ms.
function largestSubarraySum(array) {
  let currSum = -Infinity
  let maxSum = -Infinity
  for(let i = 0; i < array.length; i++) {
    currSum = Math.max(0, currSum)
    currSum += array[i]
    maxSum = Math.max(maxSum, currSum)
  }
  return Math.max(maxSum, 0)
}

// Alt solution 3. Converted to arrow function. Passes in 97ms.
const largestSubarraySum = (array) => {
  let currSum = -Infinity
  let maxSum = -Infinity
  for(let i = 0; i < array.length; i++) {
    currSum = Math.max(0, currSum)
    currSum += array[i]
    maxSum = Math.max(maxSum, currSum)
  }
  return Math.max(maxSum, 0)
}
```

Alt solution 2 wins!
