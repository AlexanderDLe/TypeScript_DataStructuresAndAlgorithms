export class TreeNode<T> {
    val: T;
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    next: TreeNode<T> | null;
    parent: TreeNode<T> | null;
    constructor(val: T) {
        this.val = val;
        this.value = val;
        this.left = null;
        this.right = null;
        this.next = null;
        this.parent = null;
    }
}

export const BinaryPreorderTraversal = <T>(root: TreeNode<T> | null): void => {
    let str = '';
    const recurse = <T>(root: TreeNode<T> | null): void => {
        if (!root) return;
        let valueVar = root.val || root.value;
        str += valueVar + ' | ';
        recurse(root.left);
        recurse(root.right);
    };
    recurse(root);
    console.log(str);
};
