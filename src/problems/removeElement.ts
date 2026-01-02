export function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++){
    if(nums[i] !== val){
        nums[k] = nums[i];
        k++;
    }    
  }
  return k;
}

export async function run() {
  const nums1 = [3, 2, 2, 3];
  const k1 = removeElement(nums1, 3);
  console.log('Input: [3,2,2,3], val: 3');
  console.log('Output: k =', k1, ', nums =', nums1.slice(0, k1));
  
  const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
  const k2 = removeElement(nums2, 2);
  console.log('\nInput: [0,1,2,2,3,0,4,2], val: 2');
  console.log('Output: k =', k2, ', nums =', nums2.slice(0, k2));
}
