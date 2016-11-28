var treeNode = function (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}


var node_2_1 = new treeNode(1, null, null);
var node_2_2 = new treeNode(5, null, null);
var node_2_4 = new treeNode(14, null, null);


var node_1_1 = new treeNode(4, node_2_1, node_2_2);
var node_1_2 = new treeNode(12, null, node_2_4);

var root = new treeNode(6, node_1_1, node_1_2);

console.log('    ' + root.value);
console.log('   / \\');
console.log('  ' + root.left.value + '   ' + root.right.value);
console.log(' / \\   \\');
console.log(root.left.left.value + '   ' + root.left.right.value + '   ' + root.right.right.value);
