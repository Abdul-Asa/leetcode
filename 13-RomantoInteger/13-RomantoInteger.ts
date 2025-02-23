function romanToInt(s: string): number {
    const romanValues = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanValues.get(s[i]) || 0;
        const nextValue = i + 1 < s.length ? romanValues.get(s[i + 1]) || 0 : 0;
        
        if (currentValue < nextValue) {
            result += nextValue - currentValue;
            i++; // Skip next character as we've already used it
        } else {
            result += currentValue;
        }
    }
    
    return result;
}