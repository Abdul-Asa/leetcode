function countElements(nums: number[]): number {
    // Early return if array is too small
    if (nums.length < 3) return 0;
    
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    // Count elements that are both greater than min and less than max
    return nums.filter(num => num > min && num < max).length;
}