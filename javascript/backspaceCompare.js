var backspaceCompare = function(s, t) {
    let teh = [];
    let seh = [];
    let sremoved = 0;
    let tremoved = 0;
    for (let i=s.length-1; i>=0; i--) {
        
        if (s[i]==='#') {
            sremoved++;
        } else {
            if (sremoved>0) {
               sremoved--;
               continue;
           } else {
               seh.push(s[i])
           }
        }
    }
    for (let j=t.length-1; j>=0; j--) {
        
        if (t[j]==='#') {
            tremoved++;
        } else {
           if (tremoved>0) {
               tremoved--;
               continue;
           } else {
               teh.push(t[j])
           }
        }
        
    }
    if (teh.length !== seh.length) {
        return false
    }
    for (let k = 0; k<seh.length; k++) {
        if (seh[k]!==teh[k]) {
            return false
        }
    }
    return true;
};
