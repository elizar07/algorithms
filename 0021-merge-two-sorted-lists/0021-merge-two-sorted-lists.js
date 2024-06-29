
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let dummy = new ListNode(-1);
    let tail = dummy;


    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            tail.next = list1;  
            list1 = list1.next; 
        } else {
            tail.next = list2;  
            list2 = list2.next;
        }
        tail = tail.next; 
    }
    if (list1 !== null) {
        tail.next = list1;
    } else {
        tail.next = list2;
    }

    return dummy.next;
};
