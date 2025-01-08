function countPrefixSuffixPairs(words: string[]): number {
    // Initialize count for valid pairs
    let count = 0;

    function isPrefixAndSuffix(str1: string, str2: string): boolean {
    // If str1 is longer than str2, it can't be both prefix and suffix
    if (str1.length > str2.length) {
        return false;
    }
    
    // Check if str1 is both prefix and suffix of str2
    return str2.startsWith(str1) && str2.endsWith(str1);
}
    
    // Iterate through all possible pairs where i < j
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }
    
    return count;
}
