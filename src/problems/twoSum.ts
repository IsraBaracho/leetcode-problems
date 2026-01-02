export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need)!, i];
    map.set(nums[i], i);
  }
  return [];
}

export async function run() {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const res = twoSum(nums, target);
  console.log('Input:', nums, 'target:', target);
  console.log('Output:', res);
}
