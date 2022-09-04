/** 二进制矩阵中的特殊位置  - easy
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = function(mat:Array<number>[]): number {
    const n = mat.length
    let len = 0;
    const x = new Array(mat[0].length).fill(0)
    const y = new Array(mat.length).fill(0)
    for (let i = 0; i < n; i ++ ) {
      for (let j = 0; j < n; j ++) {
        x[i] += mat[i][j] // x 相加
        y[j] += mat[i][j] // y 相加
      }
    }
    for (let i = 0; i < n; i ++ ) {
      for (let j = 0; j < n; j ++) {
        if(mat[i][j] === 1 && x[i] === 1 && y[j] === 1){
          len ++
        }
      }
    }
    return len
}

export {
  numSpecial
}
