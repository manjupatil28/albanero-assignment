// Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method

//Solution

function findKthLargest(nums, k) {
    let max;
    for (let i = 0; i < k; i++) {
        max = nums[0];
        let maxIndex = 0;
        for (let j = 1; j < nums.length - i; j++) {
            if (nums[j] > max) {
                max = nums[j];
                maxIndex = j;
            }
        }
        [nums[maxIndex], nums[nums.length - 1 - i]] = [nums[nums.length - 1 - i], nums[maxIndex]];
    }
    return max;
}
