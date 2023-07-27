const mergeSort = arr => {
	if (arr.length <= 1) {
		return arr
	}
	const left = arr.slice(0, Math.ceil(arr.length / 2))
	const right = arr.slice(Math.ceil(arr.length / 2))
	return merge(mergeSort(left), mergeSort(right))
}
const merge = (left, right) => {
	let sorted = []
	while (right.length && right.length) {
		if (left[0] < right[0]) {
			sorted.push(left.shift())
		} else {
			sorted.push(right.shift())
		}
	}
	return sorted.concat(left, right)
}

export { mergeSort }
