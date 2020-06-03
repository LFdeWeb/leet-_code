// 求链表中的倒数第k个节点
function last (head, k){
  var i=j=head;
  while (k-1>0) {
    j = head.next;
      k--
  }
  while (j.next) {
    i = i.next;
    j = j.next
  }
  return i
}
