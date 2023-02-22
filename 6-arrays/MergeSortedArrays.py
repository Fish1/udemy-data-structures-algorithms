import random
array_a = [random.randint(0, 100) for i in range(10)]
array_a.sort()
array_b = [random.randint(0, 100) for i in range(10)]
array_b.sort()

def merge_sorted_arrays(array_a, array_b):
    result = []

    index_a = 0
    index_b = 0

    while index_a < len(array_a) and index_b < len(array_b):

        curr_a = array_a[index_a]
        curr_b = array_b[index_b]

        if curr_a <= curr_b:
            result.append(curr_a)
            index_a += 1
        else:
            result.append(curr_b)
            index_b += 1

    while index_a < len(array_a):
        curr = array_a[index_a]
        result.append(curr)
        index_a += 1
    
    while index_b < len(array_b):
        curr = array_b[index_b]
        result.append(curr)
        index_b += 1

    return result


print(array_a)
print(array_b)

print(merge_sorted_arrays(array_a, array_b))
