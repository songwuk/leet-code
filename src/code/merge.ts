/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export function merge(intervals:Array<number>[]):Array<number>[] {
  if(intervals.length === 1){
    return intervals
  }
  const ans = intervals.sort((a,b) => a[0] - b[0]);
  const vec = new Array<Array<number>>(0);
  vec.push(ans[0]);
  let j = 0;
  for(let i = j + 1; i < ans.length; i++){
    if(ans[i][0] <= vec[j][1]){
      vec[j][1] = Math.max(ans[i][1], vec[j][1])
    }else{
      vec.push(ans[i])
      j ++
    }
  }
  return vec
}
