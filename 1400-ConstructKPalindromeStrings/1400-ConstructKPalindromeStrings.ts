function canConstruct(s: string, k: number): boolean {
    // Early return if k is greater than string length
    // as we can't form more palindromes than the length of string
    if (k > s.length) return false;
    
    // Early return if k is 1, we just need to check if string exists
    
    // Count frequency of each character
    const charCount = new Map<string, number>();
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Count characters with odd frequencies
    let oddCount = 0;
    for (const count of charCount.values()) {
        if (count % 2 !== 0) oddCount++;
    }
    
    // We need at least oddCount palindromes to use all odd frequency characters
    // And we can't create more palindromes than string length
    return oddCount <= k && k <= s.length;
}