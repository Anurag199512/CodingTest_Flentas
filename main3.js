const add = (a, b) => a + b;

const getMinTime = (nums) => {
    nums.sort();
    if (nums.length > 3) {
      let a = nums[0] + nums[nums.length - 1] + Math.min(2 * nums[1], nums[0] + nums[nums.length - 2]);
      return a + getMinTime(nums.splice(0, nums.length - 2));
    } else {
      return nums.length === 2 ? nums.splice(1).reduce(add, 0) : nums.splice(0).reduce(add, 0);
    }
  }

console.log(getMinTime([3, 1, 6, 8, 12]));
console.log(getMinTime([1, 2, 5, 8]));
console.log(getMinTime([1, 3, 4, 5]));
console.log(getMinTime([5]));
