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
 */
interface TreeNode{
  val: number,
  left: TreeNode | null,
  right: TreeNode | null
}
export function postorderTraversal(root: TreeNode | null): number[] {
  if(root === null){
      return []
  }
  const res: Array<number> = []
  const stack: Array<TreeNode> = []
  let prev = null
  while( root !== null || stack.length !== 0){
      while( root !== null){
          stack.push(root)
          root = root.left
      }
      root = stack.pop()!;
      if (root!.right == null || root.right == prev) {
          res.push(root!.val);
          prev = root;
          root = null;
      } else {
          stack.push(root!);
          root = root!.right;
      }
  }
  return res
};
