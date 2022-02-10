#fizz buzz
#write program that prints the numbers 1- 100
#for multiples of 3 print "fizz" instead of the number
#for multiples of 5 print "buzz"
#for numbers that are multiples of both print "FizzBuzz"

for i in range(1, 101):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 5 == 0:
        print("Buzz")
    elif i % 3 == 0:
        print("Fizz")
    else:
        print(i)
    


    


    
    
