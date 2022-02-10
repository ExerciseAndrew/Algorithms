
def it_gcd(a, b):
    while b != 0:
        j = b
        b = a % b
        a = j
    return a

#first = input("First number:\n")
#second = input("Second number:\n")
#print("GCD is [" + it_gcd(first, second) + "].\n")
print(it_gcd(45, 697080))