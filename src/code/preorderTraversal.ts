/** 二叉树的前序遍历 给你二叉树的根节点 root ，返回它节点值的 前序 遍历从前面开始排序
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
function preOrder(root: TreeNode, res: Array<number>) {
  if(root === null){
    return
  }
  res.push(root.val)
  preOrder(root.left!, res)
  preOrder(root.right!, res)
}
function preorderTraversal(root: TreeNode | null): number[] {
  const res:Array<number> = []
  preOrder(root!, res)
  return res
};

export {
  preorderTraversal
}
