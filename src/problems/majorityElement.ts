/**
 * 
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

export function majorityElement(nums: number[]): number {

    let candidate = 0;
    let count = 0;

    for (const num of nums){
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
}

    export async function run() {
        const nums = [3, 2, 3];
        const res = majorityElement(nums);
        console.log('Input:', nums);
        console.log('Output:', res);
    }
