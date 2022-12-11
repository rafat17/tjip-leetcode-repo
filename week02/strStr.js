// Time Complexity: O(h + n) // h = number of characters in haystack, n = number of characters in needle
// Space Complexity: O(1)

var strStr = function (haystack, needle) {
    let haystackStartIndex = 0;
    let needleStartIndex = 0
    let firstOccurIndex = -1
    let needleMatchCharCount = 0

    while (needleStartIndex < needle.length && haystackStartIndex < haystack.length) {
        const currentNeedleChar = needle[needleStartIndex]
        const currentHaystackChar = haystack[haystackStartIndex]

        if (currentNeedleChar === currentHaystackChar) {

            if (firstOccurIndex === -1) {
                firstOccurIndex = haystackStartIndex
            }

            needleMatchCharCount++
            needleStartIndex++
            haystackStartIndex++
        }

        else {
            firstOccurIndex = -1
            needleMatchCharCount = 0
            needleStartIndex = 0
            haystackStartIndex++
        }
    }

    if(needleMatchCharCount === needle.length){
        return firstOccurIndex
    }

    return -1
};