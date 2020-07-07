function word(s, wordDict) {
    var n = s.length;
    var wordSet = new Set(wordDict);
    var dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (var i = 1; i <= n; i++) {
        for (var j = 0; j < i; j++) {
            if (dp[j] && wordDict.has(s.slice(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}
var s = 'name', wordict = [];
word(s, wordict);
function wordBreak(s, wordDict) {
    var n = s.length;
    var wordDictSet = new Set(wordDict);
    var dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (var i = 1; i <= n; i++) {
        for (var j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}
;
var n = s.length;
console.log(n);
var a = Array();
a.push(false);
console.log(a);
