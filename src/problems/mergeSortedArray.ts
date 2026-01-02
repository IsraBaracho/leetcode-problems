export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // sua solução aqui
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0){
    if (nums1[i] > nums2[j]){
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  while (j >= 0){
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

export async function run() {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  
  console.log('Input nums1:', nums1, 'm:', m);
  console.log('Input nums2:', nums2, 'n:', n);
  
  merge(nums1, m, nums2, n);
  
  console.log('Output:', nums1);
}