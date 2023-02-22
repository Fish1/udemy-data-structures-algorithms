# Hash Map

Hash tables use key value pairs.

MyHashMap["key"] = "value"

The key is first ran through a hashing algorithm. It will generate the hash value.
The hash value will be an index to an array. The value is then stored at that array index.
If multiple keys hit the same index, that index will be a linked list of values.

# Hash Map Speeds

insert = O(1)
lookup = O(1)
delete = O(1)
access = O(1)

Access worst case is O(n) if all keys hit the same hash.

# Hash tables vs Arrays

Array         | Hash Table
search = O(n) | search = O(1)
insert = O(n) | insert = O(1)
delete = O(n) | delete = O(1)

# Review

Good:
  Fast lookups, inserts.
  Any keys we want.

Bad:
  Unordered.
  Slow key iteration.
