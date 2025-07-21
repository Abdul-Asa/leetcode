// Last updated: 22/07/2025, 00:08:58
function fib(n: number): number {
    if (n==0) return 0;
    if (n==1) return 1;

    return fib(n-1) + fib(n-2)
};