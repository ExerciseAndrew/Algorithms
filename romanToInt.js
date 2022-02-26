var romanToInt = function(s) {
    let count = 0;
   
    for (let i=0; i<s.length; i++) {
        if (s[i]==='I') {
          if (s[i+1]==='V' || s[i+1]==='X') {
              count -= 1
          } else {
              count += 1;
          }
        } else if (s[i]==='V') {
            count += 5;
        } else if (s[i]==='X') {
            if (s[i+1]==='L' || s[i+1]==='C') {
              count -= 10
          } else {
              count += 10;
          }
        } else if (s[i]==='L') {
            count += 50;
        } else if (s[i]==='C') {
            if (s[i+1]==='M' || s[i+1]==='D') {
              count -= 100
          } else {
              count += 100;
          }
        } else if (s[i]==='D') {
            count += 500;
        } else if (s[i]==='M') {
            count += 1000;
        }
    }
    console.log(count)
    return count;
};
