const link = 'https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true';


function binarySearch(sortedArr, item){
    let left = 0;
    let right = sortedArr.length - 1;
    let mid;
    
    while(left <= right){
        mid = left + Math.floor((right - left)/2);
        if(sortedArr[mid] == item) return mid;
        
        if(item > sortedArr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left;
}


function climbingLeaderboard(ranked, player) {
    // Idea: Using Set to ranked the ranked array follow index
    // Then binarySearch the index to add a player in the created Set
    // Sort array from high to low
    // Ex: 100 20 20 30 10
    // Using Set structure to sort ranked of array follow index
    // Ex: 100 30 20 10 => 0 1 2 3
    // Each element in Set is unique
    // Then search index of each player need be added in sorted and unique array by BinarySearch algorithm
    const sortedArr = [...new Set(ranked.sort((a, b) => b-a))];
    const results = [];
    player.forEach(p => {
       const index =  binarySearch(sortedArr, p);
       results.push(index+1);
    });
    return results;
}
