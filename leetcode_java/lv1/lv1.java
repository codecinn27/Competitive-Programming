package lv1;
/**
 *  https://leetcode.com/problems/two-sum/
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 *  */

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int [] myNew = new int[2];

        for(int i = 0;i <nums.length; i++){
            for(int j = 1;j<nums.length; j++){
                if(nums[i]+nums[j] == target){
                    myNew[0] = i;
                    myNew[1] = j;
                    return  myNew;
                }
            }
        }
        return myNew;
    }
}

public class lv1 {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = solution.twoSum(nums, target);
        System.out.println("Indices: " + result[0] + ", " + result[1]);
    }
}

/**
Checklist: 
1) learn hash map
2) do Fizz buzz 
  
 */