// Brute force method

// Time: O(n)
// Space: O(n)

function movesZeros(arr){
    let result = []
    let zeroCount =0

    for(num of arr){
        if(num === 0){
            zeroCount++
        }else{
            result.push(num)
        }
    }

    while(num > 0){
        result.push(0)
        zeroCount--
    }

    return result
}


// Optimized way

// Time: O(n)
// Space: O(1)


function movesZerosToEnd(arr){
    let insertPos = 0

    for(let i=0; i<arr.length;i++){
        if(arr[i]!= 0){
            arr[insertPos] = arr[i]
            insertPos++
        }
    }

    while(insertPos <arr.length){
        arr[insertPos] = 0
        insertPos--
    }

    return arr
}


// swap method
// Time: O(n)
// Space: O(1)

function moveZerosArr(arr) {
    let insertPos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[insertPos], arr[i]] = [arr[i], arr[insertPos]];
            insertPos++;
        }
    }

    return arr;
}