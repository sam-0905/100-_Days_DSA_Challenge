// Brute force method

// Time: O(n²)
// Space: O(1)

function checkAnagram(s,t){
    if(s.length != t.length) return false

    for(let i=0; i< s.length ; i++){
        let sCount = 0
        let tCount = 0

        for(let j =0; j< t.length; j ++){
            if(s[i] === s[j]){
                sCount++
            }

            if(s[i] === s[t]){
                tCount++
            }
        }
        if(sCount !== tCount) return false
    }
    return true
}

// Optimized
// Time: O(n²)
// Space: O(1)

function isAnagram(s,t){
    if(s.length !== t.length) return false

    const frequency = {}

    for(const char of s){
        frequency[char] = (frequency[char] || 0 )+ 1 
    }

    for(const char of t) {
        if(!frequency[char]){
            return false
        }
    }

    return true
}



// using sort method
// Time: O(n log n)
// Space: O(n)

function sortAnagram(s,t){

    if(s.length !== t.length) return false

    const sSort = s.split("").sort().join("")
    const tSort = s.split("").sort().join("")

    return sSort === tSort
}
