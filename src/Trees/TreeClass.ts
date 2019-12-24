export class TreeNode<T> {
    val: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    constructor(val: T) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
