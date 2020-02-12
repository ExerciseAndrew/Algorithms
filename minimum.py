def find_min(arr):
    min_so_far = 0
    arr = input("Enter array\n", "")
    for i in arr:
        if i < min_so_far:
            min_so_far = i
    return min_so_far

find_min()