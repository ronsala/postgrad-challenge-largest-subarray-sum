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