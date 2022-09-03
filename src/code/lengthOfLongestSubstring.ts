/**
 * 无重复字符的最长子串 - middle
 * @param {string} s
 * @returns {number} 
 */
export function lengthOfLongestSubstring(s:string):number {
  const setSub = new Set();
  const n = s.length;
  let lf = -1
  let ans = 0
  for(let i = 0; i < n; ++i){
    if(i !== 0){
      setSub.delete(s.charAt(i - 1))
    }
    while(lf + 1 < n && !setSub.has(s.charAt(lf + 1))) {
      setSub.add(s.charAt(lf + 1))
      ++ lf
    }
    ans = Math.max(ans, lf - i + 1)
  }

  return ans
}
