/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let goodOnes = [];
    let unique;
    emails.forEach(email => {
        let prefix = '';
        let suffix = '';
        let clean = '';
        
        for (let i = 0; i<email.length; i++) {
            if (email[i]==='@') {
                break;}
            if (email[i]==='+') {
                break;
            } else {
                if (email[i]!=='.')
                {prefix+=email[i]}
            }
        }
        for (let j = email.length-1; j>0; j--) {
            if (email[j]==='@') {
                break;
            } else {
               suffix+=email[j];
            
            }
        }
        clean+=prefix;
        clean+='@';
        suffix=suffix.split().reverse().join('');
        clean+=suffix;
        goodOnes.push(clean)
    })
    unique = goodOnes.filter((v, i, a) => a.indexOf(v) === i);
    
    return unique.length;
    
};
