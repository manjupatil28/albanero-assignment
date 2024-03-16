// Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string

//Solution

function largestNumber(nums) {
    nums = nums.map(num => num.toString());
    const compare = (a, b) => {
        const order1 = a + b;
        const order2 = b + a;
        if (order1 > order2) return -1;
        else if (order1 < order2) return 1;
        else return 0;
    };
    nums.sort(compare);

    if (nums[0] === "0") return "0";

    return nums.join('');
}

