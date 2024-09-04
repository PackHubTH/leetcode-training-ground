function groupAnagrams(strs: string[]): string[][] {
    let ans = {};

    for (let s of strs) {
        let charCnt: number[] = new Array(26).fill(0); 
        // count frequency of characters
        for (let c of s) {
            charCnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        let key = charCnt.join('-');
        if (!ans[key]) {
            ans[key] = [];
        }
        ans[key].push(s);
    }
    return Object.values(ans);
};