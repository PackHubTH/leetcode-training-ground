function isAnagram(s: string, t: string): boolean {
    let _s: string[] = s.split("").sort();
    let _t: string[] = t.split("").sort();
    for (let idx in _s) if (_s[idx] !== _t[idx]) return false;
    return _s.length === _t.length;
}