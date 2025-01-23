const isPalindrome = (x: number): boolean => {
    // Negative numbers are not palindromes
    if (x < 0) return false;
    
    // Single digit numbers are always palindromes
    if (x < 10) return true;
    
    // Numbers ending with 0 can't be palindromes (except 0 itself)
    if (x % 10 === 0 && x !== 0) return false;
    
    let reversedHalf = 0;
    
    // Reverse only half of the number
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // For even length numbers: x === reversedHalf
    // For odd length numbers: x === Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};