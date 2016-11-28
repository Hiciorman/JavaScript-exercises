var treeNode = function (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

treeNode.prototype[Symbol.iterator] = function* () {
    yield this.value;

    if (this.left !== null)
        for (var node of this.left)
            yield node;

    if (this.right !== null)
        for (var node of this.right)
            yield node;
}


var node_2_1 = new treeNode(1, null, null);
var node_2_2 = new treeNode(5, null, null);
var node_2_4 = new treeNode(14, null, null);


var node_1_1 = new treeNode(4, node_2_1, node_2_2);
var node_1_2 = new treeNode(12, null, node_2_4);

var root = new treeNode(6, node_1_1, node_1_2);

for (var e of root) {
    console.log(e);
}