/*Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two
numbers such that they add up to target. You may assume that each input would have exactly one
solution, and you may not use the same element twice. You can return the answer in any order.
For example, given:
const nums = [2, 7, 11, 15];
const target = 9;
The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
Requirements:
 Implement the solution in JavaScript.
 The solution should have a time complexity better than O(n^2).
 Include proper error handling for edge cases.*/
function twoSum(num_array, target) {
    var num_dict = {};
    var finalArr = [];
    for (var i = 0; i < num_array.length; i++) {
        num_dict[num_array[i]] = i;
    }
    for (var i = 0; i < num_array.length; i++) {
        var number = num_array[i];
        var other_number = target - number;
        if (num_dict[other_number] !== undefined && num_dict[other_number] !== i) {
            finalArr.push(i);
            finalArr.push(num_dict[other_number]);
            return finalArr;
        }
    }
    return [];
}
var number_array = [2, 7, 11, 15];
var target_number = 9;
var result = twoSum(number_array, target_number);
if (result.length > 0) {
    console.log(result);
}
else {
    console.log("Numbers not found");
}
