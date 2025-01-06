function possibleStringCount(word: string): number {
    const possibleStrings: Set<string> = new Set();
    possibleStrings.add(word);
    
    // Find all consecutive character groups
    let i = 0;
    while (i < word.length) {
        // Find the length of current consecutive sequence
        let j = i + 1;
        while (j < word.length && word[j] === word[i]) {
            j++;
        }
        
        // If we found consecutive characters
        if (j - i > 1) {
            // Try all possible lengths of this character from 1 to current length
            for (let k = 1; k <= j - i; k++) {
                const candidate = 
                    word.slice(0, i) + 
                    word[i].repeat(k) + 
                    word.slice(j);
                possibleStrings.add(candidate);
            }
        }
        
        i = j;
    }
    
    return possibleStrings.size;
}
