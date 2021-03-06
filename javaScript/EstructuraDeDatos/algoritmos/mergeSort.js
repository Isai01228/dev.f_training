'use strict'

const mergeSort = (unsortedArray) =>{
    //Axioma, comprobación
    if (unsortedArray.length <= 1) return unsortedArray

    const size = unsortedArray.length
    const middle = Math.floor(size / 2)

    const left = unsortedArray.slice(0, middle)
    const right = unsortedArray.slice(middle, size)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)
}

const merge = (left, right) => {
    let resultArray = [], leftIndex = 0, rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex])
            leftIndex++
        }else{
            resultArray.push(right[rightIndex])
            rightIndex++
        }
    }

    const finalArray = resultArray
                            .concat(left.slice(leftIndex))
                            .concat(right.slice(rightIndex))
}

const numeros = [3, 0, 1, 9, 8, 5, 7, 4, 2, 6]

const result = mergeSort(numeros)
console.log(result);