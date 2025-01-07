function twoSum(nums: number[], target: number): number[] {
    const hset = new Set<number>()
    for(let i in nums){
        let x:number = +i
        const num = nums[x];
        const diff = target - num;

        if (hset.has(diff)) {
            const complementIndex = nums.indexOf(diff);
            return [complementIndex, x];
        }else{
            hset.add(num);
        }
    }

    return []
};