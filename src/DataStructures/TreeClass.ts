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

export const BinaryPreorderTraversal = <T>(root: TreeNode<T> | null): void => {
    let str = '';
    const recurse = <T>(root: TreeNode<T> | null): void => {
        if (!root) return;
        str += root.val + ' | ';
        recurse(root.left);
        recurse(root.right);
    };
    recurse(root);
    console.log(str);
};
