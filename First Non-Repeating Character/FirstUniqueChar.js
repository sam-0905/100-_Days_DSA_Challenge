//  brute force method

// Time Complexity: O(n^2)
// space Complexity: O(1)

function firstUniqChar(s) {
    for(let i=0; i<s.length; i++){
        let count = 0;

        for(let j=0; j<s.length; j++){
            if(s[i] === s[j]){
                count++;
            }
            else if(count > 1){
                break;
            }

    }
    return count === 1 ? i : -1;
}
}

// optimized method

// Time Complexity: O(n)
// space Complexity: O(n)


function firstUniqueChar(s) {

    const frequencyMap = {};

    for(num of s){
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    for(let i=0; i<s.length; i++){
        if(frequencyMap[s[i]] === 1){
            return i;
        }
    }

    return -1;
}