/**
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
 * @param {TreeNode | null} root
 * @return {number[]}
 */
interface TreeNode{
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

export function inorderTraversal(root: TreeNode | null) : Array<number> {
  const res: Array<number> = []
  const stack: Array<TreeNode> = []
  if(root === null){
    return []
  }
  while(root !== null || stack.length) {
    while(root !== null) {
      stack.push(root)
      root = root.left
    }
    const pop = stack.pop()
    res.push(pop!.val)
    root = pop!.right
  }
  return res
}
