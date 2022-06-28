/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */

// definition tree
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// to enconde the tree
const serialize = (root) => {
    if (!root) {
        return '';
    }
    const data = [];

    // set order
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node) {
            data.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            data.push(null);
        }
    }

    // clean
    while (data.length > 0 && data[data.length - 1] === null) {
        data.pop();
    }

    return JSON.stringify(data);
}

// var serialize = function (root) {
//     console.log(root);
//     '{3,{1,null,4},{}}},null,5,'
//     return '';
// };

/**
 * @param {string} serialized_str
 * @return {TreeNode}
 */
// var deserialize = function (serialized_str) {
//     return null;
// };

const deserialize = (data) => {
    try {
        data = JSON.parse(data);
    } catch (err) {
        return null;
    }

    const root = new TreeNode(data.shift());
    const queue = [root];

    while (data.length > 0) {
        // read left node
        // push
        let val = data.shift();
        if (val) {
            node.left = new TreeNode(val);
            queue.push(node.left);
        }

        // read right node
        // push
        val = data.shift();
        if (val) {
            node.right = new TreeNode(val);
            queue.push(node.right);
        }
    }

    return root;
}