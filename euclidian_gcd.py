#Euclidian algorithm
import cmd
import textwrap
import sys
import os
import math

inp_a = input("Input for 'a'\n>>>")
inp_b = input("Input for 'b'\n>>>")

def get_that_GCD_home_boy(a, b):
    inp_a = a
    inp_b = b
    if a == 0:
        print("GCD is " + b)
    else:
        get_that_GCD_home_boy(b%a, a)

get_that_GCD_home_boy(inp_a, inp_b)