var findThePrefixCommonArray = function(A, B) {
    let n = A.length;
    let C = [];
    let seenA = new Set();
    let seenB = new Set();
    let commonCount = 0;

    for (let i = 0; i < n; i++) {
        // Check for common elements before adding
        if (seenB.has(A[i])) {
            commonCount++;
        }
        if (seenA.has(B[i])) {
            commonCount++;
        }

        // If both elements are the same at the same index
        if (A[i] === B[i]) {
            commonCount++;
        }

        // Add elements to sets
        seenA.add(A[i]);
        seenB.add(B[i]);

        // Store the current common count
        C.push(commonCount);
    }
    
    return C;
};