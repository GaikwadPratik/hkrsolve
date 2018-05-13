console.log(removeDuplicates([1,2,2,3,4,5,5,5], 5));
function removeDuplicates(nums, val) {
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}