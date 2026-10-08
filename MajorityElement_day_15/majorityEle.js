
// Brute force method
// Time complexity: O(n^2)
// Space complexity: O(1)

function findMajorityElement(arr){

    for(let i=0; i<arr.length; i++){{
        let count = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count > arr.length / 2){
            return arr[i];
        }
    }

}
    return null
}


// frequency map method
// Time complexity: O(n)
// Space complexity: O(n)


function find_Majority_Element(arr){

    const frequencyMap = {};

    for(const num of arr){{
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    if(frequencyMap[num] > arr.length / 2){
        return num;
    }
    return null;
}

}