function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    const added = [...nums1,...nums2].sort((a,b)=>a-b)


    const mid = Math.floor(added.length/2)
    if (added.length%2 === 0){
        return (added[mid-1] + added[mid])/2
    } else{
        return added[mid]
    }  
};