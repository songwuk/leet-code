/** 层序遍历
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
  val: number,
  left: TreeNode | null
  right: TreeNode | null
}
export function levelOrder(root: TreeNode | null): number[][] {
  if(root === null){
      return []
  }
  const res:number[][] = []
  const queue: TreeNode[] = []
  queue.push(root)
  while(queue.length !== 0){
      const len = queue.length;
      res.push([])
      for(let i = 0; i < len; ++i){
        const node = queue.shift()
        res[res.length - 1].push(node!.val)
        if(node?.left) queue.push(node.left)
        if(node?.right) queue.push(node.right)
      }
  }
  return res
}
