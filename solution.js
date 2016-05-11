/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left = 0, right = nums.length - 1;
    
    while (left + 1 < right) {
        var mid = parseInt(left + (right - left) / 2);
        if (nums[mid] > nums[right]) {
            left = mid;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            right--;
        }
    }
    
    if (nums[left] < nums[right])
        return nums[left];
    else
        return nums[right];
};