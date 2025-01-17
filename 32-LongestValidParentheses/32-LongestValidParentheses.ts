function longestValidParentheses(s: string): number {
    let count = 0;
    const seen: number[] = [-1]; // Start with -1 to handle edge cases

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            seen.push(i); // Push the index of the opening parenthesis
        } else {
            seen.pop(); // Pop the last opening parenthesis
            if (seen.length === 0) {
                seen.push(i); // If stack is empty, push the current index
            } else {
                count = Math.max(count, i - seen[seen.length - 1]); // Calculate max valid length
            }
        }
    }

    return count;
}