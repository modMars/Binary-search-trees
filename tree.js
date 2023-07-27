import { mergeSort } from './merge-sort.js'
import { Node } from './node.js'

const Tree = arr => {
	arr = mergeSort(arr)

	const buildTree = (array = arr) => {
		if (array.length <= 1) return null
		let mid = Math.floor(array.length / 2)
		let leftSubArr = array.slice(0, mid)
		let rightSubArr = array.slice(mid)
		let newNode = Node(array[mid])
		newNode.left = buildTree(leftSubArr)
		newNode.right = buildTree(rightSubArr)
		return newNode
	}

	const prettyPrint = (node, prefix = '', isLeft = true) => {
		if (node === null) {
			return
		}
		if (node.right !== null) {
			prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
		}
		console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
		if (node.left !== null) {
			prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
		}
	}
	return { buildTree, prettyPrint }
}

export { Tree }
