let firstHalf =  [1, 2, 6, 7, 8]
let secondHalf =  [3, 4, 5, 9, 10]

function findMinAndRemove(firstHalf, secondHalf) {
 
    let minFirstHalf = firstHalf[0]
    let minSecondHalf = secondHalf[0]

    if (minFirstHalf < minSecondHalf) {
        return firstHalf.shift()
    } else {
        return secondHalf.shift()
    }
}

function merge (firstHalf, secondHalf) {
    let sorted = []
    while (firstHalf.length != 0 && secondHalf.length !=0) {
        let currentMin = findMinAndRemove(firstHalf, secondHalf)
        sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}


let unsortedArray = [2, 1]

function mergeSort(array) {
    let midpoint = Math.floor(array.length / 2)
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint)

    if (array.length < 2) {
        return array
    } else {
        merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}