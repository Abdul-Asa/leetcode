// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val);
//         this.next = (next===undefined ? null : next);
//     }
// }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0); // Dummy head for result list
    let p = l1, q = l2, current = dummyHead;
    let carry = 0; // Carry for digits > 9

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;

        let sum = carry + x + y;
        carry = Math.floor(sum / 10); // Update carry for next digit
        current.next = new ListNode(sum % 10); // Add the current digit
        current = current.next;

        if (p !== null) p = p.next; // Move to the next digit in l1
        if (q !== null) q = q.next; // Move to the next digit in l2
    }

    // If there's a carry left, add it as a new node
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next; // Return the result, skipping the dummy head
}