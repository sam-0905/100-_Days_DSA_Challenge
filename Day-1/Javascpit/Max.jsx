let arr = [1,2,3,4,5,6]

function findMaxNum(num){
    let max = -Infinity

    for(let i=0;i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

findMaxNum(arr)


