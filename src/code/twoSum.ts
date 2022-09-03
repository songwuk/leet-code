/**
 * 两数之和 - easy
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums:number[], target:number):number[] {
  const map: Map<any, any> = new Map()
  map.set(nums[0], 0)
  for (let i = 1; i < nums.length; i++) {
    if(map.has(target - nums[i])){
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
  return []
};
