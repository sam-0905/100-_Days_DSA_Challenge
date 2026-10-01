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