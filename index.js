import { Tree } from './tree.js'

let newTree = Tree([2, 0, 55, 93, -20, 23, 566, 9999, 43, 22, 99])
const arbolito = newTree.buildTree()
newTree.prettyPrint(arbolito)
