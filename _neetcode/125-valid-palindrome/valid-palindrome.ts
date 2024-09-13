function isPalindrome(s: string): boolean {
  function isValid(c: string): boolean {
    if (c < "0" || (c > "9" && c < "A") || (c > "Z" && c < "a") || c > "z")
      return false
    return true
  }

  let left: number = 0
  let right: number = s.length - 1

  while (left < right) {
    while (left < right && !isValid(s[left])) left++
    while (right > left && !isValid(s[right])) right--
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
    left++
    right--
  }
  return true
}