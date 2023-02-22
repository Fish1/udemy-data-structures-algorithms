# Linked Lists

Linked lists are capable of storing more data than arrays, without needing to create a second array.

Arrays have poor insert and delete performance. Linked lists have good insert and delete performance.

Linked lists are ordered, unlike hash tables.

(head) -> (node) -> (node) -> (node) -> (tail) -> null

Head is the first node in the list. Tail is the last node in the list. Where null is the end of the list.

# Why might linked list be bad?

Linked lists are not stored in contiguous memory. The data is stored all over the machine.

# Why is insertion / deletion faster?

To insert an element you simply need to change the link to the new node. O(n)

# Why is searching slower?

In a linked list there is no concept of an index. You need to start at the head and iterate though the list until you find the element you're looking for. O(n)

