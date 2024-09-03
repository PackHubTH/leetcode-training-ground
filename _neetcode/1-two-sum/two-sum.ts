function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let diff: number = target - nums[i];
    if (map.has(diff)) return [map.get(diff) as number, i];
    else map.set(nums[i], i);
  }
  return [nums.length - 1, nums.length - 1];
}