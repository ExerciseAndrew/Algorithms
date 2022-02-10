
def nonr_gcd(a,b):

    if a<b:
        a+=b
        b=a-b
        a-=b
    if (b==0):
        return a
    while (a % b != 0):
        a+=b
        b=a-b
        a-=b
        b%=a
    return b
    
thing = nonr_gcd(20, 462)
print(thing)