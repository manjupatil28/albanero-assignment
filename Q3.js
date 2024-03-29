// Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.

//Solution

function canSegmentString(s, wordArray) {
    const arr = new Array(s.length + 1).fill(false);
    arr[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] && wordArray.includes(s.substring(j, i))) {
                arr[i] = true;
                break;
            }
        }
    }
    return arr[s.length];
}
