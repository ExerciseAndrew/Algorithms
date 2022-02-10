### Implementation of a stack using python list

class Stack:

    def __init__(self, items):
        #creates empty stack
        self._theItems = list()

    def isEmpty(self)
        #returns True if stack is empty
        return len(self) == 0

    def __len__(self):
        #returns number of items in the stack
        return len( self._theItems )

    def peek(self):
        #returns top item of stack without removing it
        assert not self.isEmpty(), "cannot peek at an empty stack"
        return self._theItems[-1]

    def pop(self):
        #removes and returns the top item of the stack
        assert not self.isEmpty(), "cannot pop an empty stack"
        return self._theItems.pop()

    def push(self, itema):
        return self._theItems.append( item )
        #Push an item to the top of the stack

    def is_balanced(self):
        #determines if stack is balanced or not
        for char in _theItems:
            if char in ['(', '[']:
                stack.push(char)
            else:
                if isEmpty(): return False
                stack.pop()
                if (top == '[' and char != ']') or (top == '(' and char != ')'):
                    return False
            return          