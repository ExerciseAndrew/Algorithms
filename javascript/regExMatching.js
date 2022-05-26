var isMatch = function(s, p) {
    const dp = Array(s.length + 1);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = Array(p.length + 1).fill(false);
    }
    dp[s.length][p.length] = true;
    for(let i = s.length; i >= 0; i--) {
        for(let j = p.length - 1; j >= 0; j--) {
            const fm = i < s.length && (s[i] === p[j] || p[j] === '.');
            if(j+1 < p.length && p[j+1] === '*') {
                dp[i][j] = dp[i][j+2] || (fm && dp[i+1][j]);
            } else {
                dp[i][j] = fm && dp[i+1][j+1];
            }
        }
    }
    return dp[0][0];
};
