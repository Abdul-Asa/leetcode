function longestCommonPrefix(strs: string[]): string {
    // Handle empty input
    if (!strs.length) {
        return "";
    }
    
    // Get the shortest string length to avoid index out of bounds
    const shortest = Math.min(...strs.map(s => s.length));
    
    // Compare characters from each string at the same position
    for (let i = 0; i < shortest; i++) {
        // Get character from first string at position i
        const char = strs[0][i];
        
        // Compare with same position in other strings
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                // If mismatch found, return prefix up to this point
                return strs[0].slice(0, i);
            }
        }
    }
    
    // If we get here, return the chars up to shortest length
    return strs[0].slice(0, shortest);
}