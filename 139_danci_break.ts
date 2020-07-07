function word(s:string, wordDict: string[]): boolean{
    const n: number = s.length;
    const wordSet: Set<string> = new Set<string>(wordDict);
    const dp: Array<boolean> = new Array(n+1).fill(false);
    dp[0] = true;
    for (let i = 1; i <=n ; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.has(s.slice(j, i-j))) {
                dp[i] = true;
                break;
            }
        }

    }
    return dp[n];
}
var s:string = 'name', wordict: Array<string> = [];
word(s, wordict);
function wordBreak(s: string, wordDict: string[]): boolean {
    const n: number = s.length;
    const wordDictSet: Set<string> = new Set(wordDict);
    const dp: Array<boolean> = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
};
const n: number = s.length;

console.log(n);


let a = Array<boolean>;
a.push(false);
console.log(a);