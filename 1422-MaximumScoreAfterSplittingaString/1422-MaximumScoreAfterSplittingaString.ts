function maxScore(s: string): number {
    let totalOnes = s.split('').filter(char => char === '1').length; 
    let leftZeros = 0;
    let maxScore = 0;

    for (let i = 0; i < s.length - 1; i++) {  
        if (s[i] === '0') {
            leftZeros++;
        } else {
            totalOnes--;
        }
        maxScore = Math.max(maxScore, leftZeros + totalOnes);
    }

    return maxScore;
}