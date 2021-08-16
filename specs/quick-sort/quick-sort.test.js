/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  //base case
  if (nums.length <= 1) return nums;

  //create pivot using last number in nums
  let pivot = nums.pop();

  //create left array of values less than pivot
  //create right array of values greater than or equal to pivot
  let left = [];
  let right = [];
  for (let num of nums) {
    if (num < pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  }

  //call quick sort on left and right arrays
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  //return left, pivot, right concatenated
  return sortedLeft.concat(pivot, sortedRight);
}

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
