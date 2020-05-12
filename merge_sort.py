
def merge_sort(A):
    merge_sort2(A, 0, len(A)-1)

def merge_sort2(A, first, last):
    if first < last:
        middle = (first + last) // 2
        merge_sort2(A, first, middle)
        merge_sort2(A, middle + 1, last)
        merge(A, first, middle, last)

def merge(A, first, middle, last):
    L = A[first:middle + 1]
    R = A[middle + 1:last + 1]
    i = j = k = 0
    while i < len(L) and j < len(R):
        if L[i] < R[j]:
            A[k] = L[i]
            i+=1
        else:
            A[k] = R[j]
            j+=1
        k+=1
    while i < len(L):
        A[k] = L[i]
        i+=1
        k+=1
    while j < len(R):
        A[k] = R[j]
        j+=1
        k+=1
def main():
   print(merge_sort([2, 6, 12, 19, 24, 4, 46, 47, 8, 16])) 
  

main()
    