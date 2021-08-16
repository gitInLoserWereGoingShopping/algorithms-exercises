/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
  
  iterate over nums
    compare current num to next num if current num is larger
      if larger: swap them and change swapFlag to True
    if at end of nums, check if there was a swap (swapFlag)
      if there was a swap: then change swapFlag and restart the loop
    return the (now modified) nums array
  */

function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      let tmp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = tmp;
      i = -1;
    }
  }
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
