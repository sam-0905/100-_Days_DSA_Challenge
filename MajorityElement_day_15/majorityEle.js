
// Brute force method
// Time complexity: O(n^2)
// space complexity: O(1)

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