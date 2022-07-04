/*
Lily and Ron want to share a chocolate bar. Each square is marked with an integer.
Lily decides to share a contiguous segment of the bar such that:
  the length of the segment matches Ron's birth month AND
  the sum of the integers on the square is equal to his birthday
Determine how many ways she can divide the chocolate

ex:
s = [2, 2, 1, 3, 2]
d = 4
m = 2

Lily wants to find segments summing to Ron's birth day, d=4
with a length equalling his birth month, m=2.
In this case, there are two segments meeting her criteria: [2,2] and [1,3].

Function Description:
birthday has the following parameter(s):
int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month

Returns:
int: the number of ways the bar can be divided

Input Format:
The first line contains an integer n, the number of squares in the chocolate bar.
The second line contains n space-separated integers s[i], the numbers on the chocolate squares where .
The third line contains two space-separated integers, d and m, Ron's birth day and his birth month.
*/

function birthday(s, d, m) {
    // Write your code here
  let count = 0;
  
  for (let i=0; i<s.length; i++){
      //slice a portion of the array from i to m plus i to obtain contiguous segment
      let segment = s.slice(0 + i, i+ m);
      // sum segment and add to count if === d
      if (segment.reduce((a, b) => a + b) === d) {
           count++
      }
  }
  return count;
}
